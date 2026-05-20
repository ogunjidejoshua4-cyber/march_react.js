/* eslint-disable no-unused-vars */
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { publicInstance } from '../api/api';
import authContext from '../context/authContext';


export const Login = () => {
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate()
    const [errorMessage, seterrorMessage] = useState("");
    const { login } = useContext(authContext)



    const loginSchema = z.object({
        email: z.string().min(1, "Email is required").email("Enter a valid email"),
        password: z.string().min(1, "Password is required").min(6, "Password must be at least 6 characters long")
    })


    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: zodResolver(loginSchema)
        }
    )



    const onSubmit = async (data) => {
        // console.log('logging use in....');

        setLoading(true);
        setDisabled(true);
        seterrorMessage("");


        try {
            const response = await publicInstance.post("/api/auth/login", data)
            console.log(response.data);

            if (response || response.data) {
                const user = response?.data?.user
                const token = response?.data?.token
                login({ user, token })

                navigate("/")
            }


        } catch (error) {

            const message =
                error.response?.data?.message ||
                error.message ||
                "Login failed";

            console.log(message);

            seterrorMessage(message);

            // if account is not verified
            if (message === "Please verify your account before logging in") {

                setTimeout(() => {
                    navigate("/verify-email");
                }, 5000);
            }

        } finally {

            setLoading(false);
            setDisabled(false);
        }
        // catch (error) {
        //     const message = error.response?.data?.message || error.message || "Login failed";
        //     console.log(message);
        //     seterrorMessage(message)
        // } finally {
        //     setLoading(false);
        //     setDisabled(false);

        // }




    }

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        gap: '10px',
    };

    const inputStyle = {
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '100%',
        boxSizing: 'border-box',
    };

    const buttonStyle = {
        padding: '10px 15px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    };

    // const navigate = useNavigate();
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
                <h2>Product Details</h2>

                {/* email Input (string) */}
                <div>
                    <label htmlFor="email">email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        style={inputStyle}
                        {...register("email")}
                        required
                    />
                    {errors.email && <p style={{ color: "red", fontSize: "10px" }}>{errors.email.message}</p>}
                </div>



                {/* Price Input (number/float) */}
                <div>
                    <label htmlFor="password">password</label>
                    <input
                        type="password" // Use type="number" for numeric input
                        step="0.01"    // Allows for float input (e.g., two decimal places)
                        id="password"
                        name="password"
                        {...register("password")}
                        style={inputStyle}
                        required
                    />
                    {errors.password && <p style={{ color: "red", fontSize: "10px" }}>{errors.password.message}</p>}

                </div>


                <button disabled={disabled} type="submit" style={buttonStyle}>
                    {loading ? "loading" : "submit"}


                </button>
                <p>{errorMessage}</p>
            </form>



        </div>
    )
}
