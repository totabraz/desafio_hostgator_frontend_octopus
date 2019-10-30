import React from 'react';
// import classes from './Carousel.module.scss';
import btn_arrow_left from '../../assets/imgs/btn_arrow_left.svg'
import btn_arrow_right from '../../assets/imgs/btn_arrow_right.svg'

import CarouselItem from './CarouselItem/CarouselItem';
import classes from './Carousel.module.scss';

const Carousel = (props) => {
    
    const plans = Object.keys(props.plans).map(
        (period, index) => {
            return(
                <CarouselItem
                    cardIndex={index}  
                    activeCard={props.carouselActivedCard} 
                    key={props.plans[period].id}
                    activePeriod={props.activePeriod}
                    plan={props.plans[period]}
                    />
            )
        }
    )
    
    
    const smallCardWidth = 305;
    const cardWidth = 335;
    let translateValue = 0;

    // To translate correctly.. 
    if( props.carouselActivedCard > 0 ){
        if ( window.innerWidth <= 450 ) {
            if(props.carouselActivedCard===1){
                translateValue = -1 *( smallCardWidth )
            } else {
                translateValue = -1 * ( 2 * smallCardWidth )
            }
        } else if ( window.innerWidth < 768 ) {
            translateValue = -1 * (30 + (3 * smallCardWidth) - window.innerWidth)
        } else {
            translateValue = -1 * (30 + (3 * cardWidth) - window.innerWidth)
        }
    }

    const translate = "translateX(" + +translateValue+ "px)";
    
    return(
        <div className={classes.Carousel}>
            <div className={classes.CardsLimit}>
                    <button alt="Select next plan on the left"
                        title="Select next plan on the left"
                        className={classes.BtnArrowLeft}
                        onClick={props.clickBtnLeft}>
                        <img src={btn_arrow_left} alt=" "/>
                    </button>
                <div className={classes.CardsArea} style={{transform: translate}}>
                    {plans}
                </div>
                    <button alt="Select next plan on the right"
                        title="Select next plan on the right"
                        className={classes.BtnArrowRight}
                        onClick={props.clickBtnRight}>
                        <img src={btn_arrow_right} alt=" "/>
                    </button>
            </div>
            <div className={classes.InfoArea}>
            <a href="/" alt="Acessar página" >*Confira as condições da promoção</a>
            </div>

        </div>
    )
}

export default Carousel;