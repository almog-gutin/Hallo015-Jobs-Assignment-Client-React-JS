import React from 'react';

import TableHeader from '../../models/table-header.model';

const JobsTable = ({ rowData }) => {
    const headers = [
        new TableHeader('Job'),
        new TableHeader('Average Salaray'),
        new TableHeader('Highest Paid Employee'),
    ];

    return (
        <table className="jobs-table">
            <thead>
                <tr>
                    {headers.map((header) => (
                        <td key={header.id}>{header.label}</td>
                    ))}
                </tr>
            </thead>

            <tbody>
                {rowData.map((row) => (
                    <tr key={row.id}>
                        <td>{row.title}</td>
                        <td>{row.salary}</td>
                        <td>{row.employee}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default JobsTable;
