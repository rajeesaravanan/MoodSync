require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const authRoutes = require('./routes/auth')

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'))

app.use('/api/auth', authRoutes)


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

// Test route
app.get('/test', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Serve Signup Page
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

// Serve Login Page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Start Server
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))