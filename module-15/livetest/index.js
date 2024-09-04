const express = require("express");
const multer = require("multer");
const router = express.Router();
const app = express();
const PORT = 3000;
const upload_directory = "./uploads/";

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, upload_directory);
	},
	filename: function (req, file, cb) {
		cb(
			null,
			file.fieldname + "-" + Date.now() + path.extname(file.originalname)
		);
	},
});

const upload = multer({ storage: storage });
const fs = require("fs");
const uploadsDir = "uploads";
if (!fs.existsSync(uploadsDir)) {
	fs.mkdirSync(uploadsDir);
}

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});
app.use(router);
app.post("/upload", upload.single("file"), (req, res) => {
	try {
		res.end("File uploaded successfully.");
	} catch (err) {
		res.end(err);
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
