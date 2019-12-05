import React, { Component } from 'react'
import ProductList from '../../components/ProductList/ProductList'
import ProductItem from '../../components/ProductItem/ProductItem'


export default class ProductListPage extends Component {
    showProducts = (products) =>{
        let result = null
        if(products.length > 0)
        {
            result = products.map((product, index) =>{
                return <ProductItem
                    key = {index}
                    product = {product}
                    index={index}
                />
            })
        }
        return result
    }
    render() {
        var products = []
        return (
            <div className="col-12">
                <button className="btn btn-info mb-3">Thêm mới</button>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div>
        )
    }
}
