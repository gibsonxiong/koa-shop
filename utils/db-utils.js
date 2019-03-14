exports.groupRows = function (rows, groupKey) {
    let result = [];
    let indexArr = {};   //key 为 row.id  value 为 数组下标
    let isNullRow = function (row) {
        return !(row && row.id != null)
    };

    rows.forEach(row => {
        let index;
        if ((index = indexArr[row.id]) != null) {
            if (isNullRow(row[groupKey])) return;
            result[index][groupKey].push(row[groupKey]);
        } else {
            if (isNullRow(row[groupKey])) {
                row[groupKey] = [];
            } else {
                row[groupKey] = [row[groupKey]];
            }
            result.push(row);
            indexArr[row.id] = result.length - 1;
        }

    });

    return result;
}