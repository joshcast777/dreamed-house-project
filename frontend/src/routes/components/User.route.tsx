// Own react
import { Navigate, Route, Routes } from "react-router-dom";

// Shared Components
import { PageLayoutComponent } from "../../components/shared";

// Pages
import { UserPage } from "../../pages/user";

// Routes
import { ProformaRoutes } from ".";

export default function User(): JSX.Element {
	return (
		<PageLayoutComponent>
			<Routes>
				<Route path="" element={<UserPage />} />
				<Route path="proformas/*" element={<ProformaRoutes />} />

				<Route path="*" element={<Navigate to="/not-found" />} />
			</Routes>
		</PageLayoutComponent>
	);
}
