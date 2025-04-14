'use client';
import { useState } from 'react';
import Image from 'next/image';
import YogaTrainer from "@/public/about/11354577.webp";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contact: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false); // Spinner state

    const validateField = (name, value) => {
        switch (name) {
            case 'fullName':
                if (!value.trim()) return 'Full Name is required';
                break;
            case 'email':
                if (!value.trim()) return 'Email is required';
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address';
                break;
            case 'contact':
                if (!value.trim()) return 'Mobile Number is required';
                if (!/^[0-9]{10}$/.test(value)) return 'Enter a valid 10-digit mobile number';
                break;
            case 'message':
                if (!value.trim()) return 'Message is required';
                break;
        }
        return '';
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        const error = validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    const isFormValid = () => {
        return Object.values(errors).every((err) => !err) &&
            Object.values(formData).every((field) => field.trim() !== '');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isFormValid()) {
            setIsSubmitting(true);
            try {
                const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

                const result = await res.json();
                if (result.success) {
                    alert('Form submitted and email sent!');
                    setFormData({ fullName: '', email: '', contact: '', message: '' });
                    setErrors({});
                } else {
                    alert('Failed to send email: ' + result.error);
                }
            } catch (err) {
                alert('Server error. Please try again later.');
                console.error(err);
            } finally {
                setIsSubmitting(false);
            }
        } else {
            alert('Please fix validation errors before submitting.');
        }
    };

    return (
        <section id='contact' className="bg-orange-300 flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
            <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-center gap-10">
                {/* Left - Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <Image
                        src={YogaTrainer}
                        alt="Yoga Trainer"
                        width={400}
                        height={400}
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] object-cover"
                        priority
                        quality={75}
                    />
                </div>

                {/* Right - Form */}
                <div className="w-full lg:w-1/2 px-4">
                    <div className="bg-orange-500 rounded-lg shadow-xl p-8 sm:p-8 md:p-10 w-full max-w-lg mx-auto relative">
                        <div className="absolute -left-5 top-5 w-10 h-10 md:w-12 md:h-12 bg-orange-500 rounded-full shadow-[10px_0px_10px_rgba(0,0,0,0.5)]" />
                        <form onSubmit={handleSubmit} className="space-y-4 text-white">
                            <div>
                                <label className="font-semibold">Full Name :</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Enter Your Full Name..."
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-3 rounded-md bg-orange-300 outline-none font-bold text-black"
                                />
                                {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
                            </div>
                            <div>
                                <label className="font-semibold">Email Address :</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email Address..."
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-3 rounded-md bg-orange-300 outline-none font-bold text-black"
                                />
                                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                            </div>
                            <div>
                                <label className="font-semibold">Mobile Number :</label>
                                <input
                                    type="text"
                                    name="contact"
                                    placeholder="Enter Your Mobile Number..."
                                    value={formData.contact}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-3 rounded-md bg-orange-300 outline-none font-bold text-black"
                                />
                                {errors.contact && <p className="text-red-600 text-sm mt-1">{errors.contact}</p>}
                            </div>
                            <div>
                                <label className="font-semibold">Message :</label>
                                <textarea
                                    name="message"
                                    placeholder="Enter Your Message..."
                                    rows="3"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-3 rounded-md bg-orange-300 outline-none font-bold text-black"
                                />
                                {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-yellow-500 text-white px-6 py-3 rounded-md hover:opacity-90 transition flex justify-center items-center gap-2 cursor-pointer"
                                disabled={!isFormValid() || isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                                        </svg>
                                        Submitting...
                                    </>
                                ) : (
                                    'Submit'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
