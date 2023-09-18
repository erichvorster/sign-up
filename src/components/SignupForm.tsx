import React, { useState } from "react";
import Input from "./Input";
import RadioButton from "./RadioButton";
import Button from "./Button";

// Define types for form data and form errors
interface FormData {
  firstName: string;
  lastName: string;
  contactNumber: string;
  email: string;
  gender: string;
  consent: boolean;
}

interface FormErrors {
  firstName: string;
  lastName: string;
  contactNumber: string;
  email: string;
  gender: string;
  consent: string;
}

const SignupForm: React.FC = () => {
  // Initialize form data, errors, loading state, and submission status
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    gender: "",
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    gender: "",
    consent: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Handler for input field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear errors on change
    if (errors[name as keyof FormErrors] && value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name as keyof FormErrors]: "",
      }));
    }
  };

  // Handler for form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    const newErrors = {} as FormErrors;
    Object.keys(formData).forEach((key) => {
      if (!formData[key as keyof FormData]) {
        newErrors[key as keyof FormErrors] = "This field is required";
      }
    });

    // Validate contact number (check if it's a valid number)
    if (isNaN(Number(formData.contactNumber))) {
      newErrors.contactNumber = "Please enter a valid number";
    }
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // If there are errors, update state and return
    if (Object.values(newErrors).some((error) => error !== "")) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    // Simulate form submission (you can replace this with actual form submission logic)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="max-w-lg mx-auto p-6  rounded">
      {submitted ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
          <p className="mb-4">You have successfuly signed up!</p>
          <Button btnText="Continue" btnRoute="/" btnColor="bg-yellow-300" />
        </div>
      ) : (
        <div>
          <div className="text-center mb-8">
            <p className="text-2xl mt-6 text-neutral-700 ">
              Sign up in no time
            </p>
            <small className="text-sm text-neutral-500">
              Lorem ipsum
              <span className="text-teal-700 "> adipisicing elit.</span>
            </small>
          </div>

          <form onSubmit={handleSubmit}>
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-4">
              <Input
                label="First Name"
                value={formData.firstName}
                onChange={handleChange}
                error={errors.firstName}
                type="text"
                name="firstName"
                placeholder="Enter your first name"
              />
              <Input
                label="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                error={errors.lastName}
                type="text"
                name="lastName"
                placeholder="Enter your last name"
              />
            </div>

            <Input
              label="Contact Number"
              value={formData.contactNumber}
              onChange={handleChange}
              error={errors.contactNumber}
              type="text"
              name="contactNumber"
              placeholder="Enter your contact number"
            />
            <Input
              label="Email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              type="email"
              name="email"
              placeholder="Enter your email"
            />

            <div className="mb-4 relative">
              <label className="block text-gray-700 font-bold mb-2 text-sm">
                Gender
              </label>
              <div className="flex flex-col gap-3  sm:flex-row justify-between">
                <RadioButton
                  label="Male"
                  value="male"
                  onChange={handleChange}
                  type="radio"
                  name="gender"
                  checked={formData.gender === "male"}
                />
                <RadioButton
                  label="Female"
                  value="female"
                  onChange={handleChange}
                  type="radio"
                  name="gender"
                  checked={formData.gender === "female"}
                />
                <RadioButton
                  label="Rather not say"
                  value="ratherNotSay"
                  onChange={handleChange}
                  type="radio"
                  name="gender"
                  checked={formData.gender === "ratherNotSay"}
                />
              </div>
              <span className="text-red-300 text-xs absolute -bottom-5">
                {errors.gender}
              </span>
            </div>

            <div className="mb-8 mt-6 relative">
              <label className="flex items-center cursor-pointer text-gray-700 font-bold mb-2 text-sm ">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mr-2 h-4 w-4 "
                />
                Consent to be contacted
              </label>
              <span className="text-red-300 text-xs absolute -bottom-5">
                {errors.consent}
              </span>
            </div>

            <Button
              btnText="Submit"
              btnColor="bg-yellow-300"
              loading={loading}
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default SignupForm;
