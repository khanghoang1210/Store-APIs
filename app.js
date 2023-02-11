const express=require('express');
require('dotenv').config();
require('express-async-errors');

const app = express();
const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');
const connectDB = require('./db/connect');

const procductsRouter = require('./routes/products');
//middleware
app.use(express.json());
//routes
app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">product route </a>');
});
app.use('/api/v1/products',procductsRouter);
//product routes
app.use(notFoundMiddleware);
app.use(errorMiddleware);
const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port http://localhost:${port}`));
    } catch (error) {
        console.log(error);
    }
}
start();
