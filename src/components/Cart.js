import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity } from './actions/cartActions'

class Cart extends Component {

    handleRemove = (id) => {
        this.props.removeItem(id);
    }

    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }

    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }
    render() {

        const isUserLoggedIn = this.props.isLoggedIn
        let orderPlaceButton

        if (isUserLoggedIn) {
            orderPlaceButton = <button className="btn btn-primary margin">Place Order</button>
        }

        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (
                        <p>
                            <li className="collection-item text-center" key={item.id}>
                                <div>
                                    <img src={require(`../images/${item.img}.jpg`)} alt={item.img} />
                                </div>
                                <div className="margin">
                                    <h3 className="text-primary">{item.title}</h3>
                                    <p>{item.smdesc}</p>
                                </div>
                                <div className="margin">
                                    <span className="margin"><b><big>₹ {item.price}</big></b></span>
                                    <span className="margin">qty: {item.quantity}</span>
                                    <span className="margin">
                                        <Link to="/cart" onClick={() => { this.handleAddQuantity(item.id) }}><button className="btn btn-primary">inc</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Link to="/cart" onClick={() => { this.handleSubtractQuantity(item.id) }}><button className="btn btn-primary">dec</button></Link>
                                    </span>
                                    <span className="margin">
                                        <button className="btn text-danger" onClick={() => { this.handleRemove(item.id) }}>Remove</button>
                                    </span>
                                </div>
                            </li>
                            <hr />
                        </p>
                    )
                })
            ) :
            (
                <p className="left">empty</p>
            )
        return (
            <div className="container text-center">
                <hr />
                <ul className="collection">
                    {addedItems}
                </ul>
                <hr />
                <div className="container">
                    <div className="collection text-right margin ">
                        <big>Total Amount:₹ <span className="text-primary">{this.props.total}</span></big>
                    </div>
                    <div className="text-right margin">
                        {orderPlaceButton}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.cartReducer.addedItems,
        total: state.cartReducer.total,
        isLoggedIn: state.loginReducer.isLoggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);