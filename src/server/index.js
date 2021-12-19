const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json())

const mongoose = require('mongoose');
const { findByIdAndDelete, findByIdAndUpdate } = require('../../../mern-stack-tasks/src/models/task');
const URI = 'mongodb://agilcargoadmin:database%20agilcargo%20group4@agilcargodb-shard-00-00.fsr4r.mongodb.net:27017,agilcargodb-shard-00-01.fsr4r.mongodb.net:27017,agilcargodb-shard-00-02.fsr4r.mongodb.net:27017/AgilCargoDB?authSource=admin&replicaSet=atlas-6acfi4-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true';

mongoose.connect(URI)
  .then(db => console.log('Dsatbase is connected'))
  .catch(error => console.error(error));

app.post('/login', (req, res) => {
    const { emailLogin, passwordLogin } = req.body;
    res.json({
        message: 'Login'
    });
});


app.post('/signup', (req, res) => {
    const {name, email, password } = req.body;
    res.json({
        message: 'Signup'
    });
});

app.post('/dashboard', (req, res) => {
    const {originPoint, destinatePoint, time, distance } = req.body;
    res.json(body);
});

app.get('/dashboard/users/', (req, res) => {//example
    res.status(200).json({
        name: "noob",
        lastname: "master",
        nickname: "69"
    });
});

app.put('/dashboard/users/', (req, res) => {//example
    const body = req.body;
    res.json(body);
});

app.patch('/dashboard/users/:id', (req, res) => {//example
    const { id } = req.params;
    const { nameUser } = req.body;
    findByIdAndUpdate(id)
    res.json({
        name: "Noob" 
    });
});

app.get('/dashboard/users/:id', (req, res) => {//example
    const { id } = req.params;
    res.status(200).json({
        id,
        name: "noob",
        lastname: "master",
        nickname: "69"
    });
});

app.delete('/dashboard/users/:id', (req, res) => {
    const { id } = req.params;
    findByIdAndDelete(id);
    res.json({
        message: "Deleted"
    });
});

app.post('/budget', (req, res) => {
    const body = req.body;
    res.json({
        message: 'Budget'
    });
});

app.get('/budget/resultBudget', (req, res) => {
    res.status(200).json({
        message: 'resultBudget'
    })
});


app.get('/order', (req, res) => {
    res.status(200).json({
        message: 'Order'
    })
});

app.post('/order', (req, res) => {
    const body = req.body;
    res.json({
        message: 'Order'
    });
});

app.listen(PORT, () => {
    console.log('Server on port ', PORT);
})