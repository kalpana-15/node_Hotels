const express=require('express');
const app=express();
const db=require('./db');
const bodyparser=require('body-parser');
app.use(bodyparser.json());
require('dotenv').config();
const PORT=process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("welcome to restaurant");
});
const personRoutes=require('./routes/personRoutes');
const menuRoutes=require('./routes/menuRoutes');


app.use('/person',personRoutes);
app.use('/menu',menuRoutes);

app.listen(PORT,()=>{
    console.log("serves is running on port 3000");
});
//comment added


