import express from "express";
import routes from "./routes/apiRoutes.js";
import bodyParser from "body-parser";
import cors from "cors"

const app = express();
const port = 4000;

app.use(cors())
app.use(bodyParser.urlencoded({extended : true}));
app.use("/api/v1", routes)


app.get("/", (req, res)=>{
    res.send("<h1>Blog Server<h1/>");
})

app.listen(port, ()=>{
    console.log(`server up and running in port ${port}`)

})