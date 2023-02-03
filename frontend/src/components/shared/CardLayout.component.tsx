import axios from "axios";
import { useEffect, useState } from "react";
import { CardHouse } from ".";
import { House } from "../../interfaces/app.interfaces";
import { houseService } from "../../services";

export default function CardLayout(): JSX.Element {
	const [houses, setHouses] = useState<House[]>([]);

	useEffect(() => {
		houseService.getHouses().then((houses: House[]) => setHouses(houses));
	}, []);

	if (houses.length === 0) return <div>Loading...</div>;

	return (
		<div className="card-layout">
			{houses.map((house: House) => (
					<CardHouse house={house} />
			))}
		</div>
	);
}
