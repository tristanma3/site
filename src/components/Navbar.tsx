import Link from "next/link";

export const Navbar = (props: any) => {
	const navigation = [
		{ name: "/main", href: "/" },
		{ name: "/projects", href: "/projects" },
		{ name: "/skills", href: "/skills" },
	];

	return (
		<>
			<div
				className="w-full flex justify-center items-center gap-6 text-text-color min-h-[90px]"
				style={{
					zIndex: 1,
				}}
			>
				{navigation.map(item => (
					<Link
						href={item.href}
						key={item.name}
						className="decoration-2 transition-all ease-in-out duration-200 text-sky-50 hover:text-fuchsia-700"
					>
						{item.name}
					</Link>
				))}
			</div>
		</>
	);
};
