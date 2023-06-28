import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
    return (
        <BrowserRouter>
            <div className="navbar bg-base-300 sticky top-0 z-50">
                <div className="flex-1">
                    <Link to="#specilization" smooth className='btn btn-ghost normal-case text-xl'>KeshavOP Certificate's</Link>
                    {/* <a className=""></a> */}
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {/* <li tabIndex={0}>
                            <a>
                                Specilization Certifications
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 bg-base-100">
                                <li>
                                    <Link to="#frontend" smooth>META Front-end Professional Certification</Link>
                                </li>
                                <li>
                                    <Link to="#backend" smooth>META Back-end Professional Certification</Link>
                                </li>
                            </ul>
                        </li> */}
                        <li>
                            <Link to="https://www.notion.so/keshavop/List-of-certificate-s-97c96ad0a7c3459ea347bdb987ed3e33?pvs=4" smooth>All Certificates Data</Link>
                        </li>
                        <li>
                            <Link to="#frontend" smooth>META Front-end Professional Certification</Link>
                        </li>
                        <li>
                            <Link to="#backend" smooth>META Back-end Professional Certification</Link>
                        </li>
                        <li>
                            <Link to="#coursera" smooth>Coursera Certificate's</Link>
                        </li>
                        <li>
                            <Link to="#udemy" smooth>Udemy Certificate's</Link>
                        </li>
                        <li>
                            <Link to="#misc" smooth>Renowed Certificate's</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Navbar
