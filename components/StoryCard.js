import Image from "next/image";

function StoryCard({ name, src, profile }) {
	return (
		<div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x-none p-3 transition duration-200 transform ease-in hover:scale-105">
			<Image
				className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
				src={profile}
				width="40"
				height="40"
				layout="fixed"
				objectFit="cover"
			/>
			<Image
				className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
				src={src}
				layout="fill"
			/>
			<p className="z-50 hidden lg:flex absolute bottom-2 text-white">{name}</p>
		</div>
	);
}

export default StoryCard;
