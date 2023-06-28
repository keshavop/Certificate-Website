import React from 'react'
import Cer from "./json/Udemy.json";

const Udemy = () => {
    return (
        <section id='udemy'>
            <h1 className='text-4xl italic ml-10 p-5 text-center'>Udemy Certification</h1>
            <div className="flex flex-wrap rounded-full bg-red justify-center" >
                {
                    Cer && Cer.map(Udemy => {
                        return (
                            <div className='flex flex-wrap order-3 m-9'>
                                <div className="w-96 bg-base-100 shadow-xl" key={Udemy.id
                                }>
                                    <img src={Udemy.image
                                    } alt={Udemy.name
                                    } loading="lazy" />
                                    <div className="">
                                        <h2 className="text-lg p-4">{Udemy.Name
                                        }</h2>
                                        <div className="flex justify-center">
                                            <a href={Udemy.image
                                            } target="blank"><button className="btn btn-primary mr-2">View Certificate</button></a>
                                            <a href={Udemy.VerficationLink
                                            } target="blank"><button className="btn btn-primary mr-2">Verify at Coursera</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Udemy
