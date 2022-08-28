const express=require("express");
const app=express();
const PORT=4000;

app.get("/",(req,res) => {
    res.send("hello world nope");
})

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
})