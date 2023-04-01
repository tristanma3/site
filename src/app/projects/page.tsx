import Image from "next/image";

const Projects = () => {
	return (
		<>
			<div
				style={{
					zIndex: 0,
					position: "fixed",
					width: "100vw",
					height: "100vh",
					pointerEvents: "none",
				}}
			>
				<Image src="/230804.webp" alt="lolbg" layout="fill" objectFit="cover" />
			</div>
			<div
				style={{
					zIndex: 1,
				}}
			>
				<h1 className="text-sky-50"> Fuck you </h1>
			</div>
		</>
	);
};

export default Projects;
