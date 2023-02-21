import React from 'react'
import Cer from "./json/FrontendProfessionalCertificate.json";

const FrontendCertificate = () => {
    return (
        <section id='frontend'>
            <h1 className='text-4xl italic ml-10 p-5 text-center'>META Front-end Professional Certification Coursera</h1>
            <div className="flex flex-wrap rounded-full bg-red justify-center" >
                {
                    Cer && Cer.map(FrontendCertificate => {
                        return (
                            <div className='flex flex-wrap order-3 m-9'>
                                <div className="w-96 bg-base-100 shadow-xl" key={FrontendCertificate.id
            }>
                                    <img src={FrontendCertificate.image
            } alt={FrontendCertificate.name
            } />
                                    <div className="">
                                        <h2 className="text-lg p-4">{FrontendCertificate.Name
            }</h2>
                                        <div className="flex justify-center">
                                            <a href={FrontendCertificate.image
            } target="blank"><button className="btn btn-primary mr-2">View Certificate</button></a>
                                            <a href={FrontendCertificate.VerficationLink
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

export default FrontendCertificate
