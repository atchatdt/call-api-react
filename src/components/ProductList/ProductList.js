import React, { Component } from 'react'
// import ProductItem from '../ProductItem/ProductItem'

export default class ProductList extends Component {
    render() {
        return (
            <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Mã</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Thao tác</th>
                </tr>
            </thead>
            <tbody>
            {this.props.children}
            </tbody>
        </table>

        )
    }
}
