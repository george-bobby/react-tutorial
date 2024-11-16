import { useState, useEffect } from "react";
import Message from "./components/Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import UserGreeting from "./components/UserGreeting";
import Counter from "./components/Counter";
import FetchRes from "./components/FetchRes";
import Post from './components/Post'

function App() {
	let cities = ["mumbai", "kolakta", "chennai", "bengaluru"];

	const handleSelectItem = (item: string) => {
		return console.log(item);
	};

	const [alertVisible, setAlertVisibility] = useState(false);

	const [count, setCount] = useState(4);
	const [theme, setTheme] = useState("blue");

	const [res, setRes] = useState("posts");
	const [items, setItems] = useState([]);

	//return semantics
	return (
		<>
			<Message />
			<ListGroup
				cities={cities}
				heading="Cities List"
				onSelectItem={handleSelectItem}
			/>

			{/* <Button
				onClick={() => console.log("Clicked")}
				color="danger"
			>
				Button
			</Button> */}
			{/* {alertVisible && (
				<Alert onClose={() => setAlertVisibility(false)}>
					Hello Alert
				</Alert>
			)}
			<Button
				onClick={() => setAlertVisibility(true)}
				color="primary"
			>
				Button
			</Button> */}
			{/* <UserGreeting
				isLoggedIn={true}
				username="George"
			/> */}
			{/* <Counter
				count={count}
				theme={theme}
				setCount={setCount}
				setTheme={setTheme}
			/> */}
{/* 
			<FetchRes
				res={res}
				setRes={setRes}
				items={items}
				setItems={setItems}
			/> */}
			{/* <Post /> */}
		</>
	);
}

export default App;
