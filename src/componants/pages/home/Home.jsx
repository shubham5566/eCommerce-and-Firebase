import React, { useContext } from 'react'
import Layout from '../../layout/Layout'
import MyContext from '../../../context/data/MyContex'
import HerosSection from '../../herosSection/HerosSection'
import Filter from '../../filter/Filter'

function Home() {
  const context =useContext(MyContext)
  // console.log(context);
  const {name , std } =  context
  return (
    <Layout>  
      <HerosSection/>
      <Filter/>
      
    </Layout>
  )
}

export default Home