function Step2() {
    return (
         <div className="step step--step2">
    
          <h1>Калькулятор цены конструкции</h1>
          <h3>Шаг 2</h3>

          <div className="question">
              <h2>Количество этажей (число):</h2>
              <input type="text" />
          </div>

          <div className="buttons">
              <button>Отмена</button>
              <button>Далее</button>
          </div>

      </div>
      
    );
}

export default Step2;