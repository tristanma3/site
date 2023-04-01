"use client";
import { useEffect } from "react";

const generateStars = () => {
	const container = document.querySelector(".space-background");
	if (!container) {
		return;
	}

	const numStars = Math.floor(Math.random() * 100) + 50;

	for (let i = 0; i < numStars; i++) {
		const star = document.createElement("div");
		star.classList.add("absolute");
		star.classList.add("w-1");
		star.classList.add("h-1");
		star.classList.add("bg-white");
		star.classList.add("rounded-full");
		star.classList.add("animate-pulse");
		star.style.left = `${Math.random() * 100}%`;
		star.style.top = `${Math.random() * 100}%`;
		container.appendChild(star);
	}
};

export const Stars = ({ children }: any) => {
	useEffect(() => {
		generateStars();
	}, []);

	return <div className="overflow-hidden h-screen w-screen space-background">{children}</div>;
};
