import React, { useContext } from 'react'
import Layout from '../../layout/Layout'
import MyContext from '../../../context/data/MyContex'

function Home() {
  const context =useContext(MyContext)
  // console.log(context);
  const {name , std } =  context
  return (
    <Layout>  
      home
      
    </Layout>
  )
}

export default Home