import React from 'react'
import Cer from "./json//SpecilizationCertificate.json";

const SpecilizationCertificate = () => {
    return (
        <section id='specilization'>
            <h1 className='text-4xl italic ml-10 p-5 text-center'>Specilization Certificates</h1>
            <div className="flex flex-wrap rounded-full bg-red justify-center " >
                {
                    Cer && Cer.map(SpecilizationCertificate => {
                        return (
                            <div className='flex flex-wrap order-3 m-9'>
                                <div className="w-96 bg-base-100 shadow-xl" key={SpecilizationCertificate.id}>
                                    <img src={SpecilizationCertificate.image} alt={SpecilizationCertificate.name} />
                                    <div className="">
                                        <h2 className="text-lg p-4">{SpecilizationCertificate.Name}</h2>
                                        <div className="flex justify-center">
                                            <a href={SpecilizationCertificate.image} target="blank"><button className="btn btn-primary mr-2">View Certificate</button></a>
                                            <a href={SpecilizationCertificate.VerficationLink} target="blank"><button className="btn btn-primary mr-2">Verify at Coursera</button></a>
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

export default SpecilizationCertificate
