import React, { useEffect, useState } from 'react'
import MyContext from './MyContex'
import { toast } from 'react-toastify'
import { fireDB } from '../../firebase/FirebaseConfig'
import { Timestamp,QuerySnapshot, collection, onSnapshot,query ,orderBy} from 'firebase/firestore'

function MyState(props) {
  const [mode,setMode] = useState("light")
  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "rgb(17, 24, 39)"
    }else if(mode === "dark"){
      setMode("light")
      document.body.style.backgroundColor = "white";
    }
  }
    
        
      const [loading ,setLoading] =useState(false)  
      const [products,setProducts]= useState(
        {
          title:null,
          price:null,
          imgUrl:null,
          description:null,
          time:Timestamp.now(),
          date:new Date().toLocaleString(
            "en-US",
            {
              month:"short",
              dat:"2-digit",
              year:"numeric"
            }
          )
        }
      ) ;

      const addProduct = async()=>{
        if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
          return toast.error('Please fill all fields')
        }
        const productRef = collection(fireDB,"products");
        setLoading(true)
        try {
          await addDoc(productRef,products)
          toast.success("Product add successfully")
          getProductData()
          closeModal()
          setLoading(false)
          
        } catch (error) {
          console.log(error)
          setLoading(false)
        }
      }

      const [product,setProduct] = useState([])

      const getProductData = async()=>{
        setLoading(true)
        try {
          const q = query(
            collection(fireDB,'products'),
            orderBy('time')
          )
          const data = onSnapshot(q,(QuerySnapshot)=>{
            let productArray = [];
            QuerySnapshot.forEach((doc) => {
              productArray.push({...doc.data(), id:doc.id})
              setProduct(productArray);
              setLoading(false)
              
            });
          })
          return () => data
        } catch (error) {
          console.log(error)
          setLoading(false)
          
        }

      }

      useEffect(()=>{
        getProductData()
      },[])

    
  return (
    <MyContext.Provider value={{mode,toggleMode, loading,setLoading, products,setProducts,addProduct,} }>
        {props.children}

    </MyContext.Provider>
  )
}


export default MyState