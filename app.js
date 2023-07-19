 const express = require('express');

const app = express();
const port = process.env.port||8000;
app.use(express.json());
app.post('/otp', (req, res) => {
  const { phoneNumber } = req.body;

  // Generate an OTP
  const otp = Math.floor(100000 + Math.random() * 900000);
 
  // Send the OTP to the user (you can use your preferred method here, e.g., SMS, email)
  console.log(`Sending OTP ${otp} to ${phoneNumber}`);

  res.json({ success: true, message: 'OTP sent successfully' });
});


app.listen(port);