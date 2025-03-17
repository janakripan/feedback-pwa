import { createContext, useContext, useEffect, useState } from "react";
import {
  clearOfflineFeedback,
  getOfflineFeedback,
  saveFeedbackOffline,
} from "../data/db";
import axios from "axios";

const API_URL = "https://67d7c98d9d5e3a10152bfe90.mockapi.io/feedback";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [feedbackList, setFeedbackList] = useState([]);

  const fetchFeedback = async () => {
    try {
      const response = await axios.get(API_URL);
      setFeedbackList(response.data);
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  const submitFeedback = async (feedback) => {
    if (!navigator.onLine) {
      console.log("offline, saving request");
      await saveFeedbackOffline(feedback);
      return { success: false, message: " feedback saved offline" };
    }

    try {
      const response = await axios.post(API_URL, feedback);
      setFeedbackList((prev) => [...prev, response.data]);
      return { success: true, message: "request submitted" };
    } catch (error) {
      return { success: false, message: "Error submitting feedback" };
    }
  };

  const syncOfflineFeedback = async () => {
    if (!navigator.onLine) return; 

    console.log("Syncing offline feedback...");

    const offlineFeedback = await getOfflineFeedback(); 
    if (offlineFeedback.length === 0) return; 

    for (const feedback of offlineFeedback) {
      try {
        const response = await axios.post(API_URL, feedback);
        console.log("Successfully synced:", response.data);

        
        setFeedbackList((prev) => [...prev, response.data]);
      } catch (error) {
        console.error("Error syncing feedback:", error);
      }
    }

    
    await clearOfflineFeedback();
  };


  useEffect(() => {
    fetchFeedback();
    const handleOnline = () => {
        console.log("Network restored! Attempting to sync...");
        syncOfflineFeedback();
      };
    
      window.addEventListener("online", handleOnline);
    
      return () => {
        window.removeEventListener("online", handleOnline);
      };
  }, []);
  window.syncOfflineFeedback = syncOfflineFeedback;

  return (
    <ApiContext.Provider
      value={{
        submitFeedback,
        syncOfflineFeedback,
        fetchFeedback,
        feedbackList,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
export const useApi = () => {
  return useContext(ApiContext);
};
