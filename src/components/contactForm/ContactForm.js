import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

export default function ContactForm({ theme }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        phone: "", // Honeypot field
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("");

        // Check honeypot - if filled, it's a bot
        if (formData.phone) {
            setSubmitStatus("error");
            setIsSubmitting(false);
            return;
        }

        try {
            // Remove honeypot field before sending
            const { phone, ...dataToSend } = formData;
            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                dataToSend,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );
            setSubmitStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "", phone: "" });
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-form-container">
            <h2 className="contact-form-title" style={{ color: theme.text }}>
                Send me a message
            </h2>

            {submitStatus === "success" && (
                <div className="success-message" style={{ color: theme.imageHighlight }}>
                    Thank you! Your message has been sent successfully.
                </div>
            )}

            {submitStatus === "error" && (
                <div className="error-message" style={{ color: "#ff6b6b" }}>
                    Sorry, there was an error sending your message. Please try again.
                    <br />
                    <small style={{ fontSize: "14px", marginTop: "8px", display: "block" }}>
                        Alternatively, you can reach me directly at{" "}
                        <a href="mailto:kaustav.sarkar.work@gmail.com" style={{ color: "#ff6b6b", textDecoration: "underline" }}>
                            kaustav.sarkar.work@gmail.com
                        </a>
                    </small>
                </div>
            )}

            <form
                name="contact"
                onSubmit={handleSubmit}
                className="contact-form"
            >
                {/* Honeypot field - hidden from users */}
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    tabIndex="-1"
                    autoComplete="off"
                    style={{ display: "none" }}
                />

                <div className="form-group">
                    <label htmlFor="name" style={{ color: theme.text }}>
                        Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                        style={{
                            borderColor: theme.text,
                            backgroundColor: theme.body,
                            color: theme.text,
                        }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email" style={{ color: theme.text }}>
                        Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                        style={{
                            borderColor: theme.text,
                            backgroundColor: theme.body,
                            color: theme.text,
                        }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="subject" style={{ color: theme.text }}>
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-input"
                        style={{
                            borderColor: theme.text,
                            backgroundColor: theme.body,
                            color: theme.text,
                        }}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message" style={{ color: theme.text }}>
                        Message *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="form-textarea"
                        style={{
                            borderColor: theme.text,
                            backgroundColor: theme.body,
                            color: theme.text,
                        }}
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="submit-button"
                    style={{
                        backgroundColor: theme.imageHighlight,
                        color: theme.body,
                    }}
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>
            </form>

            <div style={{
                textAlign: "center",
                marginTop: "20px",
                fontSize: "14px",
                color: theme.secondaryText
            }}>
                You can also reach me directly at{" "}
                <a
                    href="mailto:kaustav.sarkar.work@gmail.com"
                    style={{
                        color: theme.imageHighlight,
                        textDecoration: "none",
                        fontWeight: "500"
                    }}
                >
                    kaustav.sarkar.work@gmail.com
                </a>
            </div>
        </div>
    );
} 