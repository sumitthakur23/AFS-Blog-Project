const express = require('express');
const app = express();

app.use(express.json());

app.use("/api/users",require("./routes/userRoute"))
app.use("/api/blogs",require("./routes/blogRoute"))
app.use("/api/auth",require("./routes/auth"))
app.use("/api/like",require("./routes/like"))
app.use("/api/dislike",require("./routes/dislike"))
app.use("/verify",require("./routes/verify"))

app.listen(4245,()=>{
    console.log("server started")
})
