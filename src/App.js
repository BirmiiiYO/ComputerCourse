import './app.scss';
import logo from './imgs/logo.png';
import loadingBar from './imgs/main-screen__money.png';
import aboutImg from './imgs/about__img.png';
import start from './imgs/Ellipse 1 (Stroke)1.png';
import Rectangle1 from './imgs/Rectangle 7.png';
import Rectangle2 from './imgs/Rectangle 8.png';
import Rectangle3 from './imgs/Rectangle 9.png';
import Rectangle4 from './imgs/Rectangle 10.png';
import icon1 from './imgs/icon-1.png';
import icon2 from './imgs/icon-2.png';
import icon3 from './imgs/icon-3.png';
import spon from './imgs/spon.png';
import qwe from './imgs/qwe.png';
import timeline from './imgs/timeline.png';
import x1 from './imgs/xyi1.png';
import x2 from './imgs/xyi2.png';
import x3 from './imgs/xui3.png';
import vk from './imgs/vk.png';
import yt from './imgs/youtube.png';
import fb from './imgs/facebook.png';
import inst from './imgs/instagram.png';

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
            <h1 className="main_info_text">Первый курc по компьютерной сборке</h1>
            <ul className="main_info_counter">
              <li>
                <div className="counter_number">18</div>
                <div className="counter_text">Дней</div>
              </li>
              <li>
                <div className="counter_number">18</div>
                <div className="counter_text">Часов</div>
              </li>
              <li>
                <div className="counter_number">18</div>
                <div className="counter_text">Минут</div>
              </li>
              <li>
                <div className="counter_number">18</div>
                <div className="counter_text">Секунд</div>
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
          <div className="adv_info">
            <div className="adv">
              <img src={icon1} />
              <h4 className="first_h4">Только практические{'\n'} навыки в работе</h4>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque
                accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus.
                Placerat dui.
              </p>
            </div>
            <div className="adv">
              <img src={icon2} />
              <h4>Работа на самом современном оборудовании</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque
                accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus.
                Placerat dui.
              </p>
            </div>
            <div className="adv">
              <img src={icon3} />
              <h4>Сертификация по окончании обучения</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque
                accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus.
                Placerat dui.
              </p>
            </div>
          </div>
        </div>
        <div className="sponsors">
          <h4>Партнеры - топовые бренды</h4>
          <div className="logo">
            <div className="item_logo">
              <img src={spon} />
            </div>
            <div className="item_logo">
              <img src={spon} />
            </div>
            <div className="item_logo">
              <img src={spon} />
            </div>
            <div className="item_logo">
              <img src={spon} />
            </div>
          </div>
          <div className="logo">
            <div className="item_logo">
              <img src={spon} />
            </div>
            <div className="item_logo">
              <img src={spon} />
            </div>
            <div className="item_logo">
              <img src={spon} />
            </div>
            <div className="item_logo">
              <img src={spon} />
            </div>
          </div>
        </div>
        <div className="programm">
          <img src={qwe} />
          <h2>Программа обучения</h2>
          <h5>Больше 90% учеников прошли полный курс и смогли собрать свой первый компьютер</h5>
          <div className="list">
            <div className="list1">
              <div className="list_item">
                <h6>Неделя №1</h6>
                <p>Красивая часть курса, которая помогает в успехе</p>
              </div>
              <div className="list_item">
                <h6>Неделя №3</h6>
                <p>Красивая часть курса, которая помогает в успехе</p>
              </div>
              <div className="list_item">
                <h6>Неделя №5</h6>
                <p>Красивая часть курса, которая помогает в успехе</p>
              </div>
              <div className="list_item">
                <h6>Неделя №7</h6>
                <p>Красивая часть курса, которая помогает в успехе</p>
              </div>
            </div>
            <img className="timeline" src={timeline} />
            <div className="list2">
              <div className="list_item">
                <h6>Неделя №2</h6>
                <p>Красивая часть курса, которая помогает в успехе</p>
              </div>
              <div className="list_item">
                <h6>Неделя №4</h6>
                <p>Красивая часть курса, которая помогает в успехе</p>
              </div>
              <div className="list_item">
                <h6>Неделя №6</h6>
                <p>Красивая часть курса, которая помогает в успехе</p>
              </div>
              <div className="list_item">
                <h6>Неделя №8</h6>
                <p>Красивая часть курса, которая помогает в успехе</p>
              </div>
            </div>
          </div>
        </div>
        <div className="teachers">
          <h2>Ваши преподаватели</h2>
          <div className="prep">
            <div className="prep_item">
              <img src={x1} />
              <h6>Дмитрий Иванов</h6>
              <p>Специалист по видеокартам</p>
              <a>Биография</a>
            </div>
            <div className="prep_item">
              <img src={x2} />
              <h6>Дмитрий Иванов</h6>
              <p>Специалист по видеокартам</p>
              <a>Биография</a>
            </div>
            <div className="prep_item">
              <img src={x3} />
              <h6>Дмитрий Иванов</h6>
              <p>Специалист по видеокартам</p>
              <a>Биография</a>
            </div>
          </div>
        </div>
        <div className="subscription">
          <h2>Статьи каждую неделю</h2>
          <p>Больше 90% учеников прошли полный курс и смогли{'\n'} собрать свой первый компьютер</p>
          <div className="input">
            <input value="E-mail" className="colortext" />
            <button>Подписаться</button>
          </div>
          <div className="social">
            <a target="_blank" href="https://vk.com/birmiiiyo">
              <img src={vk} />
            </a>
            <a target="_blank" href="https://www.youtube.com/channel/UCHX-yf3LICCLSOrWX783i9g">
              <img src={yt} />
            </a>
            <a>
              <img src={fb} />
            </a>
            <a target="_blank" href="https://www.instagram.com/temabirmi">
              <img src={inst} />
            </a>
          </div>
          <p className="last">Templates #18. More on Figma.info</p>
        </div>
      </div>
    </div>
  );
}

export default App;
