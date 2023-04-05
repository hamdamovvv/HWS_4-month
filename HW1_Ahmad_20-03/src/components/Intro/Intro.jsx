import React from 'react';
import './Intro.css'
import background from './images_intro/intro__background.png'

function Intro() {
    return (
            <section className="intro" style={{backgroundImage: `url(${background})`}}>
                <div className="intro_wrapper">
                    <div className="intro__span">
                <span>
                    Жакшыраак жана ыңгайлуу болуп калган "Autoline" жаңы веб-сайтына кош келиңиз! Аны түзүүдө биз бардык суроолорго жооп табуу үчүн бардык заманбап тенденцияларды жана технологияларды эске алдык.
                </span>
                    </div>
                    <div className="intro__btn">
                        <button className="More">Көбүрөөк</button>
                    </div>
                </div>
            </section>
    )
}

export default Intro;