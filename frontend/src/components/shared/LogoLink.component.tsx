// Own React
import { Link } from "react-router-dom";

// Helpers
import { cloudinaryUrlHelper } from "../../helpers";

// Own Interfaces
interface LogoLinkProps {
	className?: string;
	imgClassName?: string;
}

export default function LogoLink({ className, imgClassName }: LogoLinkProps): JSX.Element {
	return (
		<Link to="/" className={`flex justify-center items-center ${className}`}>
			<img src={cloudinaryUrlHelper("logo_yx6nb0.png")} alt="logo" className={imgClassName} />
		</Link>
	);
}
