const { v4: uuidv4 } = require('uuid');

class TableHeader {
    constructor(label) {
        this.id = uuidv4();
        this.label = label;
    }
}

export default TableHeader;
