import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import cors from 'cors'
import dbConnection from './Database/dbcon.js'
import Student from './Models/studentSchema.js';

// environment variable configuartion 
dotenv.config()

// rest object
const app = express()

// convert plain text to json format
app.use(express.json())
app.use(cors())


app.post('/add-student', async (req, res) => {
    const { name, email, studentId, course, phone, gender, city } = req.body;

    if (! name || !email ||!studentId ||!course ||!phone ||!gender ||!city ) {
        return res.status(500).send({Message : "Please fill all the fields"})
     }

    const newStudent = new Student({ name, email, studentId, course, phone, gender, city });

    try {
        await newStudent.save();
        res.status(201).json({ Message: 'Student added successfully' });
    } catch (error) {
        res.status(400).json({ Message: 'Error adding student', error });
    }
});

app.get('/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ Message: 'Error fetching students', error });
    }
});

// const port = process.env.PORT || 5000;
const port = 5000;
app.listen(port,'0.0.0.0', ()=>{
    // db connection called
    dbConnection();
    console.log(`Server is running at Port: ${port}`.bgGreen);
})
