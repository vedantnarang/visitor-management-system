const mongoose = require('mongoose');

// const dbURI = 'mongodb://localhost:27017/visitor_management';

// mongoose.connect(dbURI);

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

module.exports = mongoose;


const visitorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  id_proof: { type: String, enum: ['aadhar-card', 'driving-license', 'pan-card', 'voter-id',''], default: '',required:false },
  id_proof_number: { type: String, default: '' ,required:false},
  gender: { type: String, enum: ['M', 'F', 'O'], required: true },
  purpose: { type: String, required: true },
  department: { type: String, required: true },
  designation: { type: String, default: '' },
  to_meet: { type: String, required: true },
  photo: { type: String, required: true },
  intime: { type: Date, required: true }
});

module.exports = mongoose.model('Visitor', visitorSchema);
