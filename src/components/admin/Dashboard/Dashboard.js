import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setCompanies } from "../../../../store/companies/actions";
import Layout from "../Layout/Layout";
import { setJobs } from './../../../../store/jobs/actions';
import Companies from './Company/Companies';
import Jobs from './Jobs/Jobs';

const Dashboard = () => {
    const { admins, companies, jobs } = useSelector(state => state)
    const { admin } = admins


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setCompanies())
        dispatch(setJobs())
    }, [])


    return (
        <Layout>

            <div className="container">
                <div className="row">
                    <Companies companies={companies} />
                    <Jobs jobs={jobs} />
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;