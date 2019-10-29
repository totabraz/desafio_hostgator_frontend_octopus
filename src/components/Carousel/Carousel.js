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
    
    const cardWidth = 356;
    // const cardsArea = 1053.3;
    let translateValue = 0;
    /**
     * To translate correctly.. 
     * 
     */
    // translateValue = -1 * (cardWidth * props.carouselActivedCard)
    
    if(props.carouselActivedCard>0){    

        // if(window.innerWidth <= cardWidth) {
        //     if(props.carouselActivedCard===1){    
        //         console.log("1111111111")
        //         translateValue = - cardWidth
        //     } else {
        //         console.log("2222222222")
        //         translateValue = -1 * (cardWidth * props.carouselActivedCard)                

        //     }
        // } else if(window.innerWidth <= cardWidth*2) {
            
        // } else if(window.innerWidth <= cardWidth*3) {
            
//         }
        
//         if(props.carouselActivedCard===1){    
//             if (window.innerWidth < (2 * cardWidth)){ 
//                 translateValue = (window.innerWidth - (2 * cardWidth))
//                 console.log(translateValue)
//                 console.log("=>>>>>>>1.1")
//             } if (window.innerWidth < (3 * cardWidth)){ 
//                 translateValue = (window.innerWidth - (3 * cardWidth))
//             } else {
//                 translateValue = -cardWidth
//                 console.log("=>>>>>>>1.2")
//             }
//         } else {    
//             if (window.innerWidth < (2 * cardWidth)){ 
//                 translateValue = (window.innerWidth - ( 3 * cardWidth)) 
// console.log("=>>>>>>>2.1")
//             } else {
//                 translateValue = -1 * (cardWidth * props.carouselActivedCard)                
//                 console.log("=>>>>>>>2.2")
//             }
        // }
        translateValue = -1 * (cardWidth * props.carouselActivedCard)                

    }
    // if(props.carouselActivedCard>0){
        
    //     if (window.innerWidth >= 690) {
    //         if(props.carouselActivedCard === 1){
    //             translateValue = ((window.innerWidth - (2 * cardWidth))) 
    //             console.log("=>>>>>>>1.1")
    //         } else {
    //             translateValue = ((window.innerWidth - (2 * cardWidth)))  - cardWidth 
    //             console.log("=>>>>>>>1.2")
    //       }
    //     } else if (window.innerWidth > 690) {
    //         if ((-1 * translateValue) < (cardsArea - window.innerWidth)) {
    //             translateValue = (-1 * (cardsArea - window.innerWidth))
    //             console.log("=>>>>>>>2")
    //         } else {
    //             translateValue = -1 * (cardWidth * props.carouselActivedCard)
    //             console.log("=>>>>>>>3")
    //         }
    //     } else {
    //         translateValue = -1 * (cardWidth * props.carouselActivedCard)
    //         console.log("=>>>>>>>4")
    //     }
    //     console.log("translateValue " + translateValue)
    //     console.log("props.carouselActivedCard " + props.carouselActivedCard)
    // }

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
                    <a href="/" alt="Acessar página" >*Confira as condições da promoção</a>
            </div>
        </div>
    )
}

export default Carousel;