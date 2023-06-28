import React from 'react'
import Cer from "./json/Misc.json";

const Misc = () => {
    return (
        <section id='misc'>
            <h1 className='text-4xl italic ml-10 p-5 text-center'>Renowed Certification</h1>
            <div className="flex flex-wrap rounded-full bg-red justify-center" >
                {
                    Cer && Cer.map(Misc => {
                        return (
                            <div className='flex flex-wrap order-3 m-9'>
                                <div className="w-96 bg-base-100 shadow-xl" key={Misc.id
                                }>
                                    <img src={Misc.image
                                    } alt={Misc.name
                                    } loading="lazy" />
                                    <div className="">
                                        <h2 className="text-lg p-4">{Misc.Name
                                        }</h2>
                                        <div className="flex justify-center">
                                            <a href={Misc.image} target="blank"><button className="btn btn-primary mr-2">View Certificate</button></a>
                                            <a href={Misc.VerficationLink} target="blank"><button className="btn btn-primary mr-2">Verify at Coursera</button></a>
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

export default Misc
