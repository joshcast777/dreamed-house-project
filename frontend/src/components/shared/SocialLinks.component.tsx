// React Icons
import { BsFacebook, BsInstagram, BsTwitter } from "../../imports/react-icons";

export default function SocialLinks() {
	return (
		<div className="flex justify-center items-center gap-5 text-2xl">
			<a href="https://www.instagram.com/" target="_blank">
				<BsInstagram className="text-rose-500" />
			</a>

			<a href="https://www.facebook.com/" target="_blank">
				<BsFacebook className="text-blue-600" />
			</a>

			<a href="https://twitter.com/" target="_blank">
				<BsTwitter className="text-sky-600" />
			</a>
		</div>
	);
}
