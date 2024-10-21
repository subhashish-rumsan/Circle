import { useState } from "react";

import apiClient from "../utils";

export const useCreateUsers = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const createUsers = async (numberOfUsers) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await apiClient.post("/users", {
        numberOfUsers, // Sending the number of users to create
      });

      if (response.status === 200) {
        setSuccess(true); // Set success state if the request is successful
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred while creating users."
      );
    } finally {
      setLoading(false); // Set loading to false after request
    }
  };

  return { createUsers, loading, error, success };
};
