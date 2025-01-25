import React, { useState } from "react";
import { motion } from "framer-motion";

function Modal({ isOpen, onClose, title, onSubmit }) {
  const [eventData, setEventData] = useState({
    eventName: "",
    eventTime: "",
    eventDesc: "",
    organizerName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(eventData);
    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-lg w-[90%] max-w-md p-6 relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Modal Title */}
        <h2 className="text-xl font-semibold mb-4">Create Event</h2>

        {/* Modal Form */}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            {/* Event Name */}
            <input
              type="text"
              name="eventName"
              placeholder="Event Name"
              value={eventData.eventName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            {/* Event Time */}
            <input
              type="datetime-local"
              name="eventTime"
              value={eventData.eventTime}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            {/* Event Description */}
            <textarea
              name="eventDesc"
              placeholder="Event Description"
              value={eventData.eventDesc}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              required
            ></textarea>

            {/* Organizer Name */}
            <input
              type="text"
              name="organizerName"
              placeholder="Organizer Name"
              value={eventData.organizerName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600"
          >
            Create Event
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Modal;
