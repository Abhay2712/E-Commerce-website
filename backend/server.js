const express=require('express');
const dotenv=require('dotenv');
const connectDB = require('./config/db');
dotenv.config();

const {notFound,errorHandler}=require('./middleware/errorMiddleware');
const app=express();
app.use(express.json());
const productRoutes=require('./routes/productRoutes');
const userRoutes=require('./routes/userRoutes');
connectDB();

app.get('/',(req,res)=>{
    res.send('Backend API is running...');
});

app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes);

app.use(errorHandler);
app.use(notFound);

const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${port}`);
})