import React, { Component } from 'react';
import './ProductSingle.css';
import { CardColumns, Card, CardImg } from 'reactstrap';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { productsFetchData } from "../../actions/productActions";
import { connect } from "react-redux";
import _ from 'lodash';
class ProductsSearched extends Component {

    constructor(props) {
        console.log(props);
        super(props);
        this.search = "";
        this.page = 0;
        this.size = 20;
        this.sort = "id,desc";
    }
    componentDidMount() {
        this.props.fetchData(this.search, this.page, this.size, this.sort, this.props.category.id);
    }
    componentDidUpdate(prevProps) {
        if (this.props.category.id !== prevProps.category.id) {
            this.props.fetchData(this.search, this.page, this.size, this.sort, this.props.category.id);
        }
    }
    render() {
        const imageUrl = 'http://ts.ausgrads.academy/images/';
        let prod_count = 0;
        const isLoading = (this.props.products === undefined) ?
            (
                <p>The product is loading...</p>
                // Get 7 product so that if the selected product is in array, you can safely remove and still have 6
            ) : (_.map(_.take(this.props.products, 7), prod => { 
                if(prod.id === this.props.product.id) return; // don't link to displayed product
                else if(prod_count > 5) return; // Don't render 7 unique products (array starts at 0)

                prod_count++;
                return (
                    <Link key={prod.id} to={{ pathname: `/product/${prod.id}` }} >
                        <Card className="image-thumb">
                            <div className="consistent-image-container">
                                <img key={prod.id}
                                    src={`${imageUrl}${(prod.images.length > 0) ? prod.images[0].url : ''}`} alt="Card image tile" />
                            </div>
                        </Card>
                    </Link>
                )
            }
            ))
        return (
            <div>
                {isLoading}
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        products: state.products.content,
        last: state.products.last,
        loading: state.productsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => { //console.log(dispatch);
    return {
        fetchData: (search, page, size, sort, catId) => dispatch(productsFetchData(search, page, size, sort, catId))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductsSearched));