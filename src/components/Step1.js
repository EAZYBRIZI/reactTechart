import { useState } from "react";

function Step1() {
    const [room, setRoom] = useState('');
    console.log(room); 
    return (
        <div className="step step--step1">
    
            <h1>Калькулятор цены конструкции</h1>
            <h3>Шаг 1</h3>

            <div className="question">
                <h2>Что будем строить?</h2>
                <ul>
                    <li
                        onClick={() => {
                            setRoom('Жилой дом');
                        }}
                    > Жилой дом </li>
                    <li
                        onClick={() => {
                            setRoom('Гараж');   
                        }}
                    > Гараж </li>
                </ul>
            </div>

            <div className="buttons">
                <button>Отмена</button>
                <button>Далее</button>
            </div>

        </div>
      
    );
}

export default Step1;