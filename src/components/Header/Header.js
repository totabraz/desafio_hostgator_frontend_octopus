import React from 'react';
import classes from './Header.module.scss';
import iconCheck from '../../assets/imgs/icon_check.svg'
import btn_arrow_down from '../../assets/imgs/btn_arrow_down.svg'
import atendente from '../../assets/imgs/atendente.svg'
import armario_mesa from '../../assets/imgs/armario_mesa.svg'

const Header = () => {
    return (
        <header className={classes.Header}>
            
            <div className={classes.InnerHader}>
                <section className={classes.Infos}>
                    <img src={atendente} className={classes.Person} alt=" " arial-hidden="true"/>
                    <img src={armario_mesa} className={classes.CoffeeTable} alt=" " arial-hidden="true"/>            
                    <h1 className={classes.SubTitle}>Hospedagem de Sites</h1>
                    <h2 className={classes.Title}>Tenha uma hospedagem de sites estável e evite perder visitantes diariamente</h2>
                    <div className={classes.TxtArea}>
                        <p className={classes.Txt}>
                            <img src={iconCheck} aria-hidden="true" focusable="false" alt=" "/>
                            99,9% de disponibilidade: seu site sempre no ar
                        </p>
                        <p className={classes.Txt}>
                            <img src={iconCheck} aria-hidden="true" focusable="false" alt=" "/>
                            Suporte 24h, todos os dias
                        </p>
                        <p className={classes.Txt}>
                            <img src={iconCheck} aria-hidden="true" focusable="false" alt=" "/>
                            Painel de Controle cPanel
                        </p>
                    </div>
                </section>
            </div>
            <div className={classes.Curve}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path d="M0.00,00.00 C250.00,20 250.00,20 500.00,00.00 L500.00,0.00 L0.00,0.00 Z" className={classes.Path}></path>
                </svg>
                <a href="#plans" className={classes.BtnDown} title="Go to Plans" alt="Go to Plans">
                    <img src={btn_arrow_down} alt=" " arial-hidden="true"/>
                </a>
            </div>

        </header>
    )
}
export default Header;