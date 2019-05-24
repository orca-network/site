// import superagent from "superagent"

// const root = `https://us20.api.mailchimp.com/3.0/lists/`
// const listUniqueId = `e7d3644021`
// // console.log('API KEY', process.env.MAIL_CHIMP);

// exports.handler = function(event, context, callback) {
//   superagent
//   .get(`https://us20.api.mailchimp.com/3.0/lists/e7d3644021/members`)
//    .auth(
//        'any', mailchimpApiKey
//    )
//   .then(res => {
//     // Do something with successful response
//     callback(null,{
//         statusCode: 200,
//         body:`hello`
//     })
//   })
//   .catch(err => {
//     // Do something with the error
//     callback(err);
//   })
// }
