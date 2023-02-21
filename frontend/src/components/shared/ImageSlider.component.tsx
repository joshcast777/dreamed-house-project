// PrimeReact
import { PrimeGalleria } from "../../imports/prime-react";

// Helpers
import { cloudinaryUrlHelper } from "../../helpers";

// Own Interfaces
interface ImageSliderProps {
	imageUrls: string[];
}

export default function ImageSlider({ imageUrls }: ImageSliderProps): JSX.Element {
	const item = (imageSrc: string): JSX.Element => <img src={cloudinaryUrlHelper(imageSrc)} alt={imageSrc} className="w-full h-full object-cover" />;

	return <PrimeGalleria value={imageUrls} circular showThumbnails={false} showItemNavigators item={item} className="galleria" />;
}
