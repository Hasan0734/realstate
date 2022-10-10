import React from 'react';
import JobsList from './JobsList';

const Jobs = ({ jobs }) => {
    return (
        <>
            <div className="col-xxl-4 my-3">
                <div className="card card-xxl-stretch">
                    <div className="card-header align-items-center border-0 mt-4">
                        <h3 className="card-title align-items-start flex-column">
                            <span className="fw-bolder mb-2 text-dark">Added Company</span>
                            {/* <span className="text-muted fw-bold fs-7">{companies.companyList?.length || 0}</span> */}
                        </h3>
                        <div className="card-toolbar">
                            <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">
                                <span className="svg-icon svg-icon-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                            <rect x={5} y={5} width={5} height={5} rx={1} fill="#000000" />
                                            <rect x={14} y={5} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                                            <rect x={5} y={14} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                                            <rect x={14} y={14} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                                        </g>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="card-body pt-5" style={{ height: '400px', overflow: 'scroll' }}>
                        {jobs.jobList?.map((job, i) => <JobsList key={i} job={job} />)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Jobs;