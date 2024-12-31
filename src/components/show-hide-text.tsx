import {useState} from "react";

export function ShowHideText() {
	const [isShow, setIsShow] = useState(false);

	const handleClick = () => {
		setIsShow(!isShow)
	}
	return (
		<>
			<button className={"mt-2 bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700"}
							onClick={handleClick}>
				{isShow ? "click to hide text" : "click to show text"}
			</button>
			<div className="font-bold">
				{isShow ? <ShowText/> : <HideText/>}
			</div>
		</>
	)
}

function ShowText() {
	return "show text";
}

function HideText() {
	return "hide text";
}