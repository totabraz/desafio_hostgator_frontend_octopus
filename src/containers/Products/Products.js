import React, {Component} from 'react'
import axios from '../../axios'
import Header from '../../components/Header/Header';
import PeriodSelector from '../../components/PeriodSelector/PeriodSelector';
import Carousel from '../../components/Carousel/Carousel';
import { slideInDown, slideInUp } from 'react-animations'
import styled, {keyframes} from 'styled-components'

const DivSlideUp = styled.div`
animation: 2s ${keyframes`${slideInUp}`};
`;
const DivSlideDown = styled.div`
animation: 1.5s ${keyframes`${slideInDown}`};
`;
class Products extends Component {

    constructor(props){
        super(props);
        this.state = {
            plans: [],
            selectedPlanID: null,
            activePeriod: '3anos',
            carouselActivedCard:0,
            carouselNumOfCard:3,
        }
    }
    
    selectedPeriodHandler = (activePeriod) => {
        this.setState({activePeriod : activePeriod})
    } 

    componentDidMount() {
        axios.get('/prices')
            .then( response => {
                const plans = Object.keys(response.data.shared.products).map( planID => { 
                    return response.data.shared.products[planID]
                })
                console.log(plans)
                this.setState({plans: plans})
            })
            .catch(error => {
        })
    }

    nextCardHandler = () => {
        let correction = 1
        if (window.innerWidth >= 600) correction = 2
        if(this.state.carouselActivedCard < (this.state.carouselNumOfCard  - correction)){
            const nextActiveCard = this.state.carouselActivedCard +  1;
            this.setState({carouselActivedCard:nextActiveCard})
        }
    }

    prevCardHandler = () => {
        if((this.state.carouselActivedCard > 0) && (this.state.carouselActivedCard < this.state.carouselNumOfCard )){
            const nextActiveCard = this.state.carouselActivedCard - 1;
            this.setState({carouselActivedCard:nextActiveCard})
        }
    }
    
    scrollToProductsHandler = (evet) => {
        evet.preventDefault()
        var Scroll = require('react-scroll');
        var scroll = Scroll.animateScroll;
        scroll.scrollTo( 425,{
            duration: 500,
            delay: 100,
            smooth: true,
          })
    }

    render() {
        return(
            <div>
                <Header btnDown={this.scrollToProductsHandler}/>
                
                <DivSlideDown>
                    <PeriodSelector 
                        activePeriod={this.state.activePeriod}
                        setPeriod={this.selectedPeriodHandler}/>
                </DivSlideDown>
                <DivSlideUp>
                    <Carousel 
                        carouselActivedCard={this.state.carouselActivedCard}
                        clickBtnLeft={this.prevCardHandler}
                        clickBtnRight={this.nextCardHandler}
                        activePeriod={this.state.activePeriod}
                        plans={this.state.plans}/>
                </DivSlideUp>
            </div>
        )
    }
}

export default Products;