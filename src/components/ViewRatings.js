import React from 'react'; 
import _ from 'lodash';
import { Col } from 'reactstrap';
import StarRatings from 'react-star-ratings';

const ViewRatings = (props) => { 
    return(
        <div className="view-ratings-panel">
                {
                    (_.isEmpty(props.ratings) ?
                        (
                            <Col>
                                There are currently no ratings for this product.
                            </Col>
                        ) : (
                        
                            _.map(props.ratings, cat => {  
                                return (
                                    <Col className="view-ratings">
                                        <span>
                                            <b> User:</b> <i>Anonymous User</i>  
                                        </span>
                                           
                                        <StarRatings 
                                                rating={cat.rating}
                                                numberOfStars={5}
                                                name='rating'
                                                starDimension="20px"
                                                starSpacing="2px"
                                                starRatedColor='rgb(108, 116, 217)'
                                                isSelectable={false} style={{marginRight: "50px", float: "left" }}
                                />
                               
                                         <div className="rating-description">{cat.ratingDescription}</div>
                                        </Col>
                                    
                                )
                        })

                    )
                )
            }
            </div>
    );
}

export default ViewRatings;

            