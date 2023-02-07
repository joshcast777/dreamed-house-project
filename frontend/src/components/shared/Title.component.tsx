// Interfaces
import { ITitle } from "../../interfaces";

export default function Title({ title = "Title" }: ITitle) {
	return (
		<h3 className="text-primary-color text-xl text-center font-bold mb-5 sm:text-2xl lg:text-3xl">
			<span className="font-transition">{title}</span>
		</h3>
	);
}
