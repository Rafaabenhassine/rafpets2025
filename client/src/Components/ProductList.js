import {React} from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'
// import { Button } from 'react-bootstrap'
import { Link} from 'react-router-dom'
import './ProductList.css'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ProductList = () => {
  
    const Products=useSelector((state)=>state.ListReducer.ListProduct)
    console.log(Products)
    var j=0
    Products.map(prod=>prod.cart?j=j+1:j)
    
  return (
    <div>
    
         {/* <Link to={"/ProductDogs"}><Button > Product Dogs</Button></Link>
        
        <Link to={"/ProductCats"}><Button > Product Cats</Button></Link>  */}
        
        {/* <Link to= {"/AddProduct"}><Button>Add Product</Button></Link> */}
        
        {Products.map(Prod=><Product Prod={Prod} key={Prod.id}  />)}
    
    </div>
  )
}

export default ProductList