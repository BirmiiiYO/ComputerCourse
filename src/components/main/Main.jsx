import React from 'react'
import st from './main.module.scss'
import logo from '../../imgs/logo.png'

export default function Header() {
  return (
    <div className={st.container}>
    <div className={st.header}>
       <div className={st.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={st.row}>
          <ul>
            <li>Главная</li>
            <li>Курсы</li>
            <li>Расписание</li>
            <li>Преподаватели</li>
            <li>Рассылка</li>
            <li>Контакты</li>
          </ul>
        </div>
        <button className={st.btn}>Зайти в кабинет</button>
    </div>
    <div className={st.info}>
      <div className={st.info_text}>Первый курс по компьютерной сборке</div>
      <div className={st.info_counter}>
      <div>18 дней</div>
      <div>18 часов</div>
      <div>18 минут</div>
      <div>18 секунд</div>
      </div>
    </div>
    <div>

    </div>
    </div>
  
  )
}
