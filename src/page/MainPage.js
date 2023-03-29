import React from 'react'
import Card from '../component/Card'
import data from "../data"


const MainPage = () => {
   
   
  return (
    <div>
            <div className="bg-white h-full">

                
                <section className="py-10 bg-gray-100">
                    <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
                       {
                        data.map((el, idx) => (
                            <Card key={idx} image={el.img} title={el.title} desc={el.desccription} price={el.price} id={el.id}/>
                        ))
                       }
                       
                
                       
                        </div>
                </section>

                


            </div>
        </div>
  )
}

export default MainPage