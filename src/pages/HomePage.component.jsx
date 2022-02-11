import React, { useEffect, useState } from 'react';

import Loader from '../components/shared/Loader.component';
import JobsTable from '../components/tables/JobsTable.component';
import BarChart from '../components/charts/BarChart.component';

import * as jobsAPI from '../api/jobs.api';

import JobsTableRow from '../models/jobs-table-row.model';

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [jobsTableRowData, setJobsTableRowData] = useState([]);
    const [jobsChartData, setJobsChartData] = useState([]);

    useEffect(() => {
        const controller = new AbortController();

        jobsAPI
            .getAvgSalaryOfJobs(controller)
            .then(async (jobs) => {
                const jobsTableData = [];

                for (let { job, average_salary: salary } of jobs) {
                    const employee = await jobsAPI.getMaxSalaryByJob(controller, job);

                    jobsTableData.push(new JobsTableRow(job, salary, employee));
                }
                setJobsTableRowData(jobsTableData);
            })
            .catch((err) => {
                console.log(err);
            });

        jobsAPI
            .getPopularityOfJobs(controller)
            .then((data) => {
                setJobsChartData(data);
            })
            .catch((err) => {
                console.log(err);
            });

        setIsLoading(false);

        return () => {
            controller.abort();
        };
    }, []);

    return (
        <main className="home-page">
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <section className="jobs-table-container">
                        <h2>Jobs Table</h2>
                        <hr />

                        <div>
                            <JobsTable rowData={jobsTableRowData} />
                        </div>
                    </section>
                    <section className="jobs-chart-container">
                        <h2>Job Popularties Chart</h2>
                        <hr />

                        <BarChart chartData={jobsChartData} />
                    </section>
                </>
            )}
        </main>
    );
};

export default HomePage;
