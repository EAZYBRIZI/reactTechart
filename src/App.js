import React, {useState, useEffect} from 'react';
import './App.css';
import "./styles/steps.css";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Result from "./components/Result";

function App() {
	const [data, setData] = useState({
		'currentStep' : 1,
		'room' : undefined,
	});
	// const [room, setRoom] = useState();
	const [floors, setFloors] = useState();
	const [material, setMaterial] = useState();
	const [lengthX, setLengthX] = useState(1);
    const [lengthY, setLengthY] = useState(1);
	const [response, setResponse] = useState([]);

	const cancel = () => {
		// setRoom();
		setFloors(1);
		setMaterial();
		setLengthX(1);
		setLengthY(1);
	};

	console.log(data.room);

	useEffect(() => {
        if (data.currentStep === 1) {
            cancel();
        }
    }, [data.currentStep]);

	const getResponse = () => fetch('https://data.techart.ru/lab/json/?building='+data.room+'&height='+floors+'&material='+material+'&sizex='+lengthX+'&sizey='+lengthY, {
		method: 'GET',
  	})
	.then(response => { return response.json() });
	
	return (
	  	<div>
			{data.currentStep === 1 && 
				<Step1
					data={data}
					setData={setData}
					// room={room}
					// setRoom={setRoom}
					cancel={cancel}
				/>}

			{(data.currentStep === 2 /*&& room === 1*/ ) &&
				<Step2
					data={data}
					setData={setData}
					floors={floors}
					setFloors={setFloors}
				/>
			}

			{(data.currentStep === 3 ) &&
				<Step3
					data={data}
					setData={setData}
					material={material}
					setMaterial={setMaterial}
				/>
			}

			{data.currentStep === 4 &&
				<Step4
					data={data}
					setData={setData}
					lengthX={lengthX}
					lengthY={lengthY}
					setLengthX={setLengthX}
					setLengthY={setLengthY}
					getResponse={getResponse}
					response={response}
					setResponse={setResponse}
				/>
			}

			{data.currentStep === 5 &&
				<Result
					data={data}
					setData={setData}
					response={response}
				/>
			}
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