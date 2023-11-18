import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";
import productRoute from "./Routes/ProductRoute.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import userRouter from "./Routes/Userroutes.js";

dotenv.config();
connectDatabase();
const app = express()
app.use(express.json());

app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users",userRouter);
//error handler
app.use(notFound);
app.use(errorHandler);

app.get("/",(req,res)=>{
    res.send("API is Running ...");
});

const PORT = process.env.PORT || 1000;


app.listen(PORT,console.log(`server run in port ${PORT}`));