const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/login", (req, res) => {
    // req.body.token ← app gửi lên
    console.log("Token nhận:", req.body.token);

    res.json({
        Status: "Success",
        token: "loginSucesso"
    });
});

app.listen(8080, () => {
    console.log("Server chạy cổng 8080");
});