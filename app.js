const createError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const multer = require('multer');
const mongoose = require('mongoose');
const Visitor = require('./models/visitor');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/visitor_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Could not connect to MongoDB', err);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.post('/submit-visitor', upload.none(), async (req, res) => {
  try {
    console.log('Form data received:', req.body);

    const { name, phone, email, id_proof, id_proof_number, gender, purpose, department, designation, to_meet, photo } = req.body;

    // Check for missing fields and log them
    let missingFields = [];
    if (!name) missingFields.push('name');
    if (!phone) missingFields.push('phone');
    if (!email) missingFields.push('email');
    if (!id_proof) missingFields.push('id_proof');
    if (!gender) missingFields.push('gender');
    if (!purpose) missingFields.push('purpose');
    if (!department) missingFields.push('department');
    if (!to_meet) missingFields.push('to_meet');

    if (missingFields.length > 0) {
      console.log('Missing fields:', missingFields);
      return res.status(400).json({ message: 'All fields are required', missingFields });
    }

    // Remove the prefix "data:image/png;base64," if present
    const photoBase64 = photo.replace(/^data:image\/png;base64,/, '');

    const visitorData = new Visitor({
      name,
      phone,
      email,
      id_proof,
      id_proof_number,
      gender,
      purpose,
      department,
      designation,
      to_meet,
      photo: photoBase64,
      intime: new Date()
    });

    const savedVisitor = await visitorData.save();
    console.log('Saved Visitor data:', savedVisitor);

    res.json({ message: 'Visitor added successfully', visitorId: savedVisitor._id });
  } catch (error) {
    console.error('Error adding visitor:', error.message);
    res.status(500).json({ message: 'Error adding visitor', error: error.message });
  }
});

app.use(express.static('public'));

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
