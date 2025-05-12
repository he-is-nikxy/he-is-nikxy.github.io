import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaRedoAlt, FaLaptopCode, FaBug } from "react-icons/fa";
import "./Services.css";

const services = [
    {
        icon: <FaCode className="service-icon text-blue-600" />,
        title: "Full Stack Web Application Development",
        description:
            "I develop scalable, robust, and modern full-stack web applications using the MERN stack. This includes everything from intuitive frontend interfaces to secure backend APIs, authentication systems, and database integration. Ideal for startups, SaaS products, admin dashboards, and custom web platforms.",
        highlights: ["React.js UI", "Node.js & Express REST APIs", "MongoDB integration", "JWT Authentication", "Responsive Design", "Deployment & Hosting"]
    },
    {
        icon: <FaRedoAlt className="service-icon text-green-600" />,
        title: "Website Redesign & Performance Optimization",
        description:
            "I help modernize your outdated website by revamping the UI/UX, improving speed, ensuring mobile responsiveness, and implementing SEO best practices. Perfect for businesses looking to improve engagement, conversions, and load times.",
        highlights: ["Modern UI/UX Refresh", "SEO Enhancement", "Faster Load Times", "Accessibility Improvements", "Responsive Layout"]
    },
    {
        icon: <FaLaptopCode className="service-icon text-purple-600" />,
        title: "Landing Pages & Business Websites",
        description:
            "From product showcases to company profiles, I build sleek, fast-loading landing pages and multi-page business websites tailored to your goals. These pages are optimized for conversions and brand consistency.",
        highlights: ["Custom Business Websites", "Landing Page Funnels", "Form Integrations", "Mobile Friendly Design", "Interactive UI Elements"]
    },
    {
        icon: <FaBug className="service-icon text-red-600" />,
        title: "Freelance Technical Consultation & Debugging",
        description:
            "Facing bugs, slow performance, or architectural confusion? I offer one-on-one consulting, code reviews, and debugging sessions to improve your existing MERN stack or React application.",
        highlights: ["1-on-1 Technical Support", "Code Debugging", "Performance Tuning", "Code Reviews", "Best Practice Recommendations"]
    }
];

const ServiceCard = ({ icon, title, description, highlights, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2, type: "spring" }}
        viewport={{ once: true }}
        className="service-card"
    >
        <div>{icon}</div>
        <h3>{title}</h3>
        <p className="service-description">{description}</p>
        <ul className="service-highlights">
            {highlights.map((point, idx) => (
                <li key={idx}>{point}</li>
            ))}
        </ul>
    </motion.div>
);

const Services = () => {
    return (
        <section id="services">
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="services-header"
            >
                <h2>My Services</h2>
                <p>
                    I provide a wide range of web development services that help businesses and individuals grow their digital presence and achieve their goals.
                </p>
            </motion.div>

            <div className="services-container">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Services;