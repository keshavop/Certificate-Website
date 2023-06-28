import React from 'react'
import Cer from "./json/BackendProfessionalCertificate.json";

const BackendCertificate = () => {
    return (
        <section id='backend'>
            <h1 className='text-4xl italic ml-10 p-5 text-center'>META Back-end Professional Certification Coursera</h1>
            <div className="flex flex-wrap rounded-full bg-red justify-center">
                {
                    Cer && Cer.map(BackendCertificate => {
                        return (
                            <div className='flex flex-wrap order-3 m-9'>
                                <div className="w-96 bg-base-100 shadow-xl" key={BackendCertificate.id
                                }>
                                    <img src={BackendCertificate.image
                                    } alt={BackendCertificate.name
                                    } loading="lazy" />
                                    <div className="">
                                        <h2 className="text-lg p-4">{BackendCertificate.Name
                                        }</h2>
                                        <div className="flex justify-center">
                                            <a href={BackendCertificate.image
                                            } target="blank"><button className="btn btn-primary mr-2">View Certificate</button></a>
                                            <a href={BackendCertificate.VerficationLink
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

export default BackendCertificate
