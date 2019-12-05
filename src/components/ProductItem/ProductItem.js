import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        var {product,index} = this.props
        return (
            <tr>
                <th scope="row">{index+1}</th>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className="badge badge-warning">Hết hàng</span>
                </td>
                <td>
                    <button type="button" className="btn btn-success">Sửa</button>
                    <button type="button" className="btn btn-danger ml-1">Xoá</button>
                </td>
            </tr>
        )
    }
}
