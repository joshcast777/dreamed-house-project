// Shared Components
import { FooterComponent, MenuBarComponent } from ".";

// Own Interfaces
interface PageLayoutProps {
	children: JSX.Element;
}

export default function PageLayout({ children }: PageLayoutProps): JSX.Element {
	return (
		<div className="flex flex-col justify-between items-stretch min-h-screen">
			<div className="w-full bg-white-color">
				<MenuBarComponent />
			</div>

			{children}

			<FooterComponent />
		</div>
	);
}
