// React Icons
import { BsFacebookIcon, BsInstagramIcon, BsTwitterIcon } from "../../imports/react-icons";

// Own Interfaces
interface ISocialLink {
	link: string;
	icon: JSX.Element;
}

export default function SocialLinks(): JSX.Element {
	const socialLinks: ISocialLink[] = [
		{ link: "https://www.instagram.com/", icon: <BsInstagramIcon className="text-rose-500" /> },
		{ link: "https://www.facebook.com/", icon: <BsFacebookIcon className="text-blue-600" /> },
		{ link: "https://twitter.com/", icon: <BsTwitterIcon className="text-sky-600" /> }
	];

	return (
		<div className="flex justify-center items-center gap-5 text-2xl">
			{socialLinks.map(({ link, icon }: ISocialLink) => (
				<a key={link} href={link} target="_blank">
					{icon}
				</a>
			))}
		</div>
	);
}
