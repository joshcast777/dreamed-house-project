// Shared Components
import { ImagesliderComponent } from "../shared";

// Own Interfaces
interface GalleriaProps {
	imageUrls: string[];
}

export default function Galleria({ imageUrls }: GalleriaProps): JSX.Element {
	return (
		<div className="lg:basis-3/4">
			<ImagesliderComponent imageUrls={imageUrls!} />

			<div className="bg-dark-color text-white-color p-3 text-sm">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt architecto quae quos nisi pariatur magni esse ad, cumque velit! Iste eveniet assumenda veniam explicabo voluptatibus quia tenetur sed dolorum soluta!</p>
			</div>
		</div>
	);
}
