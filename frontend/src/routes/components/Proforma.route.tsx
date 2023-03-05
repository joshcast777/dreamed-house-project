// Own react
import { Navigate, Route, Routes } from "react-router-dom";

// Pages
import { ProformaPage } from "../../pages/proforma";

export default function Proforma(): JSX.Element {
	return (
		<Routes>
			<Route path="" element={<ProformaPage />} />

			<Route path="*" element={<Navigate to="/not-found" />} />
		</Routes>
	);
}
