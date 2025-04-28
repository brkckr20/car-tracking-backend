import express, { Request, Response } from 'express';
import cors from 'cors';
import { carList, processList, upcomingProcessList } from './data'

const app = express();
app.use(cors());

const port = process.env.PORT || 3001;

app.get('/', (req: Request, res: Response) => {
    res.send({ upcomingProcessList, processList });
})
app.get('/cards', (req: Request, res: Response) => {
    res.send({ carList, processList });
});


app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});