import { GitHubButton } from "@/components/GitHubButton";
import { Stars } from "@/components/Stars";

export default function Home() {
	return (
		<>
			<Stars>
				<div className="flex justify-center items-center">
					<div className="w-full h-[100vh] flex flex-col items-center justify-center text-white text-3xl font-semibold text-center">
						<h1 className="mb-4">gg</h1>
						<GitHubButton />
					</div>
				</div>
			</Stars>
		</>
	);
}
