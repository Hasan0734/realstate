import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getData } from './../../../../../__lib__/helpers/HttpService';

const JobsList = ({ job }) => {
    const { job_title, id } = job
    const [jobDesc, setJobDesc] = useState([])
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        getData(`/job/${id}`)
            .then(res => setJobDesc(res))
    }, [id])

    return (
        <>
            <div className='pe-auto border p-3 my-3 bg-danger rounded'>
                <div onClick={() => setIsOpen(!isOpen)} className=" d-flex   rounded-2 justify-content-between align-items-center" style={{ cursor: 'pointer' }}>
                    <h4 className="text-white">{job_title}</h4>
                    {isOpen ? <span ><i className="fas fa-minus text-white"></i></span>
                        : <span ><i className="fas fa-plus text-white"></i></span>}
                </div>
                <div className={`collapse  ${isOpen ? 'show ' : ''}`}>
                    <div className="card card-body bg-light">
                        <div className="d-flex justify-content-between">
                            <h5>Name of company {jobDesc?.company?.company_name}</h5>
                            <Link href="/"><a className="fs-3">Edit</a></Link>
                        </div>
                        <h6 className="">Salary: ${jobDesc.job_salary}</h6>
                        <h6 className="">Vacancy: {jobDesc.job_vacancy}</h6>
                        <h6 className="">Bounty: ${jobDesc.job_bounty}</h6>

                    </div>
                </div>
            </div>
        </>
    );
};

export default JobsList;