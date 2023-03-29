import React, { useEffect, useState } from 'react'
import Cart from '../component/Cart'

const Basket = () => {
  const [item, setItem] = useState([])
  useEffect(() => {
    setItem(JSON.parse(localStorage.getItem("products")))
  }, [])

  return (

    <div>
      <div className="bg-white">


        <section className="py-10 bg-gray-100">
          <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
            {
              item?.length > 0 && item.map((el) => (
                <Cart key={el.id} image={el.image} title={el.title} desc={el.desc} price={el.price} id={el.id} />
              ))
            }



          </div>
        </section>




      </div>
    </div>

  )
}

export default Basket