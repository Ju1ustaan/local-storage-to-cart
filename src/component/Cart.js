import React from 'react'

const Cart = ({id, image, title, desc, price}) => {
  return (
    <div>

    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
                <a href="#">
                    <div className="relative flex items-end overflow-hidden rounded-xl">
                        <img src={image} alt="Hotel Photo" />
                      
                    </div>

                    <div className="mt-1 p-2">
                        <h2 className="text-slate-700">{title}</h2>
                        <p className="mt-1 text-sm text-slate-400">{desc}</p>

                        <div className="mt-3 flex items-end justify-between">
                            <p className="text-lg font-bold text-blue-500">{price}</p>

      
                        </div>
                    </div>
                </a>
            </article>





        </div>
  )
}

export default Cart