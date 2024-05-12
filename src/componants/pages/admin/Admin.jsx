import React, { useContext } from 'react'
import Layout from '../../layout/Layout'
import MyContext from '../../../context/data/MyContex'

function Admin() {
  const myCard = useContext(MyContext)
  console.log(myCard)
  return (
    <Layout>Admin</Layout>
  )
}

export default Admin