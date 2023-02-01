// PrimeReact
import { Divider } from "../../imports/prime-react";

// React Icons
import { BsFacebook, BsInstagram, BsTwitter } from "../../imports/react-icons";

// Shared Components
import { LogoLinkComponent } from ".";

export default function FooterComponent(): JSX.Element {
	return (
		<div className="py-7 w-full bg-neutral-800">
			<div className="responsive-container width-transition">
				<div className="mb-10 sm:flex sm:justify-between sm:items-center">
					<LogoLinkComponent className="mx-auto h-11 mb-5 sm:mb-0" />

					<div className="flex justify-center items-center gap-5 text-2xl">
						<a href="https://www.facebook.com/" target="_blank">
							<BsInstagram className="text-rose-500" />
						</a>

						<a href="https://www.instagram.com/" target="_blank">
							<BsFacebook className="text-blue-600" />
						</a>

						<a href="https://twitter.com/" target="_blank">
							<BsTwitter className="text-sky-600" />
						</a>
					</div>
				</div>

				<Divider />

				<p className="mt-10 text-neutral-400 text-center">&copy; Todos los derechos reservados - Casa Soñada</p>
			</div>
		</div>
	);
}
