import React, {Component} from 'react'
import axios from '../../axios'
import Header from '../../components/Header/Header';

class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
            selectedPlanID: null,
        }
    }
    
    componentDidMount() {
        axios.get('/prices')
            .then( response => {
                console.log(response.data)
            })
            .catch(error => {

            })
    }

    render() {
        return(
            <div>
                <Header/>
            </div>
        )
    }
}

export default Products;