import React, { Component } from 'react';
import './ProductSingle.css';
import { CardColumns, Card, CardImg} from 'reactstrap';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import {productsFetchData} from "../../actions/productActions";
import {connect} from "react-redux";
import _ from 'lodash';
class ProductsSearched extends Component{

    constructor(props) {console.log(props);
        super(props);
        this.search="";
        this.page = 0;
        this.size = 20;
        this.sort = "id,desc";
    }
    componentDidMount(){
        this.props.fetchData(this.search,this.page,this.size,this.sort,this.props.category.id);
    }
    componentDidUpdate(prevProps) {
        if (this.props.category.id !== prevProps.category.id) {
            this.props.fetchData(this.search,this.page,this.size,this.sort,this.props.category.id);
        }
    }
    render(){
        const imageUrl = 'http://ts.ausgrads.academy/images/';
        const isLoading = (this.props.products === undefined) ?
            (
                <p>The product is loading...</p>
            ) : (_.map(_.take(_.shuffle(this.props.products),6),prod =>{
                    return(
                            <Link  to={{ pathname: `/product/${prod.id}` }} >
                            <Card className="image-thumb">
                                <CardImg top width="100%" key={prod.id}
                                         src={`${imageUrl}${(prod.images.length > 0 )? prod.images[0].url : ''}`} alt="Card image camera" />
                            </Card>
                            </Link>

                    )
                }
            ))
        return(
            <div>
                {isLoading}
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return{
        products: state.products.content,
        last: state.products.last,
        loading:state.productsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => { //console.log(dispatch);
    return {
        fetchData: (search, page, size, sort, catId)=> dispatch(productsFetchData(search, page, size, sort, catId))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductsSearched));