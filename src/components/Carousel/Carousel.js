import React from 'react';
// import classes from './Carousel.module.scss';
// import btn_arrow_left from '../../assets/imgs/btn_arrow_left.svg'
// import btn_arrow_right from '../../assets/imgs/btn_arrow_right.svg'

import CarouselItem from './CarouselItem/CarouselItem';
import classes from './Carousel.module.scss';

const Carousel = (props) => {
    
    const plans = Object.keys(props.plans).map(
        period => {
            return(
                <CarouselItem   
                    key={props.plans[period].id}
                    activePeriod={props.activePeriod}
                    plan={props.plans[period]}
                    />
            )
        }
    )
    return(
        <div className={classes.Carousel}>
            <div className={classes.container}>

                <div className={classes.CardsArea}>
                    {plans}
                </div>
                <a>*Confira as condições da promoção</a>
            </div>
        </div>
    )
}

export default Carousel;