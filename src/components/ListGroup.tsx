import { useState } from "react";

interface Props {
	cities: string[];
	heading: string;
	onSelectItem: (item: string) => void;
}

function ListGroup({ cities, heading, onSelectItem }: Props) {
	// let cities = ["mumbai", "kolakta", "chennai", "bengaluru"];

	const getCityIndex = (index: number) => {
		return console.log(index);
	};

	// cities = [];
	const cityEmpty = cities.length === 0 && <p>No items found</p>;

	const [selectedIndex, setSelectedIndex] = useState(-1);

	return (
		<>
			<h1>{heading}</h1>
			{cityEmpty}
			<ul className="list-group">
				{cities.map((city, index) => (
					<li
						className={
							selectedIndex === index
								? "list-group-item active"
								: "list-group-item"
						}
						key={city}
						// onClick={() => getCityIndex(index)}
						onClick={() => {
							setSelectedIndex(index);
							onSelectItem(city);
						}}
					>
						{city}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
