import app from '../app';
import mongoose from 'mongoose';

//Connect to database
mongoose.connect('mongodb://thebab:pass1234@ds239009.mlab.com:39009/thebab');

app.listen(8080, (req, res) => {
  console.log('Server spinning up!');
});
