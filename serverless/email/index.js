const user =  process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;

 exports.handler = function(event, context, callback) {
    const nodemailer = require('nodemailer');
    const smtpTransport = require('nodemailer-smtp-transport');

  	const transporter = nodemailer.createTransport(smtpTransport({
	    service: 'gmail',
	    auth: {
	        user,
	        pass
	    }
  	}));
    const { letUs, indicative, phone, contactMail, subject } =  JSON.parse(event.body || "{}");
  	const text = `${letUs} - Phone Number: +${indicative} ${phone} - Contact Mail: ${contactMail}`;

  	const mailOptions = {
	    from: 'petti.soporte@gmail.com',
	    to: 'sergio.maury@bpo2b.com',
	    cc: 'yennifer.herrera@bpo2b.com',
	    subject,
	    text
  	};
    transporter.sendMail(mailOptions, function(error, info){
      if(error){
        const response = {
          statusCode: 500,
          body: JSON.stringify({
            error: error.message,
          }),
        };
        callback(null, response);
      }
      const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Headers" : "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: JSON.stringify({
          message: `OK`
        }),
      };
      callback(null, response);
    });
}