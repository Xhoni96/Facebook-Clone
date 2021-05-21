import StoryCard from "./StoryCard";

const stories = [
	{
		name: "The Rock",
		src: "/rock.jpg",
		profile: "/rock_profile.jpg",
	},
	{
		name: "Elon Musk",
		src: "https://links.papareact.com/4zn",
		profile: "https://links.papareact.com/kxk",
	},
	{
		name: "Jeff Bezos",
		src: "https://links.papareact.com/k2j",
		profile: "https://links.papareact.com/f0p",
	},
	{
		name: "Mark Zuckerberg",
		src: "https://links.papareact.com/xql",
		profile: "https://links.papareact.com/snf",
	},
	{
		name: "Bill Gates",
		src: "https://links.papareact.com/4u4",
		profile: "https://links.papareact.com/zvy",
	},
];

function Stories() {
	return (
		<div className="flex justify-center gap-x-3 mx-auto">
			{stories.map(({ src, name, profile }) => (
				<StoryCard key={src} name={name} src={src} profile={profile} />
			))}
		</div>
	);
}

export default Stories;
