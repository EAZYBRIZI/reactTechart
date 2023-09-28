import React from 'react';

function Result(props) {
    return (
        <div className="step step--error">
    
            <h1>Калькулятор цены конструкции</h1>
            <h3>Результат рассчёта</h3>

            <div className="question">
                <h2>{props.data.result === 'ok' ? 'Успешно' : 'Ошибка'}</h2>
                <span className='success'>{props.data.message ? props.data.message : 'not work'}</span>
            </div>

            <div className="buttons">
                <button
                    onClick={() => {
                        props.setCurrentStep(1);
                        
                    }}
                >Отмена</button>
            </div>

        </div>
      
    );
}

export default Result;