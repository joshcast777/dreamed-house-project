// PrimeReact Styles
import "primereact/resources/themes/tailwind-light/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

// Redux
import { Provider } from "react-redux";

// Global Styles
import "./styles/styles.scss";

// Routes
import AppRoutes from "./routes/App.route";

// Store
import { store } from "./store";

export default function DreamedHouse() {
	return (
		<Provider store={store}>
			<AppRoutes />
		</Provider>
	);
}
