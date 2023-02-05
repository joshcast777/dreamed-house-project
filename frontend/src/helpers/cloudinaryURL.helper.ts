export default function cloudinaryUrl(imageName: string): string {
	return `${import.meta.env.VITE_CLOUDINARY_PATH}/${imageName}`;
}
