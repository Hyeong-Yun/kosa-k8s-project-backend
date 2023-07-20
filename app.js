import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import 'express-async-errors';
import tweetRouter from './router/tweet.js';
import authRouter from './router/auth.js';
import https from "https"
import fs from "fs";

const options = {
  key: fs.readFileSync("./config/cert.key"),
  cert: fs.readFileSync("./config/cert.crt"),
}


const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.use('/products', tweetRouter);
app.use('/auth', authRouter);

app.use((req, res, next) => {
    res.sendStatus(404);
  });
  
  app.use((error, req, res, next) => {
      console.log(error);
      res.sendStatus(500);
  })

app.listen(8081);

https.createServer(options, app).listen(8080, () => {
  console.log(`HTTPS server started on port 8080`)
})