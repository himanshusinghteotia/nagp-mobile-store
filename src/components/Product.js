import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import { fetchProductById } from './actions/productActions'
import { Link } from 'react-router-dom';


class Product extends Component {

    componentDidMount() {
        this.props.fetchProductById(this.props.match.params.id);
    }

    handleClick = (id, product) => {
        this.props.addToCart(id, product);
    }

    render() {
        const { product } = this.props;
        if (!product) {
            return <h1 className="text-center margin">Loading...</h1>;
        }
        const prd = product[0];
        return (
            <div className="container text-center margin" >
                <h2 className="card-title">{prd.title}</h2>
                <div className="box-detail">
                    <div className="card margin" key={prd.id} >
                        <img className="card-img-top" src={require(`../images/${prd.img}.jpg`)} alt={prd.title} />
                    </div>
                    <div className="card-body">
                        <hr />
                        <p className="card-text">{prd.smdesc}</p>
                        <p className="card-text">{prd.desc}</p>
                    <hr />
                    </div >
                    <div className="margin">
                    <h5 className="card-text">₹ {prd.price}</h5>
                    <p>
                        <Link to="/">
                            <button className="btn btn-primary margin"><i class="fa fa-arrow-left fa-lg"></i></button>
                        </Link>
                        <button to="/" className="btn btn-primary" onClick={() => { this.handleClick(prd.id, prd) }}><i class="fa fa-plus-circle fa-lg"></i></button>
                    </p>
                    </div>
                    <hr />
                </div>

            </div >
        )
    }

}

const mapStateToProps = (state) => {
    return {
        product: state.productReducer.payload
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProductById: (id) => dispatch(fetchProductById(id)),
        addToCart: (id, product) => dispatch(addToCart(null, id, product)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);