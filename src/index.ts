import express from "express";

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('It works');
})

app.listen(PORT, () => {
    console.log("Our server is running!");
});
