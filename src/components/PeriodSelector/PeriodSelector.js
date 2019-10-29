import React from 'react';
import classes from './PeriodSelector.module.scss';
import icon_radio_off from '../../assets/imgs/icon_radio_off.svg'
import icon_radio_on from '../../assets/imgs/icon_radio_on.svg'

const PeriodSelector = (props) => {
   
    const periods = [{id:'3anos', txt:'3 anos'},  {id:'1ano', txt:'1 ano'}, {id:'1mes', txt:'1 mês'}]
    
    let buttons =   Object.keys(periods).map(periodKey => {
        let btnClass = null;
        let btnIcon = icon_radio_off;
        if (periods[periodKey].id === props.activePeriod ){
            btnClass = classes.Active ;
            btnIcon = icon_radio_on;
        }
        return (
            <a href="#plan" key={periods[periodKey].id} className={btnClass}  onClick={ () => props.setPeriod(periods[periodKey].id)} alt="" title="">
                <img src={btnIcon} aria-hidden="true" focusable="false" alt=" "/>
                <p>{periods[periodKey].txt}</p>
            </a>
            )
        }
    )
    
    
    return (
        <div id="plans" className={classes.PeriodSelector}>
                <p>Quero pagar a cada:</p>
                <div className={classes.BtnsSelector}>
                    {buttons}
                </div>
        </div>
    )
}

export default PeriodSelector;