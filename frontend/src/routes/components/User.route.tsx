import { Navigate, Route, Routes } from "react-router-dom";
import { PageLayoutComponent } from "../../components/shared";
import { UserPage } from "../../pages/user";

export default function User(): JSX.Element {
	return (
		<PageLayoutComponent>
			<Routes>
				<Route path="" element={<UserPage />} />
				{/* <Route path="house-detail/:houseId" element={<HouseDetailPage />} /> */}

				<Route path="*" element={<Navigate to="/not-found" />} />
			</Routes>
		</PageLayoutComponent>
	);
}
