import express from "express";
import productsRoute from './routes/productsRoute.js'
import indexRoute from './routes/indexRoute.js'
import morgan from 'morgan';

const app = express();
const port = 3000;

app.use(express.json());
app.use("/products", productsRoute);
app.use(morgan('combined'));
// app.use("/", indexRoute)
// app.use("/authenticate", loginRoute)


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});