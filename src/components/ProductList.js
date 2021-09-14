import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import Modal from "./Modal"
import {ProductConsumer} from '../Context'

export default class ProductList extends Component {
  
  render() {
    return (
        <React.Fragment>
            <div className="py-5">
              <div className="container">
                <Title name="our" title="products"/>
                <div className="row">
                    <ProductConsumer>
                        {
                          value => (
                            value.products && value.products.map (
                              product => 
                                 <Product key={product.id} product={product}/>
                              //}
                            ))
                        }
                    </ProductConsumer>
                </div>
                <Modal></Modal>
              </div>
            </div>
        </React.Fragment>
    )
  }
}
