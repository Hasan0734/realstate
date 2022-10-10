import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getData } from './../../../../../__lib__/helpers/HttpService';

const CompaniesList = ({ company }) => {
    const { company_name, country, state } = company
    const [jobs, setJobs] = useState([])
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        getData(`/jobs/company/${company_name}`)
            .then(res => setJobs(res))
    }, [company_name])
    return (
        <>
            <div className=' border p-3 my-3 bg-info rounded shadow-sm p-3 mb-5 '>
                <div onClick={() => setIsOpen(!isOpen)} className=" d-flex  rounded-2 justify-content-between align-items-center" style={{ cursor: 'pointer' }}>
                    <h4 className="text-white">{company_name}</h4>
                    {isOpen ? <span><i className="fas fa-minus text-white"></i></span>
                        : <span><i className="fas fa-plus text-white"></i></span>}
                </div>
                <div className={`collapse  ${isOpen ? 'show ' : ''}`} style={{ transitionDuration: 'all 2s' }}>
                    <div className="card card-body bg-light">
                        <div className="d-flex justify-content-between">
                            <h6>Added Jobs: {jobs.length}</h6>
                            <Link href="/"><a className="fs-4">Edit</a></Link>
                        </div>
                        <h6>Addres: {state.state_name}, {country.country_name}</h6>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CompaniesList;