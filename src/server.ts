import express from 'express';
import UserRouter from './routes/UserRoutes';
import LanceRouter from './routes/LanceRoutes';
import LeilaoRouter from './routes/LeilaoRoutes';

const app = express();
app.use(express.json());

app.use(LanceRouter);
app.use(LeilaoRouter);
app.use(UserRouter);

app.listen(3000, function(){
    console.log("Server running on port 3000");
})