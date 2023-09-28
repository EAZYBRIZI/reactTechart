import React from 'react';

function Step3(props) {
    // const [material, setMaterial] = useState('');

    return (
        <div className="step step--step3">

        <h1>Калькулятор цены конструкции</h1>
        <h3>Шаг {props.currentStep}</h3>

        <div className="question">
            <h2>Материал стен:</h2>
            <ul>
                <li
                    onClick={() => 
                        props.setMaterial('1')
                    }
                > Кирпич </li>
                <li
                    onClick={() => 
                        props.setMaterial('2')
                    }
                > Шлакоблок </li>
                <li
                    onClick={() => 
                        props.setMaterial('3')
                    }
                > Деревянный брус </li>
            </ul>
        </div>

        <div className="buttons">
            <button
                onClick={() =>
                props.setCurrentStep(1)
            }
            >Отмена</button>
            <button
                onClick={() => {
                    props.setCurrentStep(props.material !== '' ? props.currentStep + 1 : props.currentStep);
                }}
            >Далее</button>
        </div>

    </div>
      
    );
}

export default Step3;