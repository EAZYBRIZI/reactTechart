import React from 'react';

function Step1(props) {
    // const [room, setRoom] = useState('');

    return (
        <div className="step step--step1">
    
            <h1>Калькулятор цены конструкции</h1>
            <h3>Шаг {props.currentStep}</h3>

            <div className="question">
                <h2>Что будем строить?</h2>
                <ul>
                    <li
                        onClick={() => 
                            props.setRoom('1')
                        }
                    > Жилой дом </li>
                    <li
                        onClick={() => 
                            props.setRoom('2')   
                        }
                    > Гараж </li>
                </ul>
            </div>

            <div className="buttons">
                <button
                    onClick={() => {
                        props.setCurrentStep(1);
                        // props.cancel();
                    }}
                >Отмена</button>
                <button
                    onClick={() => 
                        props.setCurrentStep(props.room !== '' ? props.currentStep + 1 : props.currentStep)
                    }
                    
                >Далее</button>
            </div>

        </div>
      
    );
}

export default Step1;