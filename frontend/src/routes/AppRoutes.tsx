// Own React
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// Pages
import { HomePage } from "../pages";

// Shared Components
import { FooterComponent, MenuBarComponent } from "../components/shared";

export default function AppRoutes(): JSX.Element {
	return (
		<BrowserRouter>
			<div className="flex flex-col justify-between items-center min-h-screen">
				<MenuBarComponent />

				<Routes>
					<Route path="/" element={<HomePage />} />

					<Route path="*" element={<Navigate to="/" />} />
				</Routes>

				<FooterComponent />
			</div>
		</BrowserRouter>
	);
}
