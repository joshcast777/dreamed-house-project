import { fill } from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from "../imports/cloudinary";

export default function cloudinaryInstance(imageName: string, width: number = 300, height: number = 50) {
	const cloudinary = new Cloudinary({
		cloud: {
			cloudName: import.meta.env.VITE_CLOUDINARY_NAME
		}
	});

	const image = cloudinary.image(imageName).resize(fill().width(3000)).format("webp");

	return image;
}
