function digital_root(value) {

    if(typeof value !== 'number' || value < 0) {
        throw new Error;
    }

    let sValue = value.toString();

    if (sValue.length === 1) {
        return value;
    }

    let result = 0;

    for (let i = 0; i < sValue.length; i++) {
        result += +sValue[i];
    }

    return digital_root(result);
}

module.exports = digital_root;