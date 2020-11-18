const Ajv = require('ajv');
const ajv = new Ajv({ allErrors: true, jsonPointers: true });
const format = require("./format");
const ApiError = require('./ApiError');
const _ = require("lodash");
format(ajv)
module.exports = (schema, data) => {
    const validate = ajv.compile(schema);
    const valid = validate(data);
    if (!valid) {
        const message = ajv.errorsText(validate.errors)
        throw ApiError.baseErrors.INVALID_INPUT(message)
    }

}