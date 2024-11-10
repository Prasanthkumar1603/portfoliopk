// src/components/Certifications.js
import React from 'react';

const Certifications = () => {
    const certifications = [
        {
            _id: '1',
            title: 'MERN Stack Web Development Internship',
            issuer: 'Why Global Services',
            dateIssued: 'September 2024',
            description: 'Completed an internship focused on MERN stack web development, including MongoDB, Express, React, and Node.js.',
        },
        {
            _id: '2',
            title: 'Gen AI',
            issuer: 'Guvi',
            dateIssued: 'Sep 2024',
            description: 'A course focusing on artificial intelligence, Machine Learning, Build Image Recognition Model - Exercise And Build RAG Applicatoin .',
        },

        {
            _id: '3',
            title: 'UI & UX Design Course Completion',
            issuer: 'Guvi',
            dateIssued: 'April 2024',
            description: 'Completed a comprehensive UI/UX design course covering design thinking, user research, and prototyping.',
        },
        {
            _id: '4',
            title: 'Python Course Completion',
            issuer: 'Guvi',
            dateIssued: 'August 2023',
            description: 'Completed a Python programming course with a focus on foundational concepts and data structures.',
        },
        {
            _id: '5',
            title: 'AI for India 2.0 Course Completion',
            issuer: 'Guvi',
            dateIssued: 'August 2023',
            description: 'A course focusing on artificial intelligence fundamentals and practical applications in the Indian context.',
        },
        {
            _id: '6',
            title: 'Game Development with Pygame Course Completion',
            issuer: 'Guvi',
            dateIssued: 'August 2023',
            description: 'Completed a course on game development using Pygame, learning about game logic, graphics, and animation.',
        },
        {
            _id: '7',
            title: 'One Day National Level Workshop On Problem Solving and Programming Techniques',
            issuer: 'Ananda College Devakottai',
            dateIssued: 'March 2022',
            description: 'One day national level workshop on Problem Solving and Programming Techniques Organized by  Department of Computer Studies ANANDA COLLEGE , DEVAKOTTAI , 30th March 2022.'
        },
        {
            _id: '8',
            title: 'One Day State Level  Seminar On Cloud Computing and Network Security',
            issuer: 'Sree Sevugan Annamalai College Devakottai',
            dateIssued: 'March 2020',
            description: 'One day state seminar on cloud computing and Network Security organized by the the Department of Computer Science , Sree Sevugan Annamalai College, Devakottai held on 04 March 2020.'
        }

    ];

    return (
        <div className="bg-gray-100 py-10">
            <h2 className="text-3xl font-semibold text-center mb-8">Certifications</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert) => (
                    <div
                        key={cert._id}
                        className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:shadow-2xl hover:scale-105"
                    >
                        <h3 className="text-xl font-bold">{cert.title}</h3>
                        <p className="text-gray-600">Issued by: {cert.issuer}</p>
                        <p className="text-gray-500">Date Issued: {cert.dateIssued}</p>
                        <p className="mt-2">{cert.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
