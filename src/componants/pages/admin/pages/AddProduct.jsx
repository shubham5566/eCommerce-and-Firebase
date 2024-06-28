import React, { useContext } from 'react'
import MyContext from '../../../../context/data/MyContex'

function AddProduct() {
    const context = useContext(MyContext)
    const {products,setProducts,addProduct} = context;
   
  return (
    <div>
    <div className=' flex justify-center items-center h-screen'>
        <div className=' bg-gray-800  px-10 py-4 rounded-xl '>
            <div className="">
                <h1 className='text-center text-white text-xl mb-4 font-bold'>Add Product</h1>
            </div>
            <div>
                <input type="text"
                    name='title'
                    className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                    placeholder='Product title'
                    value={products.title}
                    onChange={(e)=>setProducts({...products,title:e.target.value})}
                />
            </div>
            <div>
                <input type="text"
                    name='price'
                    className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                    placeholder='Product price'
                    value={products.price}
                    onChange={(e)=>setProducts({...products,price:e.target.value})}
                />
            </div>
            <div>
                <input type="text"
                    name='imgUrl'
                    className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                    placeholder='Product imageUrl'
                    value={products.imgUrl}
                    onChange={(e)=>setProducts({...products,imgUrl:e.target.value})}
                />
            </div>
            <div>
                <input type="text"
                    name='category'
                    className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                    placeholder='Product category'
                    value={products.category}
                    onChange={(e)=>setProducts({...products,category:e.target.value})}
                />
            </div>
            <div>
               <textarea cols="30" rows="10"
                      name='description'
                    className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                    placeholder='Product description'
                    value={products.discription}
                    onChange={(e)=>setProducts({...products,description:e.target.value})}>

               </textarea>
            </div>
            <div className=' flex justify-center mb-3'>
                <button
                onClick={addProduct}
                    className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                    Add Product
                </button>
            </div>
         
        </div>
    </div>
</div>
  )
}

export default AddProduct