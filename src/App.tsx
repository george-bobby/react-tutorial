import Message from "./Message";
import ListGroup from "./components/ListGroup";
function App() {
	let cities = ["mumbai", "kolakta", "chennai", "bengaluru"];

	return (
		<>
			{/* <Message /> */}
			<ListGroup
				cities={cities}
				heading="Cities List"
			/>
		</>
	);
}

export default App;
