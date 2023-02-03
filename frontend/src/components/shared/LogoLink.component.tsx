// Own React
import { Link } from "react-router-dom";

// Cloudinary
import { cloudinaryURL } from "../../helpers";

// Own Interfaces
interface Logo {
	className: string;
}

export default function LogoLink({ className }: Logo): JSX.Element {
	return (
		<Link to="/">
			<img src={cloudinaryURL("logo_yx6nb0.png")} alt="logo" className={className} />
		</Link>
	);
}
