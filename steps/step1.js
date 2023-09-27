import "./steps.css";

function Step1() {
    return (
         <div className="step1">
    
          <h1>Калькулятор цены конструкции</h1>
          <h3>Шаг 1</h3>

          <div className="question">
              <h2>Что будем строить?</h2>
              <ul>
                  <li> Жилой дом </li>
                  <li> Гараж </li>
              </ul>
          </div>

          <div className="buttons">
              <button>Отмена</button>
              <button>Далее</button>
          </div>

      </div>
      
    );
}