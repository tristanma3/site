import Image from "next/image";

export const Skill = (props: any) => {
	return (
		<>
			<div className="bg-[#282b32] rounded-lg hover:bg-[#484d58]">
				<div className="p-5 mmlg:max-w-[360px] ">
					<div className="flex items-center">
						<Image
							alt={`${props.name} Image`}
							src={props.src}
							width={60}
							height={60}
							className="rounded-lg"
						/>
						<div className="ml-4">
							<h1 className="font-bold">{props.name}</h1>
							<p className="text-sm text-text-darker leading-6">{props.genre}</p>
						</div>
					</div>
					<div className="mt-4">
						<p className="font-metropolis text-base text-text-darker leading-6">{props.description}</p>
					</div>
				</div>
			</div>
		</>
	);
};
