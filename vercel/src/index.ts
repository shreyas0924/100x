import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3000;
dotenv.config();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
