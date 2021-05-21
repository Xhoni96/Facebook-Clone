import { getSession } from "next-auth/client";
import Head from "next/head";
import Feed from "../components/Feed";
// import Image from "next/image";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { db } from "../firebase";

export default function Home({ session, posts }) {
	if (!session) return <Login />;
	return (
		<div className="h-screen bg-gray-100 overflow-hidden">
			<Head>
				<title>Create Next App</title>
			</Head>
			{/* Header */}
			<Header />

			<main className="flex">
				<Sidebar />

				<Feed posts={posts} />

				<Widgets />
			</main>
		</div>
	);
}

/* This is how we do server side rendering in nextjs. This function here will get executed before the Home fnction and what will it do is that it does all the calculating
so it get all the data for us before on server side and it will then return it as props on our home function before it is executed so we can consume it. 
And what this will do is that before the user had to request a page and waited for javascript to load on their browser. now he gets it completely rendered and this cuts that loading time wait.
 */
export async function getServerSideProps(context) {
	// Get the user
	const session = await getSession(context);

	//server side rendering of posts 👇
	const posts = await db.collection("posts").orderBy("timestamp", "desc").get();
	const docs = posts.docs.map((post) => ({
		id: post.id,
		...post.data(),
		timestamp: null,
	}));

	return {
		props: { session, posts: docs },
	};
}
