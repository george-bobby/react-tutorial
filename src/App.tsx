import { useState } from "react";
import Message from "./components/Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
	let cities = ["mumbai", "kolakta", "chennai", "bengaluru"];

	const handleSelectItem = (item: string) => {
		return console.log(item);
	};

	const [alertVisible, setAlertVisibility] = useState(false);

	return (
		<>
			<Message />
			<ListGroup
				cities={cities}
				heading="Cities List"
				onSelectItem={handleSelectItem}
			/>

			<Button
				onClick={() => console.log("Clicked")}
				color="danger"
			>
				Button
			</Button>
			{alertVisible && (
				<Alert onClose={() => setAlertVisibility(false)}>
					Hello Alert
				</Alert>
			)}
			<Button
				onClick={() => setAlertVisibility(true)}
				color="primary"
			>
				Button
			</Button>
		</>
	);
}

export default App;
