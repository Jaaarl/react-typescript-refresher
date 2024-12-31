import {useState} from "react";
import {UserList} from "./components/user-list.tsx";
import {ShowHideText} from "./components/show-hide-text.tsx";

function App() {
	return (
		<>
			<UserList/>
			<ShowHideText/>
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