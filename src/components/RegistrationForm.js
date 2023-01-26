import { useState } from "react";
import { useSelector } from "react-redux";

export function RegistrationForm() {
    const [formData, setFormData]=useState({});
    const score = useSelector((state)=>{
        return state.ScoreReducer;
    });
    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
    }
    return(
        <>
            <h1>Sign Up {score}</h1>
                <form onSubmit={handleSubmit}>
                    <input name="name" type="text" placeholder="Enter Name" onChange={handleChange} />
                    <br /><br />
                    <input name="password" type="password" placeholder="Enter Password" onChange={handleChange} />
                    <br /><br />
                    <input name="phone" type="text" placeholder="Enter Phone" onChange={handleChange} />
                    <br /><br />
                    <input name="email" type="email" placeholder="Enter Email" onChange={handleChange} />
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
        </>
    );
}