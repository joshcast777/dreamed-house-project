// Own React
import { Link } from "react-router-dom";

// Interfaces
import { ClassName } from "../../interfaces/app.interfaces";

export default function LogoLinkComponent({ className }: ClassName): JSX.Element {
	return (
		<Link to="/">
			<img src={`${import.meta.env.VITE_CLOUDINARY_PATH}/v1675233141/dreamed-house/logo_yx6nb0.svg`} alt="logo" className={className} />
		</Link>
	);
}
