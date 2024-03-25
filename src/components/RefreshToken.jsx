import React, { useEffect } from "react";

function RefreshToken() {
  useEffect(() => {
    const refreshToken = async () => {
      // Retrieve the access token from local storage
      const accessToken = localStorage.getItem("accessToken");
      console.log('Access Token before RefreshToken function:', accessToken);

      // Check if there is an access token
      if (!accessToken) {
        console.log("No access token found. Token refresh skipped.");
        return;
      }

      // Make a request to your backend to refresh the token
      try {
        const response = await fetch(`https://apiv1-wsuwijidsa-el.a.run.app/user/refresh_token?token=${accessToken}`, {
          method: "POST",
          headers: {
            // "Content-Type": "application/json", // Specify content type
            Authorization: `Bearer ${accessToken}` // Include access token in Authorization header
          },
          body: JSON.stringify({ token: accessToken }), // Pass token as JSON string
        });

        const responseData = await response.json();
        console.log('Response Data:', responseData); // Log the response data

        if (response.ok) {
          // If the request is successful, get the new access token from the response
          const newAccessToken = responseData;
          console.log('New Access Token after refresh:', newAccessToken);

          // Update the access token in local storage
          localStorage.setItem("accessToken", newAccessToken);
          console.log('Access Token after RefreshToken function:', localStorage.getItem("accessToken"));

          console.log("Token refreshed successfully.");
        } else {
          console.error("Failed to refresh token. Status:", response.status);
        }
      } catch (error) {
        console.error("Failed to refresh token:", error.message);
      }
    };

    // Call refreshToken initially
    refreshToken();

    // Set up interval to refresh token every 8 minutes
    const intervalId = setInterval(refreshToken, 8 * 60 * 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return null; // This component doesn't render anything
}

export default RefreshToken;
