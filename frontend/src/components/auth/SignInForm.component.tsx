// Primereact
import { PrimeInputText, PrimePassword, PrimeProgressSpinner } from "../../imports/prime-react";

// React Icons
import { CgArrowRightOIcon } from "../../imports/react-icons";

// Form & Validation
import { Controller, FieldError, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Own Components
import { FieldInputComponent, FormButtonsComponent, HeaderAuthFormComponent } from ".";

// Store
import { useAppDispatch, useAppSelector } from "../../store";
import { signIn } from "../../store/slices/user";

// Interfaces
import { IAuthUser } from "../../interfaces";

// Own Interfaces
interface FormData {
	email: string;
	password: string;
}

// Global Consts
const defaultValues = {
	email: "",
	password: ""
};

export default function SignInForm(): JSX.Element {
	const dispatch = useAppDispatch();

	const inputTextClasses = (error: FieldError): string => `input input-text border-transition ${error ? "border-invalid-color" : ""}`;

	const inputPasswordClasses = (error: FieldError): { className: string; inputClassName: string } => ({
		className: "input input-password border-transition",
		inputClassName: error ? "border-invalid-color enabled:focus:border-invalid-color" : ""
	});

	const { isLoading } = useAppSelector(state => state.user);

	const schema = yup
		.object<FormData>({
			email: yup
				.string()
				.required("Correo requerido")
				.matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Formato de correo inválido"),
			password: yup.string().required("Contraseña requerida")
		})
		.required();

	const { control, handleSubmit, reset, formState } = useForm<FormData>({
		defaultValues,
		resolver: yupResolver(schema)
	});

	const toggleAnimate = (error: FieldError): string => (error ? "animate__animated animate__shakeX" : "");

	const onSubmit: SubmitHandler<FormData> = (data: FormData): void => {
		const userData: IAuthUser = { ...data };

		dispatch(signIn(userData));
	};

	if (isLoading)
		return (
			<div className="mt-10 flex justify-center">
				<PrimeProgressSpinner />
			</div>
		);

	return (
		<>
			<HeaderAuthFormComponent title="Registrarse" link="/auth/sign-up">
				<>
					Registrarse <CgArrowRightOIcon className="inline text-2xl" />
				</>
			</HeaderAuthFormComponent>

			<form onSubmit={handleSubmit(onSubmit)} onReset={(): void => reset()} className="rounded max-w-sm mx-auto">
				<Controller
					name="email"
					control={control}
					render={({ field}): JSX.Element => (
						<FieldInputComponent htmlFor={field.name} label="Correo" errorMessage={formState.errors[field.name]!}>
							<PrimeInputText id={field.name} {...field} placeholder="example.example@mail.com" className={`${inputTextClasses(formState.errors[field.name]!)} ${toggleAnimate(formState.errors[field.name]!)}`} />
						</FieldInputComponent>
					)}
				/>

				<Controller
					name="password"
					control={control}
					render={({ field }): JSX.Element => (
						<FieldInputComponent htmlFor={field.name} label="Contraseña" errorMessage={formState.errors[field.name]!}>
							<PrimePassword inputId={field.name} {...field} inputRef={field.ref} placeholder="Password" className={`${inputPasswordClasses(formState.errors[field.name]!).className} ${toggleAnimate(formState.errors[field.name]!)}`} inputClassName={inputPasswordClasses(formState.errors[field.name]!).inputClassName} feedback={false} toggleMask />
						</FieldInputComponent>
					)}
				/>

				<FormButtonsComponent submitButton="Iniciar sesión" cancelButton="Limpiar" />
			</form>
		</>
	);
}
