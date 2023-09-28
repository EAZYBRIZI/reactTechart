import React from 'react';

function Step2(props) {
    // const [floors, setFloors] = useState('1');

    return (
        <div className="step step--step2">

        <h1>Калькулятор цены конструкции</h1>
        <h3>Шаг {props.currentStep}</h3>

        <div className="question">
            <h2>Количество этажей (число):</h2>
            <input type="number"
                min="1"
                value={props.floors} 
                onChange={ event =>
                    props.setFloors(event.target.value)
                }
            />
        </div>

        <div className="buttons">
            <button
                onClick={() =>
                props.setData({
                    'currentStep' : 1
                })
            }
            >Отмена</button>
            <button
                onClick={() =>
                    props.setData({
                        'currentStep' : props.floors !== '' ? props.data.currentStep + 1 : props.data.currentStep,
                    })
                }
            >Далее</button>
        </div>

    </div>
      
    );
}

export default Step2;