
const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: "******",
    secretAccessKey: "************",
    region: "us-east-1"
});

const ses = new AWS.SES({apiVersion: '2010-12-01'});

const sendEmail = (to, subject, message, from) => {
    const params = {
        Destination: {
            ToAddresses: [to]
        },
        Message: {
            Body: {
                Text: {
                    Charset: "UTF-8",
                    // Data: "hello alok dubey"
                    Data: message
                }
             
            },
            Subject: {
                Charset: 'UTF-8',
                Data: subject
            }
        },
        ReturnPath: from ? from : "alok73327@gmail.com",
        Source: from ? from : "alok73327@gmail.com",
    };

    ses.sendEmail(params, (err, data) => {
        if (err) {
            return console.log(err, err.stack);
        } else {
            console.log("Email sent.", data);
        }
    });
};

module.exports = {sendEmail};