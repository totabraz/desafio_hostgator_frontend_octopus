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

    render() {
        return(
            <div>
                <Header/>
                <PeriodSelector 
                    activePeriod={this.state.activePeriod}
                    setPeriod={this.selectedPeriodHandler}/>
                <Carousel 
                    activePeriod={this.state.activePeriod}
                    plans={this.state.plans}/>
            </div>
        )
    }
}

export default Products;