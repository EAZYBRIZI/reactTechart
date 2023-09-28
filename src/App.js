import React, {useState, useEffect} from 'react';
import './App.css';
import "./styles/steps.css";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Result from "./components/Result";

function App() {
	const [currentStep, setCurrentStep] = useState(1);
	const [room, setRoom] = useState('');
	const [floors, setFloors] = useState('1');
	const [material, setMaterial] = useState('');
	const [lengthX, setLengthX] = useState('1');
    const [lengthY, setLengthY] = useState('1');
	const [data, setData] = useState([]);

	const cancel = () => {
		setRoom('');
		setFloors('1');
		setMaterial('');
		setLengthX('1');
		setLengthY('1');
	};

	useEffect(() => {
        if (currentStep === 1) {
            cancel();
        }
    }, [currentStep]);

	const getResponse = () => fetch('https://data.techart.ru/lab/json/?building='+room+'&height='+floors+'&material='+material+'&sizex='+lengthX+'&sizey='+lengthY, {
		method: 'GET',
  	})
	.then(response => { return response.json() });
	
	return (
	  	<div>
			{currentStep === 1 && 
				<Step1 
					currentStep={currentStep} 
					setCurrentStep={setCurrentStep}
					room={room}
					setRoom={setRoom}
					cancel={cancel}
				/>}

			{(currentStep === 2 ) &&
				<Step2
					currentStep={currentStep}
					setCurrentStep={setCurrentStep}
					floors={floors}
					setFloors={setFloors}
				/>
			}

			{(currentStep === 3 ) &&
				<Step3
					currentStep={currentStep}
					setCurrentStep={setCurrentStep}
					material={material}
					setMaterial={setMaterial}
				/>
			}

			{currentStep === 4 &&
				<Step4
					currentStep={currentStep}
					setCurrentStep={setCurrentStep}
					lengthX={lengthX}
					lengthY={lengthY}
					setLengthX={setLengthX}
					setLengthY={setLengthY}
					getResponse={getResponse}
					data={data}
					setData={setData}
				/>
			}

			{currentStep === 5 &&
				<Result
					setCurrentStep={setCurrentStep}
					data={data}
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