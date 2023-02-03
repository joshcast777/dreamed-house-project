// PrimeReact
import { Divider } from "../../imports/prime-react";

// Shared Components
import { LogoLink, SocialLinks } from ".";

export default function Footer(): JSX.Element {
	return (
		<div className="bg-background-dark w-full py-7 mt-10">
			<div className="responsive-container width-transition">
				<div className="mb-10 sm:flex sm:justify-between sm:items-center">
					<LogoLink className="max-w-max mx-auto mb-5 sm:mb-0 sm:mx-0" />

					<SocialLinks />
				</div>

				<Divider />

				<p className="mt-10 text-neutral-400 text-center">&copy; Todos los derechos reservados - Casa Soñada</p>
			</div>
		</div>
	);
}
