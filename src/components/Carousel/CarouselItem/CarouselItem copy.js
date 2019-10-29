import React, { Component } from 'react';
import classes from './CarouselItem.module.scss';
import RoundButton from '../../RoundButton/RoundButton';

// Plans icons
import icon_plan_p from '../../../assets/imgs/icon_plan_p.svg'
import icon_plan_m from '../../../assets/imgs/icon_plan_m.svg'
import icon_plan_turbo from '../../../assets/imgs/icon_plan_turbo.svg'


class CarouselItem extends Component {

    constructor(props){
        super(props)
        this.state = {
            discount: 0.4,
            iconPlan:null,
            priceOrder: null,
            totalSaved: null,
            pricePerMonth: null,
            priceWithDiscount: null,
        }
    }

    componentDidMount () {
        this.setIcon();
        this.setValues();
    }

    setIcon(planName = this.props.plan.name){
        switch (planName) {
            case "Plano P":
                this.setState({iconPlan: icon_plan_p})
                break;
    
            case "Plano M":
                this.setState({iconPlan: icon_plan_m})
                break;
            
            case "Plano Turbo":
                this.setState({iconPlan: icon_plan_turbo})
                break;
    
            default:
                break;
        }
    }

    setValues(activePeriod = this.props.activePeriod){
        const thisCycle = this.props.plan.cycle;
        let priceOrder; 
        let priceWithDiscount; 
        let totalSaved; 
        let pricePerMonth; 
        switch(activePeriod){
            case "1ano":
                priceOrder = thisCycle.annually.priceOrder;
                priceWithDiscount = priceOrder * (1 - this.state.discount)
                totalSaved = priceOrder - priceWithDiscount;
                pricePerMonth = priceOrder / thisCycle.months
                break;

            case "1mes":
                priceOrder = thisCycle.monthly.priceOrder;
                priceWithDiscount = priceOrder * (1 - this.state.discount)
                totalSaved = priceOrder - priceWithDiscount;
                pricePerMonth = +(priceOrder / thisCycle.months).toFixed(2)
                break;
            case "3anos":
                priceOrder = thisCycle.triennially.priceOrder;
                priceWithDiscount = priceOrder * (1 - this.state.discount)
                totalSaved = priceOrder - priceWithDiscount;
                pricePerMonth = priceOrder / thisCycle.months
                break;
            
            default:
                break;
        }
        this.setState({
            priceOrder: priceOrder,
            priceWithDiscount: priceWithDiscount,
            totalSaved: totalSaved,
            pricePerMonth: pricePerMonth,
        })
    }

    render () {
    
        return ( 
            <div className={classes.CarouselItem}>
                <header>
                    <img src={this.state.iconPlan} alt=" "/>
                    <h1>{this.props.plan.name}</h1>
                </header>
                <section>
                    <p><span className={classes.OldValue}>R&#36; {this.state.priceOrder}</span> <strong>R&#36; {this.state.priceWithDiscount}</strong></p>
                    <p>equivalente a</p>
                    <p>R&#36; {this.state.pricePerMonth}</p>
                    <RoundButton
                        alt="Contrate Agora"
                        title="Contrate Agora">
                        Teste
                    </RoundButton>
                    <p>R&#36; {this.state.totalSaved}</p>
                </section>
            </div>
        )
    }
}

export default CarouselItem;