import express from "express";
import 'dotenv/config'
import cors from "cors";

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());


app.get("/test", (req, res) => {
    res.json({message: "test"})
})

app.listen(port, () => {
    console.log("App running on port: ", port);
})

