// Own React
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// Pages
import { Home, HouseDetail } from "../pages";

// Shared Components
import { Footer, MenuBar } from "../components/shared";

export default function AppRoutes(): JSX.Element {
	return (
		<BrowserRouter>
			<div className="flex flex-col justify-between items-center min-h-screen">
				<div className="w-full">
					<MenuBar />

					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/house-detail" element={<HouseDetail />} />
						<Route path="*" element={<Navigate to="/" />} />
					</Routes>
				</div>

				<Footer />
			</div>
		</BrowserRouter>
	);
}
