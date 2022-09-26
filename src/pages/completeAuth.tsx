import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

export const CompleteAuth = () => {
  const [completed, setCompleted] = useState(false)
  
  useEffect(() => {
   const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const jwtToken = urlParams.get('token')
    console.log(jwtToken)
    document.cookie = `smartBookmarkerToken=${jwtToken}`;
    setCompleted(true)
  }, [])
  
  
  return (
    <div>
      {!completed ? <p>Logging you in...</p> : <Navigate to="/bookmarks" />}
    </div>
  );
}