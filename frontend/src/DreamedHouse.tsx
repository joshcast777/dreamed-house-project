// PrimeReact Styles
import "primereact/resources/themes/tailwind-light/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

// Animate.style
import "animate.css";

// Redux
import { Provider } from "react-redux";

// Global Styles
import "./styles/styles.scss";

// Routes
import AppRoutes from "./routes/App.route";

// Store
import { store } from "./store";

export default function DreamedHouse(): JSX.Element {
	return (
		<Provider store={store}>
			<AppRoutes />
		</Provider>
	);
}
