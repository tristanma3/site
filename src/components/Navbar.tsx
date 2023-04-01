import Link from "next/link";

export const Navbar = (props: any) => {
	const navigation = [
		{ name: "#main", href: "/" },
		{ name: "#projects", href: "/projects" },
	];

	return (
		<>
			<div className="w-full flex justify-center items-center gap-6 text-sky-50 min-h-[90px]">
				{navigation.map(item => (
					<Link
						href={item.href}
						key={item.name}
						className="underline underline-offset-2 decoration-2 transition-all ease-in-out duration-200 hover:text-bg-sky-700"
					>
						{item.name}
					</Link>
				))}
			</div>
		</>
	);
};
