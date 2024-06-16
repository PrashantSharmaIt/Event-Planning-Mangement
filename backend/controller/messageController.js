import { Message } from "../models/messageSchema.js";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Check if all fields are provided
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Create a new message instance
    const newMessage = new Message({ name, email, subject, message });

    // Save the message to the database
    await newMessage.save();

    // Respond with success
    res.status(200).json({
      success: true,
      message: "Message Sent Successfully.",
    });
  } catch (error) {
    // Handle validation errors
    if (error.name === "ValidationError") {
      let errorMessage = "";

      if (error.errors.name) {
        errorMessage += error.errors.name.message + " ";
      }
      if (error.errors.email) {
        errorMessage += error.errors.email.message + " ";
      }
      if (error.errors.subject) {
        errorMessage += error.errors.subject.message + " ";
      }
      if (error.errors.message) {
        errorMessage += error.errors.message.message + " ";
      }

      return res.status(400).json({
        success: false,
        message: errorMessage.trim(),
      });
    }

    // Handle unknown errors
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
