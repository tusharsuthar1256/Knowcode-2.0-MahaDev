import React from "react";
import { motion } from "framer-motion"; // Optional for animations

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null; // Do not render if modal is not open

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
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Modal Title */}
        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}

        {/* Modal Content */}
        <div>{children}</div>
      </motion.div>
    </div>
  );
}

export default Modal;
