import React, {useState} from 'react';
import './App.css';
import "./styles/steps.css";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";

function App() {

	return (
	  	<div>
			{<Step1/>}
			{<Step2/>}
			{<Step3/>}
			{<Step4/>}
	  	</div>
	);
}

export default App;


// function App() {
// 	const [likes, setLikes] = useState(10);
	
// 	function plus() {
// 		setLikes(likes + 1);
// 	}

// 	function minus() {
// 		setLikes(likes - 1);
// 	}

// 	return (
// 	  	<div>
// 			<h1>{likes}</h1>
// 			<button onClick={plus}>Увеличить</button>
// 			<button onClick={minus}>Уменьшить</button>
// 			{ <Step1/>}
// 	  	</div>
// 	);
// }