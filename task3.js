var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
    user: 'deekshithadamma999@gmail.com',
    pass: 'sKKp evlx yten ynaf'
   }
});

var mailoptions = {
    from: 'deekshithadamma999@gmail.com',
    to: 'pravin.consensus@gmail.com',
    text: '20A21A1211'
};

transporter.sendMail(mailoptions,function(err, info){
    if (error){
        console.log('err');
    }else{
        console.log('gmail sent: ' +info.response);
    }
})
