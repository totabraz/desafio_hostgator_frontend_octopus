import React, {Component} from 'react'
import axios from '../../axios'
import Header from '../../components/Header/Header';
import PeriodSelector from '../../components/PeriodSelector/PeriodSelector';

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
        console.log(this.state.activePeriod)
    } 

    componentDidMount() {
        axios.get('/prices')
            .then( response => {
                const plans = Object.keys(response.data.shared.products).map( planID => { 
                    return response.data.shared.products[planID]
                })
                this.setState({plans: plans})
                console.log(this.state.plans)
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
            </div>
        )
    }
}

export default Products;