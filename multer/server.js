const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const User = require('./model/usermodel');

const app = express();

// Database Connection
mongoose.connect('mongodb://127.0.0.1:27017/multerdb')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Middleware setup
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the 'upload' folder
app.use('/upload', express.static(path.join(__dirname, 'upload')));

// Multer Storage Configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/'); // The folder where files will be saved
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname)); // unique filename
    }
});

const upload = multer({ storage: storage });

// Routes

// GET route to render the index page and show all users
app.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.render('index', { users });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// POST route to handle form submission with image upload
app.post('/upload', upload.single('image'), async (req, res) => {
    try {
        const { username, password } = req.body;
        // If file is uploaded, req.file is available
        const imagePath = req.file ? req.file.filename : null;

        const newUser = new User({
            username,
            password,
            image: imagePath
        });

        await newUser.save();
        res.redirect('/');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
