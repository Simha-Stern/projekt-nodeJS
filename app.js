import express from "express";
import productsRoute from './routes/productsRoute.js'
import indexRoute from './routes/indexRoute.js'
// import loginRoute from './routes/loginRoute.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use("/products", productsRoute)
// app.use("/", indexRoute)
// app.use("/authenticate", loginRoute)


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});