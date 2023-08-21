import express from "express";
import morgan from 'morgan';
import productsRouter from './routes/productsRoute.js';
import loginRoute from './routes/loginRoute.js';


const app = express();
const port = 3000;
const data = "https://fakestoreapi.com/products";


app.use(express.json());
app.use("/products", productsRouter.router);
app.use(morgan('combined'));
app.use("/users", loginRoute);


productsRouter.createData(data);


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});