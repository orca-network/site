import https from "https"
import axios from "axios"

exports.handler = (event, context, callback) => {
  axios
    .get(`https://any:${process.env.MAILCHIMP}0@us20.api.mailchimp.com/3.0/lists/e7d3644021/members`)
    .then(res => {
      // Do something with successful response
      callback(null,{
          statusCode: 200,
          body:res._links
      })
      console.log(res);
      
    })
    .catch(err => {
      // Do something with the error
      callback(err);
    })
}
