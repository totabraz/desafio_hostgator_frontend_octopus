import React, {Component} from 'react'
import axios from '../../axios'
import Header from '../../components/Header/Header';
import PeriodSelector from '../../components/PeriodSelector/PeriodSelector';
import Carousel from '../../components/Carousel/Carousel';

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
    
    render() {
        return(
            <div>
                <Header/>
                <PeriodSelector 
                    activePeriod={this.state.activePeriod}
                    setPeriod={this.selectedPeriodHandler}/>
                <Carousel 
                    carouselActivedCard={this.state.carouselActivedCard}
                    clickBtnLeft={this.prevCardHandler}
                    clickBtnRight={this.nextCardHandler}
                    activePeriod={this.state.activePeriod}
                    plans={this.state.plans}/>
            </div>
        )
    }
}

export default Products;