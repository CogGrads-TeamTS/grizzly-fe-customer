import React from 'react';

const Breadcrumb = (props) => {
    const {returnToHome, returnToCat, catName, prodName} = props;
    return (
        <div className="breadcrumb-nav">
            <div className="breadcrumb-body">
                <div className="">
                    <div className="breadcrumb-body breadcrumbs">
                        <ul>
                            <li>
                                <a onClick={returnToHome}>Home</a>
                            </li>
                            <li>
                                <a onClick={returnToCat}>{catName}</a>
                            </li>
                            {(prodName ? <li><a href="#">{prodName}</a></li>: null)}
                        </ul>
                        <h1 className="bread-category-title">
                            {catName}
                            </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Breadcrumb;