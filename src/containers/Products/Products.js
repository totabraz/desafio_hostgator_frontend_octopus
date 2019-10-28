import React, {Component} from 'react'
import axios from 'axios'

class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
            selectedPlanID: null,
        }
    }

    componentDidMount() {
        axios.get('​https://7ac2b8ab-f3e5-4534-863d-90dd424a6405.mock.pstmn.io/prices')
            .then( response => {
                console.log(response.data)
            })
    }

    render() {
        return(
            <div></div>
        )
    }
}

export default Products;