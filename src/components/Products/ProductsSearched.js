import React from 'react';
import './ProductSingle.css';
import { CardColumns, Card, CardImg} from 'reactstrap';
const ProductsSearched = () => {
    return(
        <div>
            <div className="searched-title">People also searched for</div>
                <CardColumns style={{columnCount: "2"}}>
                    <Card className="image-thumb">
                        <CardImg top width="100%" src="http://ts.ausgrads.academy/images/49-20180626044600.jpg" alt="Card image camera" />
                    </Card>
                    <Card className="image-thumb">
                        <CardImg top width="100%" src="http://ts.ausgrads.academy/images/49-20180626044600.jpg" alt="Card image camera" />
                    </Card>
                    <Card className="image-thumb">
                        <CardImg top width="100%" src="http://ts.ausgrads.academy/images/49-20180626044600.jpg" alt="Card image camera" />
                    </Card>
                    <Card className="image-thumb">
                        <CardImg top width="100%" src="http://ts.ausgrads.academy/images/49-20180626044600.jpg" alt="Card image camera" />
                    </Card>
                    <Card className="image-thumb">
                        <CardImg top width="100%" src="http://ts.ausgrads.academy/images/49-20180626044600.jpg" alt="Card image camera" />
                    </Card>
                    <Card className="image-thumb">
                        <CardImg top width="100%" src="http://ts.ausgrads.academy/images/49-20180626044600.jpg" alt="Card image camera" />
                    </Card>
                    
            </CardColumns>

        </div>
    )
}

export default ProductsSearched;