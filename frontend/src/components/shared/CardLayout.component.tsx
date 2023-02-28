// Own Interfaces
interface CardLayoutProps {
	children: JSX.Element;
}

export default function CardLayout({ children }: CardLayoutProps): JSX.Element {
	return (
		<div className="card-layout responsive-container width-transition">
			{children}
		</div>
	);
}
