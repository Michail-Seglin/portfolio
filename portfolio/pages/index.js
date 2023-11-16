import style from '../styles/Home.module.css';
// import '../styles/globals.css'
export default function Home() {
  return (
    <div className={style.wrapper}>
      <div className={style.about}>
        <div className={style.contacts}>
          <div className={style.img}></div>
          <div className={style.info}>
            <h1>Сеглин Михаил</h1>
            <p>Республика:Беларусь</p>
            <p>Телефон:+375333942423</p>
            <p>E-mail:misha_hp@tut.by</p>
          </div>
        </div>
      </div>
      <div className={style.work}>
        <div className={style.one}>
          <h1>Инженер-программист</h1>
          <p>ОАО "Беларуськалий"</p>
          <p>Август 2023 - настоящее время</p>
          <p>ыпоыкщжо</p>
        </div>
        <div className={style.two}>
          <h1>Инженер-электроник</h1>
          <p>ОАО "Беларуськалий"</p>
          <p>Сентябрь 2018 - Июль 2023</p>
          <p>впукпукпа</p>
        </div>
      </div>
      <div className={style.skills}>
        <div className={style.text}>
          <div className={style.block1}>
            <p>React</p>
            <p>Javascript</p>
            <p>Node.js</p>
            <p>Redux</p>
          </div>
          <div className={style.block2}>
            <p>Material UI</p>
            <p>MongoDB</p>
            <p>PostgreSQL</p>
            <p>MySQL</p>
          </div>
        </div>
        <div className={style.uny}>
          <div className={style.educ}>
            <p>Белорусский национальный технический университет</p>
          </div>
          <div className={style.lang}>
            <p>English B1</p>
            <p>Deutsch B1</p>
            <p>Russian C2</p>
          </div>
        </div>
        <div className={style.link}>https://www.linkedin.com/in/michail-seglin/</div>
      </div>
    </div>

  )
}
