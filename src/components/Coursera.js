import React from "react";
import Cer from "./json/Coursera.json";

const Coursera = () => {
    return (
        <section id="coursera">
            <h1 className="text-4xl italic ml-10 p-5 text-center">
                Coursera Certification
            </h1>
            <div className="flex flex-wrap rounded-full bg-red justify-center">
                {Cer &&
                    Cer.map((Coursera) => {
                        return (
                            <div className="flex flex-wrap order-3 m-9">
                                <div className="w-96 bg-base-100 shadow-xl" key={Coursera.id}>
                                    <img src={Coursera.image} alt={Coursera.name} />
                                    <div className="">
                                        <h2 className="text-lg p-4">{Coursera.Name}</h2>
                                        <div className="flex justify-center">
                                            <a href={Coursera.image} target="blank">
                                                <button className="btn btn-primary mr-2">
                                                    View Certificate
                                                </button>
                                            </a>
                                            <a href={Coursera.VerficationLink} target="blank">
                                                <button className="btn btn-primary mr-2">
                                                    Verify at Coursera
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </section>
    );
};

export default Coursera;
