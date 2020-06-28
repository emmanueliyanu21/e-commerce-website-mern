import express from 'express';
import data from './data';
const http = require('http');

const app = express();
// app.use(bodyParser.json());
// app.use('/api/uploads', uploadRoute);

app.get("/api/products", (req, res) => {
    res.send(data.products)
})

// Set Port
const port = process.env.PORT || '4000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on port ${port}`));
