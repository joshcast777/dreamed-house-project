// Shared Components
import { HeroImageComponent, PageTitleComponent } from ".";

// Interfaces
import { IHeroImage, ITitle } from "../../interfaces";

// Own Interfaces
interface TopPageProps {
	heroImage: IHeroImage;
	title: ITitle;
}

export default function TopPage({ heroImage, title }: TopPageProps): JSX.Element {
	return (
		<>
			<HeroImageComponent text={heroImage.text} imageSrc={heroImage.imageSrc} />

			<PageTitleComponent title={title.title} />
		</>
	);
}
