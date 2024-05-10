import { useReducer } from "react";
import { ACTION_TYPES } from "./ActionTypes";
import { INITIAL_STATE } from "./PostReducer";
import PostReducer from "./PostReducer";

const Post = () => {
	const [state, dispatch] = useReducer(PostReducer, INITIAL_STATE);

	const handleFetch = () => {
		dispatch({ type: ACTION_TYPES.FETCH_START });
		fetch("")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
			})
			.catch((err) => {
				dispatch({ type: ACTION_TYPES.FETCH_ERROR });
			});
	};

	return (
		<div>
			<button onClick={handleFetch}>
				{state.loading ? "Wait..." : "Fetch the post"}
			</button>
			<p>{state.post?.title}</p>
			<span>{state.error && "Something went wrong!"}</span>
		</div>
	);
};

export default Post;
