import React, { useState } from "react";
import axios from "axios";

const VerifyEmail = () => {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleVerify = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post(
                "http://localhost:5000/api/auth/resendVerificationCode",
                { email }
            );

            setMessage(response.data.message);

        } catch (error) {

            setMessage(
                error.response?.data?.message || "Something went wrong"
            );
        }
    };

    return (
        <div style={containerStyle}>

            <form onSubmit={handleVerify} style={formStyle}>

                <h2>Email Verification</h2>

                <p>
                    Enter your email to receive a verification code.
                </p>

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle}
                    required
                />

                <button type="submit" style={buttonStyle}>
                    Send Verification Code
                </button>

                {
                    message && (
                        <p style={{ marginTop: "10px", color: "green" }}>
                            {message}
                        </p>
                    )
                }

            </form>

        </div>
    );
};

export default VerifyEmail;



// styles

const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
};

const formStyle = {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    width: "350px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
};

const inputStyle = {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
};

const buttonStyle = {
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "black",
    color: "white",
    cursor: "pointer",
};