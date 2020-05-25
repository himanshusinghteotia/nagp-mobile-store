import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import { fetchProducts } from './actions/productActions'
import {Link} from 'react-router-dom';

class Home extends Component {

    componentDidMount() {
        // this.props.dispatch(fetchProducts());
        this.props.fetchProducts();
    }

    handleClick = (id,product) => {
        this.props.addToCart(id, product);
    }

    state = {
        search: "",
        sortType: 'asc'
    }

    handleChange = event => {
        this.setState({ search: event.target.value });
    };

    onSort = sortType => {
        this.setState({ sortType })
    }

    render() {

        const { error, loading, products } = this.props;

        if (error) {
            return <h6 className="text-center margin">Error! {error.message}</h6>;
        }

        if (loading) {
            return <h1 className="text-center margin">Loading...</h1>;
        }

        const { search } = this.state;
        const filteredItems = products.filter(item => {
            return item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
        })
        const { sortType } = this.state
        const sorted = filteredItems.sort((a, b) => {
            const isReversed = (sortType === 'asc') ? 1 : -1;
            return isReversed * (a.price - b.price)
        })

        let itemList = sorted.map(item => {
            return (
                <div className="card-home" key={item.id}>
                    <img className="card-img-top" src={require(`../images/${item.img}.jpg`)} alt={item.title}/>
                    <div className="card-body">
                        <h4 className="card-title">{item.title}</h4>
                        <p className="card-text">{item.smdesc}</p>
                        <hr />
                        <h5 className="card-text">₹ {item.price}</h5>
                        <p>
                            <Link to={{ pathname: `/product/id=${item.id}` }}>
                                <button className="btn btn-primary margin"><i class="fa fa-eye fa-lg"></i></button>
                            </Link>
                            <button to="/" className="btn btn-primary" onClick={() => { this.handleClick(item.id,item) }}><i class="fa fa-plus-circle fa-lg"></i></button>
                        </p>
                        <hr />
                    </div>
                </div>
            )
        })


        return (
            <div className="container text-center">
                <h3 className="margin">Mobiles</h3>
                <div className="container">
                    <input className="form-control margin" onChange={this.handleChange} placeholder="Search the product" />
                    <div className="text-right">Sort by price
                         <button className="btn btn-primary margin" onClick={() => { this.onSort('asc') }}>Low to High</button>
                        <button className="btn btn-primary margin" onClick={() => { this.onSort('desc') }}>High to Low</button>
                    </div>
                </div>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    products: state.productReducer.items,
    loading: state.productReducer.loading,
    error: state.productReducer.error
});

const mapDispatchToProps = (dispatch) => {
    return {
      fetchProducts: () => { dispatch(fetchProducts());},
      addToCart: (id, product) => dispatch(addToCart(null, id, product))
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(Home);