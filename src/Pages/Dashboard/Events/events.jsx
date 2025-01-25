import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../Context/appContext";
import Modal from "../../../Components/model.jsx";
import { db, storage } from "../../../utils/firebase.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection, Timestamp, getDocs } from "firebase/firestore";

function Events() {
  const { isExpand } = useContext(AppContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [events, setEvents] = useState([]);  // State to hold fetched events

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const handleSubmit = async (eventData) => {
    setIsSubmitting(true);

    try {
      let eventImageUrl = "";

      // Upload image to Firebase Storage
      if (eventData.eventImage) {
        const storageRef = ref(storage, `event-images/${eventData.eventImage.name}`);
        const uploadResult = await uploadBytes(storageRef, eventData.eventImage);
        eventImageUrl = await getDownloadURL(uploadResult.ref);
      }

      // Save event details to Firestore
      await addDoc(collection(db, "events"), {
        eventName: eventData.eventName,
        eventTime: Timestamp.fromDate(new Date(eventData.eventTime)),
        eventDesc: eventData.eventDesc,
        organizerName: eventData.organizerName,
        eventImage: eventImageUrl,
      });

      alert("Event created successfully!");
      setIsModalOpen(false); // Close the modal after successful submission
      fetchEvents(); // Fetch updated events after creation
    } catch (error) {
      console.error("Error creating event:", error);
      alert("Failed to create event. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fetch events from Firestore when the component mounts
  const fetchEvents = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "events"));
      const eventsList = querySnapshot.docs.map((doc) => doc.data());
      setEvents(eventsList); // Store fetched events in state
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents(); // Fetch events when the component mounts
  }, []);

  return (
    <>
      <div
        className={`text-gray-600 body-font ${isExpand ? "flex justify-center item-center flex-col p-20 w-[calc(100%-16rem)]" : "m-20 ml-40 w-[calc(100%-5rem)]"}`}
      >
        <div
          className={`flex justify-between items-center ${isExpand ? "ml-60 w-[calc(100%-16rem)]" : "w-[calc(100%-5rem)]"}`}
        >
          <h1 className="text-xl font-medium text-gray-900 title-font">Events</h1>
          <button
            className="bg-green-400 py-1.5 px-3 rounded-lg hover:bg-green-500 text-white"
            onClick={handleOpen}
          >
            Create +
          </button>
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={handleClose}
          title="Create Event"
          onSubmit={handleSubmit} // Pass the handleSubmit function to the Modal component
        />
      </div>

      {/* Display Events in Stacked Card Layout (One Below Another) */}
      <div
        className={`flex justify-center items-start flex-col gap-6 p-4 ${isExpand ? "ml-60 w-[calc(100%-16rem)] pl-18" : " ml-40 w-[calc(100%-5rem)]"}`}
      >
        {events.map((event, index) => (
          <div key={index} className="w-[600px] rounded overflow-hidden shadow-lg bg-white mb-6">
            {event.eventImage && (
              <img
                src={event.eventImage}
                alt={event.eventName}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="px-6 py-4">
              <h3 className="font-bold text-xl mb-2">{event.eventName}</h3>
              <p className="text-gray-700 text-base">{event.eventDesc}</p>
            </div>
            <div className="px-6 py-4 flex justify-between items-center">
              <span className="text-gray-500">{event.organizerName}</span>
              <span className="text-gray-500">{new Date(event.eventTime.seconds * 1000).toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Events;
