const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv")
const blogModel = require("./models/blogModel");
const mongoose = require('mongoose');


// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Database connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

// Controller functions
// Create a new blog
const createBlog  = async (req, res) => {
  try {
    const { title, short_des, des, img } = req.body;

    const newBlog = new blogModel({ title, short_des, des, img });
    const savedBlog = await newBlog.save();

    res.status(201).json({ message: "Blog created successfully", data: savedBlog });
  } catch (error) {
    res.status(500).json({ message: "Error creating blog", error });
  }
};

// Get single blogs
const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await blogModel.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog fetched successfully", data: blog });
  } catch (error) {
    res.status(500).json({ message: "Error fetching blog", error });
  }
};

// Update blog
const updateBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, short_des, des, img } = req.body;

    const updatedBlog = await blogModel.findByIdAndUpdate(
      id,
      { title, short_des, des, img },
      { new: true } 
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog updated successfully", data: updatedBlog });
  } catch (error) {
    res.status(500).json({ message: "Error updating blog", error });
  }
};

// Delete blog
const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBlog = await blogModel.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog deleted successfully", data: deletedBlog });
  } catch (error) {
    res.status(500).json({ message: "Error deleting blog", error });
  }
};

// server.js Code
dotenv.config();
const app = express();
connectDB();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Define routes
app.post("/blogs", createBlog);
app.get("/blogs/:id", getBlogById);
app.put("/blogs/:id", updateBlogById);
app.delete("/blogs/:id", deleteBlogById);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
