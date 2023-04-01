"use client";

import Image from "next/image";
import Masonry from "react-masonry-css";
import { Project } from "@/components/Project";

const breakpointColumnsObj = {
	default: 2,
	700: 1,
};

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
				<h1 className="text-sky-50">
					{" "}
					Fuck you Fuck you Fuck you Fuck you Fuck you Fuck you Fuck you Fuck you{" "}
				</h1>
				<div className="text-text-color flex flex-col justify-center items-center">
					<Masonry
						breakpointCols={breakpointColumnsObj}
						className="flex w-auto smd:ml-[-1.5rem] gap-6 px-6"
						columnClassName="smd:pl-6 flex flex-col gap-6"
					>
						<div className="text-[#bdc0c7]">
							<Project name="Project 1" />
							<Project name="Project 2" />
							<Project name="Project 3" />
							<Project name="Project 4" />
							<Project name="Project 5" />
							<Project name="Project 6" />
							<Project name="Project 7" />
							<Project name="Project 8" />
						</div>
					</Masonry>
				</div>
			</div>
		</>
	);
};

export default Projects;
