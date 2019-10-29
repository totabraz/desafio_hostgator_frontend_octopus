import React from 'react';
import classes from './CarouselItem.module.scss';
import RoundButton from '../../RoundButton/RoundButton';
import RoundLabel from '../../RoundLabel/RoundLabel';

// Plans icons
import icon_plan_p from '../../../assets/imgs/icon_plan_p.svg'
import icon_plan_m from '../../../assets/imgs/icon_plan_m.svg'
import icon_plan_turbo from '../../../assets/imgs/icon_plan_turbo.svg'
import icon_info from '../../../assets/imgs/icon_info.svg'

const CarouselItem = (props)=>  {
    const thisCycle = props.plan.cycle
    let priceOrder 
    let priceWithDiscount 
    let totalSaved 
    let pricePerMonth 
    let discount = 40 
    let iconPlan = null

    let txtNumSites = null
    let txtStorage = null

    let mainClass = classes.CarouselItem;
    let colorButton = null
    switch (props.plan.name) {
        case "Plano P":
            iconPlan = icon_plan_p
            txtNumSites = "Para 1 site"
            txtStorage = "100 GB"
            mainClass += (props.cardIndex === props.activeCard) ?  ' ' + classes.Focus : '' 
            break;

        case "Plano M":
            iconPlan = icon_plan_m
            txtNumSites = "Sites Ilimitados"
            txtStorage = "100 GB"
            mainClass += ' ' + classes.Active 
            colorButton = 'orange'
            mainClass += (props.cardIndex === props.activeCard) ?  ' ' + classes.Focus : '' 
            break;
        
        case "Plano Turbo":
            iconPlan = icon_plan_turbo
            txtNumSites = "Sites Ilimitados"
            txtStorage = "150 GB"
            mainClass += (props.cardIndex === props.activeCard) ?  ' ' + classes.Focus : '' 
            break;

        default:
            break;
    }

    switch(props.activePeriod){
        case "1ano":
            priceOrder = thisCycle.annually.priceOrder;
            priceWithDiscount = +(priceOrder * ((100 - discount)/100)).toFixed(2)
            totalSaved = +(priceOrder - priceWithDiscount).toFixed(2)
            pricePerMonth = +(priceOrder / thisCycle.annually.months).toFixed(2)
            break;

        case "1mes":
            priceOrder = thisCycle.monthly.priceOrder
            priceWithDiscount = +(priceOrder * ((100 - discount)/100)).toFixed(2)
            totalSaved = +(priceOrder - priceWithDiscount).toFixed(2)
            pricePerMonth = +(priceOrder / thisCycle.monthly.months).toFixed(2)
            break
            
        case "3anos":
            priceOrder = thisCycle.triennially.priceOrder
            priceWithDiscount = +(priceOrder * ((100 - discount)/100)).toFixed(2)
            totalSaved = +(priceOrder - priceWithDiscount).toFixed(2)
            pricePerMonth = +(priceOrder / thisCycle.triennially.months).toFixed(2)
            break;
        
        default:
            break;
    }

    
    return ( 
        <div className={mainClass}>

            <header>
                <img src={iconPlan} alt=" "/>
                <h1>{props.plan.name}</h1>
            </header>
            
            <section className={classes.ValoresArea}>
                <p><span className={classes.OldValue}>R&#36; {priceOrder}</span> <strong>R&#36; {priceWithDiscount}</strong></p>
                <p>equivalente a</p>    
                <p className={classes.PerMonth}>R&#36; <span>{pricePerMonth}</span>/mês*</p>
                <RoundButton
                    full={true}
                    color={colorButton}
                    alt="Contrate Agora"
                    title="Contrate Agora">
                    Contrate Agora
                </RoundButton>
                <p>
                    <strong>1 ano de Domínio Grátis</strong>
                    <button className={classes.BtnInfo} alt="Informações sobre o um ano de domínio grátis">
                        <img src={icon_info} alt=" "/>
                    </button>
                </p>
                <p>
                    economize R&#36; {totalSaved}
                    <RoundLabel
                        type="green"
                        rightSide={true}
                        >{discount}% <span style={{textTransform: "uppercase"}}>OFF</span>
                    </RoundLabel>
                </p>
            </section>
            
            <section className={classes.InfoArea}>
                <p><span>{txtNumSites}</span></p>
                <p><strong>{txtStorage}</strong> de Armazenamento</p>
                <p><span>Contas de E-mail <strong>Ilimitadas</strong></span></p>
                <p>
                    Criador de Sites 
                    <a href="/"
                        alt="Saiba mais sobre o Criador de Site"
                        title="Saiba mais sobre o Criador de Site">
                            <strong>Grátis</strong>
                        </a>
                    </p>
                <p>Certificado SSL <strong>Grátis</strong> (https)</p>
            </section>
        </div>
    )
}

export default CarouselItem;