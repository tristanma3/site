"use client";

import Masonry from "react-masonry-css";
import { Skill } from "@/components/Skill";

const breakpointColumnsObj = {
	default: 2,
	700: 1,
};

const Skills = () => {
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
				<video autoPlay muted loop>
					<source src="./skillsbg.mp4" type="video/mp4" />
				</video>
			</div>
			<div
				style={{
					zIndex: 1,
				}}
			>
				<div className="text-text-color flex flex-col justify-center items-center">
					<Masonry
						breakpointCols={breakpointColumnsObj}
						className="flex w-auto smd:ml-[-1.5rem] gap-6 px-6"
						columnClassName="smd:pl-6 flex flex-col gap-6"
					>
						<div className="text-[#bdc0c7]">
							<Skill
								name="Steam"
								src="/steam.png"
								genre="Game Library"
								description="Steam is a video game digital distribution service and storefront from Valve."
							/>
						</div>
						<div className="text-[#bdc0c7]">
							<Skill
								name="Chess"
								src="/chess.webp"
								genre="Strategy, Board Game"
								description="Chess is a game played between two opponents on opposite sides of a board containing 64 squares of alternating colors. Each player has 16 pieces: 1 king, 1 queen, 2 rooks, 2 bishops, 2 knights, and 8 pawns. The goal of the game is to checkmate the other king."
							/>
						</div>
						<div className="text-[#bdc0c7]">
							<Skill
								name="Osu"
								src="/osu.png"
								genre="Rhythm, Aim"
								description="An incredibly hard rhythm game which involves clicking on circles, dragging your mouse across tubes, and spinning your mouse rapidly across the screen."
							/>
						</div>
						<div className="text-[#bdc0c7]">
							<Skill
								name="Valorant"
								src="/val.webp"
								genre="Strategy, First-Person Shooter, Tactical Shooter"
								description="Valorant is a team-based first-person tactical hero shooter set in the near future. Players play as one of a set of Agents, characters based on several countries and cultures around the world."
							/>
						</div>
						<div className="text-[#bdc0c7]">
							<Skill
								name="Tetr.io"
								src="/tetr.webp"
								genre="Strategy, Matching"
								description="In Tetris, players complete lines by moving differently shaped pieces (tetrominoes), which descend onto the playing field. The completed lines disappear and grant the player points. The game ends when the uncleared lines reach the top of the playing field."
							/>
						</div>
						<div className="text-[#bdc0c7]">
							<Skill
								name="Counter Strike Global Offensive"
								src="/csgo.webp"
								genre="Strategy, First-Person Shooter, Tactical Shooter"
								description="A round-based, 5v5 tactical FPS with an Attackers vs. Defenders setup and no respawns, meaning if a player is eliminated they will not respawn until the next round."
							/>
						</div>
						<div className="text-[#bdc0c7]">
							<Skill
								name="League"
								src="/lol.webp"
								genre="Strategy RPG, MOBA"
								description="It features a team-based competitive game mode based on strategy and outplaying opponents. Players work with their team to break the enemy Nexus before the enemy team breaks theirs."
							/>
						</div>
						<div className="text-[#bdc0c7]">
							<Skill
								name="League(TFT)"
								src="/tft.webp"
								genre="Strategy"
								description="Teamfight Tactics (TFT) is an auto battler game developed and published by Riot Games. Players compete online against seven other opponents by building a team to be the last one standing."
							/>
						</div>
					</Masonry>
				</div>
			</div>
		</>
	);
};

export default Skills;
