// Own React
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// Pages
import { NotFoundPage } from "../pages/main";

// Routes
import { AuthRoutes, HouseRoutes, UserRoutes } from "./components";

export default function AppRoutes(): JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/house/*" element={<HouseRoutes />} />
				<Route path="/" element={<Navigate to="/house" />} />

				<Route path="/auth/*" element={<AuthRoutes />} />

				<Route path="/user/*" element={<UserRoutes />} />

				<Route path="/not-found" element={<NotFoundPage />} />

				<Route path="*" element={<Navigate to="/not-found" />} />
			</Routes>
		</BrowserRouter>
	);
}
