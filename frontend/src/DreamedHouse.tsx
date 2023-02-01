// PrimeReact Styles
import "primereact/resources/themes/tailwind-light/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

// Global Styles
import "./styles/styles.scss";

// Routes
import AppRoutes from "./routes/AppRoutes";

export default function DreamedHouse() {
	return <AppRoutes />;
}
