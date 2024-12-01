"use client"

import { ClipLoader } from "react-spinners";
const LoadingPage = () => {
    const override = {
        display: "block",
        margin: "100px auto",
    }
    return (
        <div>
            <ClipLoader 
              color="#3b82f6" 
              cssOverride={override} 
              size={150} 
              aria-label="Loading Spinner" 
            />
        </div>
    );
}

export default LoadingPage;