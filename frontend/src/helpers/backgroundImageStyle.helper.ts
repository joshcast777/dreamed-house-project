// Helpers
import { cloudinaryUrlHelper } from ".";

// Interfaces
import { IBackgroundImageStyle } from "../interfaces";

export default function backgroundImageStyle(imagePath: string): IBackgroundImageStyle {
	return {
		backgroundImage: `url(${cloudinaryUrlHelper(imagePath)})`,
		backgroundPosition: "center center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover"
	};
}
