import style from '../styles/Home.module.css';
import '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={style.wrapper}>
      <div className={style.about}>
        <div className={style.img}></div>
        <div className={style.info}>
          <h1>Сеглин Михаил</h1>
          <p>РеспубликаБеларусь</p>
          <p>Телефон:+375333942423</p>
          <p>E-mail:misha_hp@tut.by</p>
        </div>
      </div>
      <h2>Work Experience</h2>
      <div className={style.work}>
        <div className={style.one}>
          <h1>Инженер-программист</h1>
          <h3>ОАО "Беларуськалий"</h3>
          <h3>Август 2023 - настоящее время</h3>
          <p>ыпоыкщжо</p>
        </div>
        <div className={style.two}>
          <h1>Инженер-электроник</h1>
          <h3>ОАО "Беларуськалий"</h3>
          <h3>Сентябрь 2018 - Июль 2023</h3>
          <p>впукпукпа</p>
        </div>
      </div>
      <h2>Skills</h2>
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
            <div className={style.img}></div>
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
