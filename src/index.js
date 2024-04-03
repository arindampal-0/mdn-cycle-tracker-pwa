import path from "path";
import express from "express";
import helmet from "helmet";

const PORT = process.env.PORT ?? 3000;

const app = express();
app.use(helmet());
app.use(express.json());

app.use("/", express.static(path.join(process.cwd(), "public")));

app.get("/api", function (_req, res) {
    res.json({ msg: "Hello, PWA!" });
});

app.listen(PORT, function () {
    console.log(`Server started at http://localhost:${PORT}`);
});


export default app;