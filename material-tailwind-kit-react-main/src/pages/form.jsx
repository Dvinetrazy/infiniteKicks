import { Input, Checkbox, Button, Typography, } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import './style.css'; // Assuming styles.css is in the same directory as your component
import React, { useState } from 'react';
import { SignUp } from ".";
import { SignIn} from ".";

export function Form() {
  const [selectedTab, setSelectedTab] = useState('login');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);

    {selectedTab === 'login' && (
      // Tampilkan form login di sini
      <SignIn />
    )}
    
  
    
  };

  return (
    
        <div>
        <div className="text-center" hidden>
          <Typography variant="h2" className="font-bold mb-4">Welcome Back!</Typography>          
        </div>

        <div className="text-center" hidden>
        <div className="body">
      <div className="tabs" hidden>
        <input
          checked={selectedTab === 'login'}
          onChange={() => handleTabChange('login')}
          value="HTML"
          name="fav_language"
          id="html"
          type="radio"
          className="input"
        />
        <label htmlFor="html" className="label">
          Login
        </label>
        <input
          checked={selectedTab === 'register'}
          onChange={() => handleTabChange('register')}
          value="CSS"
          name="fav_language"
          id="css"
          type="radio"
          className="input"
        />
        <label htmlFor="css" className="label">
        Register
        </label>
      </div>
    </div>

        </div>
           {/* Conditional rendering based on selectedTab */}
        {selectedTab === 'login' && (
           <SignIn />
        )}

        {/* Conditional rendering for SignUp component */}
        {selectedTab === 'register' && (
          <SignUp />
        )}
        </div>

    

       
  
  );
}

export default Form;
