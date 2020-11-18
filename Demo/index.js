const Azure = require("../lib/AzureFunction")
const validate = require("../lib/validate")
// module.exports = async function handler (context, req) {
//     context.log('JavaScript HTTP trigger function processed a request.');
//     const schema = {
//         "properties": {
//             "name": { "type": "string",format:"nonEmptyOrBlank" },
//             //"age": { "type": "number" }
//         }, required: ["name"]
//     }
//   //  validate(context, schema, req.query)
//     const responseMessage = `Hello ${req.query.name}`
//     context.res = {
//          status: 400, /* Defaults to 200 */
//         body: responseMessage
//     };
// }

//Lambda function
async function handler(req, res) {


    const schema = {
        "properties": {
            "name": { "type": "string", format: "nonEmptyOrBlank" },
            //"age": { "type": "number" }
        }, required: ["name"]
    }
    validate(schema, req.query)
    res.setHeader('Authorization', "token");
    res.send({ "data": "token generated" });
}

module.exports = Azure.from(handler, {});