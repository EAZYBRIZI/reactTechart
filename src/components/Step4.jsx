import React from 'react';

function Step4(props) {
    // const [lengthX, setLengthX] = useState('1');
    // const [lengthY, setLengthY] = useState('1');

    return (
        <div className="step step--step4">
    
        <h1>Калькулятор цены конструкции</h1>
        <h3>Шаг {props.currentStep}</h3>

        <div className="question">
            <h2>Длина стен (в метрах):</h2>
            <div className="inputs">
                <input type="number" 
                    min="1"
                    value={props.lengthX}
                    onChange={ event => 
                        props.setLengthX( event.target.value )
                    }
                />
                X
                <input type="number" 
                    min="1"
                    value={props.lengthY}
                    onChange={ event => 
                        props.setLengthY( event.target.value )
                    }
                />
            </div>

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
                onClick={() => {
                    props.setData({
                        'currentStep' : (props.lengthX, props.lengthY) !== '' ? props.currentStep + 1 : props.currentStep,
                    });
                    props.getResponse()
                        .then(response => props.setResponse(response));
                }}
            >Рассчитать</button>
        </div>

      </div>
      
    );
}

export default Step4;