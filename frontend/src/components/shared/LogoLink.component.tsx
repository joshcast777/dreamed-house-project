// Own React
import { Link } from "react-router-dom";

// Cloudinary
import { cloudinaryUrlHelper } from "../../helpers";

// Interfaces
import { IClassName } from "../../interfaces";

export default function LogoLink({ className }: IClassName): JSX.Element {
	return (
		<Link to="/">
			<img src={cloudinaryUrlHelper("logo_yx6nb0.png")} alt="logo" className={className} />
		</Link>
	);
}
