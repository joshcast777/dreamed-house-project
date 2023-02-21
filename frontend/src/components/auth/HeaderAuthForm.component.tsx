// Own react
import { Link } from "react-router-dom";

// Own Interfaces
interface HeaderAuthFormProps {
	children: JSX.Element;
	link: string;
	title: string;
}

export default function HeaderAuthForm({ children, link, title }: HeaderAuthFormProps): JSX.Element {
	return (
		<div className="mb-5 flex flex-col justify-between items-center xs:flex-row">
			<h2 className="text-3xl font-bold">{title}</h2>

			<Link to={link} className="font-semibold text-purple-600 hover:underline hover:underline-offset-4">
				{children}
			</Link>
		</div>
	);
}
