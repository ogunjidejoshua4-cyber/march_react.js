import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { publicInstance } from '../api/api';

export const Signup = () => {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const signupSchema = z.object({
        name: z.string().min(1, "Name is required").min(3, "Name must be at least 3 characters"),
        email: z.string().min(1, "Email is required").email("Enter a valid email"),
        age: z.coerce.number().min(1, "Age is required"),
        gender: z.string().min(1, "Gender is required"),
        password: z.string().min(1, "Password is required").min(6, "Password must be at least 6 characters long"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(signupSchema),
    });

    const onSubmit = async (data) => {
        setLoading(true);
        setErrorMessage("");
        setSuccessMessage("");

        const payload = {
            name: data.name,
            email: data.email,
            age: data.age,
            gender: data.gender,
            password: data.password,
        };

        try {
            const response = await publicInstance.post("/api/auth/register", payload);

            setSuccessMessage(response.data?.message || "Account created successfully");

            if (response.data?.token) {
                localStorage.setItem("token", response.data.token);
            }
        } catch (error) {
            const message = error.response?.data?.message || error.message || "Signup failed";
            console.log(message);
            setErrorMessage(message);
        } finally {
            setLoading(false);
        }
    };

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
        cursor: loading ? 'not-allowed' : 'pointer',
        opacity: loading ? 0.7 : 1,
    };

    const errorStyle = {
        color: "red",
        fontSize: "10px",
        margin: "4px 0 0",
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
                <h2>Create Account</h2>

                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        style={inputStyle}
                        {...register("name")}
                    />
                    {errors.name && <p style={errorStyle}>{errors.name.message}</p>}
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        style={inputStyle}
                        {...register("email")}
                    />
                    {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
                </div>

                <div>
                    <label htmlFor="age">Age:</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        style={inputStyle}
                        {...register("age")}
                    />
                    {errors.age && <p style={errorStyle}>{errors.age.message}</p>}
                </div>
                <div>
                    <label htmlFor="gender">Gender:</label>
                    <select
                        id="gender"
                        name="gender"
                        style={inputStyle}
                        {...register("gender")}
                    >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    {errors.gender && <p style={errorStyle}>{errors.gender.message}</p>}
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        style={inputStyle}
                        {...register("password")}
                    />
                    {errors.password && <p style={errorStyle}>{errors.password.message}</p>}
                </div>

                <button disabled={loading} type="submit" style={buttonStyle}>
                    {loading ? "Creating account..." : "Sign up"}
                </button>

                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    );
};
