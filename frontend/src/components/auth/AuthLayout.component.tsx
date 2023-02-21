// Shared Components
import { LogoLinkComponent } from "../shared";

// Helpers
import { backgroundImageStyleHelper, cloudinaryUrlHelper } from "../../helpers";

// Own Interfaces
interface AuthLayoutProps {
	children: JSX.Element;
}

export default function AuthLayout({ children }: AuthLayoutProps): JSX.Element {
	return (
		<div className="bg-fixed min-h-screen" style={backgroundImageStyleHelper("header-page-image_vrhxoi")}>
			<div className="h-full min-h-screen py-10 flex justify-center items-start bg-gradient-to-tr from-secondary-color/50 to-primary-color/50">
				<div className="relative width-transition px-5 py-8 w-11/12 mx-auto rounded-lg bg-white-color/60 backdrop-blur-sm max-w-max shadow-xl">
					<div className="height-transition w-full h-16 2xs:h-20 px-3 py-4 rounded-md bg-dark-color/75 backdrop-blur-sm mb-6">
						<LogoLinkComponent className="height-transition block h-full" imgClassName="height-transition mx-auto h-full" />
					</div>

					{children}
				</div>
			</div>
		</div>
	);
}
