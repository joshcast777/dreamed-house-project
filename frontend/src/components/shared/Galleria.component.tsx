// PrimeReact
import { PrimeGalleria } from "../../imports/prime-react";

// Cloudinary
import cloudinaryUrl from "../../helpers/cloudinaryUrl.helper";

// Own Interfaces
interface GalleriaProps {
	imageUrls: string[];
}

export default function Galleria({ imageUrls }: GalleriaProps): JSX.Element {
	const item = (imageSrc: string): JSX.Element => <img src={cloudinaryUrl(imageSrc)} alt={imageSrc} className="w-full h-full object-cover" />;

	return <PrimeGalleria value={imageUrls} circular showThumbnails={false} showItemNavigators item={item} className="galleria" />;
}
