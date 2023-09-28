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
                        props.setMaterial(1)
                    }
                > Кирпич </li>
                <li
                    onClick={() => 
                        props.setMaterial(2)
                    }
                > Шлакоблок </li>
                <li
                    onClick={() => 
                        props.setMaterial(3)
                    }
                > Деревянный брус </li>
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
                disabled={isNaN(props.material)}
            >Далее</button>
        </div>

    </div>
      
    );
}

export default Step3;