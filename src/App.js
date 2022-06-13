import './app.scss';
import logo from './imgs/logo.png';
import loadingBar from './imgs/main-screen__money.png';
import aboutImg from './imgs/about__img.png';
import start from './imgs/Ellipse 1 (Stroke)1.png';
import Rectangle1 from './imgs/Rectangle 7.png';
import Rectangle2 from './imgs/Rectangle 8.png';
import Rectangle3 from './imgs/Rectangle 9.png';
import Rectangle4 from './imgs/Rectangle 10.png';

function App() {
  return (
    <div className="app">
      <div className="content">
        <div className="main">
          <div className="header">
            <div className="header_logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="header_row">
              <ul>
                <li>Главная</li>
                <li>Курсы</li>
                <li>Расписание</li>
                <li>Преподаватели</li>
                <li>Рассылка</li>
                <li>Контакты</li>
              </ul>
            </div>
            <a className="header_btn" href="#">
              Зайти в кабинет
            </a>
          </div>
          <div className="main_info">
            <h1 className="main_info_text">Первый курс по компьютерной сборке</h1>
            <ul className="main_info_counter">
              <li>
                <div className="counter_number">18</div>
                <div className="counter_text">дней</div>
              </li>
              <li>
                <div className="counter_number">18</div>
                <div className="counter_text">часов</div>
              </li>
              <li>
                <div className="counter_number">18</div>
                <div className="counter_text">минут</div>
              </li>
              <li>
                <div className="counter_number">18</div>
                <div className="counter_text">секунд</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer">
          <a href="" className="footer_btn">
            Заказать курс
          </a>
          <div className="footer_info">
            <div className="footer_stats">
              <div className="stats">
                <div className="text">Учеников всего:</div>
                <div className="number">200</div>
              </div>
              <div className="stats">
                <div className="text">Успешно окончили курс:</div>
                <div className="number">190</div>
              </div>
            </div>
          </div>
          <div className="footer_info">
            <div className="money">
              <p className="text">заработано учениками:</p>
              <p className="number">400 000₽</p>
            </div>
            <div>
              <img className="footer_img" src={loadingBar} alt="Loading bar" />
              <div className="under_loading">
                <div>0</div>
                <div>1 000 000 ₽</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="information">
        <div className="about">
          <div>
            <img src={aboutImg} alt="zxc" />
          </div>
          <div>
            <h2>Чем мы занимаемся?</h2>
            <p className="about_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, dignissim et
              feugiat elit augue in suspendisse egestas. Dictum vestibulum mi et sed nunc, orci
              fermentum vestibulum, morbi. Et neque, adipiscing sapien sem senectus praesent aenean
              consequat. Aenean facilisi turpis aliquet fringilla. Nunc sem felis sed interdum
              feugiat mattis elit, sollicitudin. Quam pharetra rhoncus risus, cursus id elementum
              aliquet. Nullam turpis arcu malesuada arcu interdum placerat nisi, lobortis.
            </p>
          </div>
        </div>
        <div className="start">
          <div className="start_title">
            <img src={start} />
            <h2>Быстрый старт</h2>
          </div>
          <div className="start_text">
            Больше 90% учеников прошли полный курс и смогли собрать свой первый компьютер
          </div>
          <div className="start_info">
            <div className="percent">
              <div>100%</div>
              <div>75%</div>
              <div>50%</div>
              <div>Итог</div>
            </div>
            <div className="imgs">
              <div>
                <img src={Rectangle1} />
              </div>
              <div>
                <img src={Rectangle2} />
              </div>
              <div>
                <img src={Rectangle3} />
              </div>
              <div>
                <img src={Rectangle4} />
              </div>
            </div>
            <div className="items">
              <div className="item_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque
                accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus.
                Placerat dui.
              </div>
              <div className="item_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque
                accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus.
                Placerat dui.
              </div>
              <div className="item_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque
                accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus.
                Placerat dui.
              </div>
              <div className="item_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque
                accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus.
                Placerat dui.
              </div>
            </div>
          </div>
        </div>
        <div className="advantages">
          <h2>Получите профессию прямо сейчас</h2>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
