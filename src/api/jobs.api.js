const API_URL = process.env.REACT_APP_API_URL;

export const getAvgSalaryOfJobs = async (controller) => {
    const response = await fetch(`${API_URL}/jobs/avg-salary`, { signal: controller.signal });
    const data = (await response.json()).data;

    return data;
};

export const getMaxSalaryByJob = async (controller, job) => {
    const response = await fetch(`${API_URL}/jobs/${job}/max-salary`, { signal: controller.signal });
    const data = (await response.json()).data.employee;

    return data;
};

export const getPopularityOfJobs = async (controller) => {
    const response = await fetch(`${API_URL}/jobs/popularity`, { signal: controller.signal });
    const data = (await response.json()).data;

    return data;
};
