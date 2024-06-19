import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

const Contact= () => {
    const [formData, setFormData] = useState({
        name: '',
        contactNumber: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
          const res=await axios.post('http://localhost:3000/post',formData,{
            headers:{
              'Content-Type': 'application/json'
            }
          })
          console.log('success', res.data);
        } catch (error) {
          console.error("Error",error);
        }
        console.log('Form Data Submitted:', formData);
        // Here you can add code to handle form submission, e.g., sending data to a server
    };

    return (
        <div className="container">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="contactNumber">Contact Number:</label>
                    <input 
                        type="phone" 
                        id="contactNumber" 
                        name="contactNumber" 
                        value={formData.contactNumber} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
