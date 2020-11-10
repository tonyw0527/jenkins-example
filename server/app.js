const express = require('express');

const app = express();
const PORT = 3001;

app.get('/data', (req, res) => {
    const data = [{
        title: "Hello express"
    }]

    res.status(200).send({
        success: 'true',
        message: 'Data fethed successfully!',
        data: data
    })
})

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);
})