import {UserList} from "./components/user-list.tsx";
import {ShowHideText} from "./components/show-hide-text.tsx";
import {Counter} from "./components/counter.tsx";

function App() {
	return (
		<>
			<UserList/>
			<ShowHideText/>
			<Counter/>
		</>
	)
}

export default App

function ShowText() {
	return "show text";
}

function HideText() {
	return "hide text";
}