const { v4: uuidv4 } = require('uuid');

class JobsTableRow {
    constructor(title, salary, employee) {
        this.id = uuidv4();
        this.title = title;
        this.salary = salary;
        this.employee = employee;
    }
}

export default JobsTableRow;
