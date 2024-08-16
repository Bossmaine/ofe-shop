import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

dotenv.config();

const port = process.env.PORT || 1000;

connectDB();
const app = express();

app.get('/', (req, res) => {
    res.send('Api is working')
})

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port:${port}`)
})