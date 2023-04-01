export const Skill = (props: any) => {
	return (
		<>
			<div className="bg-[#3d424e] rounded-lg hover:bg-[#4c5362]">
				<div className="p-5 mmlg:max-w-[360px] ">
					<div className="flex items-center">
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
