import express from 'express'

const app = express();
const port = process.env.PORT || 8001;


app.get('/', (req, res) => {
    res.status(200).send('Hello Shubham!!!');
});

app.listen(port, ()=> {
    console.log(`listening on localhost Port : ${port} `);
})
