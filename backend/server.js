const express=require('express');
const dotenv=require('dotenv');
const connectDB = require('./config/db');
dotenv.config();

const {notFound,errorHandler}=require('./middleware/errorMiddleware');
const app=express();
const productRoutes=require('./routes/productRoutes');
connectDB();

app.get('/',(req,res)=>{
    res.send('Backend API is running...');
});

app.use('/api/products',productRoutes);

app.use(errorHandler);
app.use(notFound);

const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${port}`);
})