import React, { useState, useEffect, useRef } from 'react';
import './otp.css';

export const OTP = ({ inputLength }) => {
    const [otp, setOtp] = useState(new Array(inputLength).fill(''));
    const inputRefs = useRef([]);

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    const handleChange = (index, e) => {
        const value = e.target.value;
        if (isNaN(value)) return; // Ensure only numbers are entered

        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1); // Only take the last character
        setOtp(newOtp);

        // Move to next input
        if (value && index < inputLength - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = () => {
        const otpValue = otp.join('');
        console.log(otpValue);
    };

    return (
        <div className="otp-container">
            {otp.map((value, index) => (
                <input
                    key={index}
                    type="text"
                    className="inputField"
                    value={value}
                    ref={(el) => (inputRefs.current[index] = el)}
                    onChange={(e) => handleChange(index, e)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    maxLength={1}
                    aria-label={`OTP digit ${index + 1}`}
                />
            ))}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};