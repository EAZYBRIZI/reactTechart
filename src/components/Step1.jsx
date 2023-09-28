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
                            props.setData({
                                'room' : 1,
                                'currentStep' : 1,
                            })
                        }
                    > Жилой дом </li>
                    <li
                        onClick={() => 
                            props.setData({
                                'room' : 2,
                                'currentStep' : 1,
                            })   
                        }
                    > Гараж </li>
                </ul>
            </div>

            <div className="buttons">
                <button
                    onClick={() => {
                        props.setData({
                            'currentStep' : 1,
                        });
                        // props.cancel();
                    }}
                >Отмена</button>
                <button
                    onClick={() => 
                        props.setData({
                            'currentStep' : props.data.room !== '' ? props.data.currentStep + 1 : props.data.currentStep,
                        })
                    }
                    disabled={isNaN(props.data.room)}
                >Далее</button>
            </div>

        </div>
      
    );
}

export default Step1;