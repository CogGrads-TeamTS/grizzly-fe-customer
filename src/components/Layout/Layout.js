
import React, { Component } from 'react';
import CustomerSortBy from "../CustomerSortByButton/CustomerSortBy";
import { connect } from 'react-redux';
import { productsFetchData } from '../../actions/productActions'
import { withRouter } from 'react-router-dom';
import Header from '../Common/CommonHeader';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.search="";
        this.page = 0;
        this.size = 20;
        this.sort = "id,desc";

        console.log(props.match);
        (props.match.params.id)?this.category=props.match.params.id:this.category="";
        (props.match.params.name)?this.brand=props.match.params.name:this.brand="";
        (props.match.params.rating)?this.rating=props.match.params.rating:this.rating="";

    }

    componentDidMount(){
        console.log(this)
        this.props.fetchData(this.search, this.page, this.size, this.sort,this.category,this.brand,this.rating);
    }


    render() {

        return (
            <div>
            <div className="user-header">
                <div className="nav-user-row">
                    <Header />    
                </div>
            </div>
                <CustomerSortBy className="sort-by-col"/>   
                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = (state) => { 
    return{
        categories: state.products.filterByCat,
        products: state.products.content,
        last: state.products.last
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (search, page, size, sort, catId,brand,rating)=> dispatch(productsFetchData(search, page, size, sort, catId,brand,rating))

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));