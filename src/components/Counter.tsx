interface Props {
	count: number;
	theme: string;
	setCount: (arg0: any) => void; // Adjusted setCount type
	setTheme: (arg0: any) => void; // Adjusted setTheme type
}

const Counter = ({ count, theme, setCount, setTheme }: Props) => {
	function decCount() {
		setCount((prevCount: number) => prevCount - 1);
		setTheme("red");
	}

	function incCount() {
		setCount((prevCount: number) => prevCount + 1);
		setTheme("yellow");
	}

	return (
		<>
			<button
				className="btn btn-warning"
				onClick={decCount}
			>
				-
			</button>
			<span className="badge badge-success mx-2 text-dark">{count}</span>
			<span className="badge badge-primary mx-2 text-dark">{theme}</span>

			<button
				className="btn btn-info"
				onClick={incCount}
			>
				+
			</button>
		</>
	);
};

export default Counter;
