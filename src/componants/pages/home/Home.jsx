import React, { useContext } from 'react'
import Layout from '../../layout/Layout'
import MyContext from '../../../context/data/MyContex'
import HerosSection from '../../herosSection/HerosSection'
import Filter from '../../filter/Filter'
import ProductCard from '../../productCard/ProductCard'
import Tracks from '../../tracks/Tracks'
import Testimonial from '../../testimonial/Testimonial'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart,deleteFromCart } from '../../../store/CartSlice'

function Home() {
 const dispatch = useDispatch();
 const cartItem = useSelector((state) => state.cart)
 console.log(cartItem)
 const addCart =()=>{
   dispatch(addToCart("shirt"))
   
  }
  const deleteCart = ()=>{
   dispatch(deleteFromCart("shirt"))
   
 }
  return (
    <Layout>  
      <HerosSection/>
      <div>
        <button onClick = {()=>addCart()}>Add</button>
        <button onClick={()=>deleteCart()}>Delete</button>
      </div>
      <Filter/>
      <ProductCard/>
      <Tracks/>
      <Testimonial/>
      
    </Layout>
  )
}

export default Home