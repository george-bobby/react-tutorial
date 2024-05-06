import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
function App() {
	let cities = ["mumbai", "kolakta", "chennai", "bengaluru"];
	const handleSelectItem = (item: string) => {
		return console.log(item);
	};
	return (
		<>
			{/* <Message />
			<ListGroup
				cities={cities}
				heading="Cities List"
				onSelectItem={handleSelectItem}
			/>
			<Alert>
				Hello <span>World</span>
			</Alert> */}

			<Button
				onClick={() => console.log("Clicked")}
				color="danger"
			>
				My Button
			</Button>
		</>
	);
}

export default App;
