import { Menu } from "./Menu"

export const Header = () => {
	return (
		<>
			<header className="bg-transparent sticky top-0 h-fit w-full p-8 flex flex-row items-center justify-center z-50" id="header">
				<Menu />
			</header>
		</>
	)
}
