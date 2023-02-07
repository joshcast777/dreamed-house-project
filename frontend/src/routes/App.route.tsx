// Own React
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// Pages
import { HomePage, HouseDetailPage } from "../pages";

// Shared Components
import { FooterComponent, MenuBarComponent } from "../components/shared";

export default function AppRoutes(): JSX.Element {
	return (
		<BrowserRouter>
			<div className="flex flex-col justify-between items-center min-h-screen">
				<div className="w-full">
					<MenuBarComponent />

					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/house-detail/:houseId" element={<HouseDetailPage />} />

						<Route path="*" element={<Navigate to="/" />} />
					</Routes>
				</div>

				<FooterComponent />
			</div>
		</BrowserRouter>
	);
}
