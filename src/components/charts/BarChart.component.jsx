import React, { useState, useEffect } from 'react';
import { v4 as uuid4 } from 'uuid';

const JobPopularityBarChart = ({ chartData }) => {
    const [mostPopularJobNum, setMostPopularJobNum] = useState(0);

    const findMostPopularJobNum = (data) => {
        let maxPopularJobNum = 0;

        data.forEach(({ popularity }) => {
            if (popularity > maxPopularJobNum) maxPopularJobNum = popularity;
        });

        return maxPopularJobNum;
    };

    useEffect(() => {
        const max = findMostPopularJobNum(chartData);

        setMostPopularJobNum(max);
    }, [chartData]);

    return (
        <div className="bar-chart">
            {chartData.map(({ job, popularity }) => {
                const height = parseInt((popularity / mostPopularJobNum) * 200);

                return (
                    <div key={uuid4()} className={'bar-container'}>
                        <span className="title">{job}</span>

                        <div className="bar" style={{ height: `${height}px` }}></div>

                        <span className="popularity">{popularity}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default JobPopularityBarChart;
