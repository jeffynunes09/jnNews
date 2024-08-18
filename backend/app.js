import express from "express";
import connectDatabase from "./DB/dataBase.js";
import dotenv from "dotenv";
import cors from 'cors'
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import newsRoute from "./routes/post.route.js";
import swaggerRoute from "./routes/swagger.route.cjs";

dotenv.config();

const port = process.env.PORT || 3001;
const app = express();
const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    optionsSuccessStatus: 200 // Para suportar navegadores mais antigos
  };
  
  app.use(cors(corsOptions));
  

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/posts", newsRoute);
app.use("/doc", swaggerRoute);

app.listen(port, () => console.log(`Server running on port: ${port}`));
