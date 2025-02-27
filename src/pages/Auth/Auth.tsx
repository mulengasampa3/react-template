import React, { useState, ChangeEvent } from "react";
import CompanyLogo from "../../assets/images/icons/Logo-white.png"; // Adjust the path as needed

const ClientAuth: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<"phone" | "email">("phone"); // Default to "phone"
    const [loading, setLoading] = useState<boolean>(false);

    const handlePhoneInput = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target;
        // Ensure the input always starts with "+260"
        if (!input.value.startsWith("+260")) {
            input.value = "+260" + input.value.replace(/^\+?\d{0,3}/, "");
        }
        // Remove any non-numeric characters after "+260"
        input.value = "+260" + input.value.slice(4).replace(/\D/g, "");
    };

    const handleOptionSelection = (option: "phone" | "email") => {
        //setSelectedOption(null);  Reset to show loading spinner
        setLoading(true);

        // Simulate loading
        setTimeout(() => {
            setSelectedOption(option);
            setLoading(false);
        }, 500);
    };

    return (
        <div className="screen-container min-h-screen flex items-start sm:items-center justify-center bg-custom-gradient">
            <form className="bg-auth-form-color flex flex-col shadow-[0 4px 30px rgba(25, 25, 25, 0.178)] backdrop-blur-[40px] hover:backdrop-blur-[20px] sm:px-10 px-5 sm:py-6 py-24 justify-start shadow-md w-full sm:w-[500px] sm:h-full h-screen client-login-form space-y-6">
                {/* Logo */}
                <div className="img-container w-full h-[100px] flex items-center justify-center">
                    <img src={CompanyLogo} alt="Company Logo" className="h-full w-full object-contain" />
                </div>

                {/* Buttons to choose OTP method */}
                <div className="flex justify-center space-x-4">
                    <button
                        type="button"
                        onClick={() => handleOptionSelection("phone")}
                        className={`w-40 py-2 rounded-md transition duration-200 ${
                            selectedOption === "phone" ? "bg-company-color-secondary text-white" : "bg-[#626262] text-white"
                        }`}
                    >
                        Send by Phone
                        <i className="ml-2 bi bi-phone-fill"></i>
                    </button>

                    <button
                        type="button"
                        onClick={() => handleOptionSelection("email")}
                        className={`w-40 py-2 rounded-md transition duration-200 ${
                            selectedOption === "email" ? "bg-company-color-secondary text-white" : "bg-[#626262] text-white"
                        }`}
                    >
                        Send by Email
                        <i className="ml-2 bi bi-envelope-at-fill"></i>
                    </button>
                </div>

                {/* Loading spinner */}
                {loading && (
                    <div className="text-center text-white flex items-center justify-center space-x-2">
                        <div className="spinner-border animate-spin inline-block w-6 h-6 border-4 border-t-transparent border-white rounded-full"></div>
                        <p>Loading...</p>
                    </div>
                )}

                {/* Conditional input fields */}
                {selectedOption === "phone" && !loading && (
                    <div>
                        <label className="block text-sm font-medium text-white" htmlFor="phoneNumber">
                            Phone Number:
                        </label>
                        <input
                            type="text"
                            id="phoneNumber"
                            placeholder="+260..."
                            className="mt-1 block w-full p-2 border border-white pl-4 h-[50px] rounded-[30px] bg-transparent text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-company-color-secondary"
                            required
                            defaultValue="+260"
                            onInput={handlePhoneInput}
                        />
                    </div>
                )}

                {selectedOption === "email" && !loading && (
                    <div>
                        <label className="block text-sm font-medium text-white" htmlFor="email">
                            Email Address:
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email..."
                            className="mt-1 block w-full p-2 border border-white pl-4 h-[50px] rounded-[30px] bg-transparent text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-company-color-secondary"
                            required
                        />
                    </div>
                )}

                {/* Submit Button */}
                <div className="w-full flex flex-col items-center justify-center">
                    <button
                        type="submit"
                        className="w-40 bg-company-color-secondary hover:bg-[#626262] text-[#fff] py-2 rounded-md transition duration-200"
                    >
                        Send OTP
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ClientAuth;
