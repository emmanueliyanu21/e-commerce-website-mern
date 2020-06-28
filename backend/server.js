import express from 'express';
import data from './data';

const app = express();
// app.use(bodyParser.json());
// app.use('/api/uploads', uploadRoute);

app.get("/api/products", (req, res) => {
    res.send(data.products)
})

// Set Port
app.listen(4000, () => {
    console.log("Server started at http://localhost:4000")
})
