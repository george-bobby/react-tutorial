import { useEffect } from "react";

interface Props {
	res: string;
	setRes: (arg0: string) => void;
	setItems: (arg0: any) => void;
	items: any;
}

const FetechRes = ({ res, setRes, items, setItems }: Props) => {
	//effects editors
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${res}`)
			.then((response) => response.json())
			.then((json) => setItems(json));
	}, [res]);

	return (
		<>
			<div className="btn-group">
				<button
					className="btn btn-success"
					onClick={() => setRes("posts")}
				>
					posts
				</button>

				<button
					className="btn btn-warning"
					onClick={() => setRes("comments")}
				>
					comments
				</button>

				<button
					className="btn btn-info"
					onClick={() => setRes("users")}
				>
					users
				</button>
			</div>
			<h1>{res}</h1>
			{items.map((item: any) => (
				<pre>{JSON.stringify(item)}</pre>
			))}
		</>
	);
};

export default FetechRes;
