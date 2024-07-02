"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { sendMail } from "@/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const postSchema = yup.object().shape({
    name: yup.string().required("İsim gerekli"),
    surname: yup.string().required("Soyisim gerekli"),
    email: yup
      .string()
      .required("E-posta gerekli")
      .email("Geçersiz e-posta adresi"),
    message: yup.string().required("Mesaj gerekli"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(postSchema),
  });

  const onSubmit = async (e) => {
    e.preventDefault();



    try {
      const response = await sendMail(formData);
      console.log("Gönderildi", response);
      setFormData({
        name: "",
        surname: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    }
  };



  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1
        className="text-5xl font-bold mb-8 text-center"
        style={{ color: "#424242" }}
      >
        Contact Me!
      </h1>
      <div className="bg-white shadow-xl rounded-lg w-full max-w-4xl p-12 border-t-8 border-[#54B4D3]">
        <form onSubmit={onSubmit}>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                className={`mt-1 p-3 border rounded w-full focus:ring-2 focus:ring-[#1565D8] ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your name"
                onChange={handleChange}
                value={formData.name}
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">
                Surname
              </label>
              <input
                type="text"
                name="surname"
                className={`mt-1 p-3 border rounded w-full focus:ring-2 focus:ring-[#1565D8] ${
                  errors.surname ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your surname"
                onChange={handleChange}
                value={formData.surname}
              />
              {errors.surname && (
                <span className="text-red-500">{errors.surname.message}</span>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                className={`mt-1 p-3 border rounded w-full focus:ring-2 focus:ring-[#1565D8] ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your email"
                onChange={handleChange}
                value={formData.email}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">
                Message
              </label>
              <textarea
                name="message"
                className={`mt-1 p-3 border rounded w-full focus:ring-2 focus:ring-[#1565D8] ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                rows="6"
                placeholder="Enter your message here"
                onChange={handleChange}
                value={formData.message}
              ></textarea>
              {errors.message && (
                <span className="text-red-500">{errors.message.message}</span>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#54B4D3] text-white p-4 rounded mt-4 hover:bg-[#259bc3] transition-colors duration-200 font-semibold"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
