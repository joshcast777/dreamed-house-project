// Own Interfaces
interface UserOptionProps {
	button: JSX.Element;
	className: string;
	title: JSX.Element;
}

export default function UserOption({ button, className, title }: UserOptionProps): JSX.Element {
	return (
		<div className={`mb-5 p-2 border-2 ${className} rounded-md xs:flex xs:justify-between xs:items-center md:block lg:flex`}>
			{title}

			{button}
		</div>
	);
}
