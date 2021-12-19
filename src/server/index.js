const express = require('express');
const routerApi = require('./routes/index.routes')


const  PORT  = process.env.PORT || 3000;

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Server works"
    });
});


routerApi(app)

app.listen(PORT, () => {
    console.log('Server on port', PORT);
})