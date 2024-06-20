import React from 'react';
import img1 from '../images/1.jpeg';

import img2 from '../images/2.jpeg';

import img3 from '../images/3.jpeg';

import img4 from '../images/4.jpeg';

import img5 from '../images/5.jpeg';

import img6 from '../images/6.jpeg';

import img7 from '../images/7.jpeg';

import img8 from '../images/8.jpeg';

import img9 from '../images/9.jpeg';

const teamMembers = [
    {
        name: "Dadasaheb Gaikwad",
        title: "Executive Director",
        image: img1
    },
    {
        name: "Asaram Hatagale",
        title: "Director, Mobilization",
        image: img2
    },
    {
        name: "Pramod Jadhav",
        title: "DIRECTOR, NETWORKING",
        image: img3
    },
    {
        name: "Vaijnath Ingole",
        title: "DIRECTOR, COMMUNITY ENGAGEMENT",
        image: img4
    },
    {
        name: "Prerana Shilwant",
        title: "PROJECT COORDINATOR",
        image: img5
    },
    {
        name: "Pramod Joshi",
        title: "DIRECTOR, FINANCE",
        image: img6
    },
    {
        name: "Abhishek Rakhecha",
        title: "DIRECTOR, INFORMATION TECHNOLOGY",
        image: img7
    },
    {
        name: "Dattatray Shingade",
        title: "CONTENT SPECIALIST",
        image: img8
    },
    {
        name: "Deepak Pawal",
        title: "DIRECTOR",
        image: img9
    }
];

const About = () => {
    return (
        <div className="font-sans m-0 p-0 text-center mt-[100px]">
            <header>
                <div className="text-2xl my-5 text-red-900 font-bold">MEET THE TEAM</div>
            </header>
            <article>
                <div className="mx-auto w-4/5 text-center leading-relaxed text-gray-500">
                    Most of our team members are coming from the Chief Minister’s rural development fellowship program. They have got rich experience in rural developmental space with their immersive learning experience with villages.
                    Mr. Dadasaheb Gaikwad, who is the propagator of this idea of launching non-profit organization, is from a farmer's family. He lived and experienced the lives of people from rural communities. After completion of his master’s in business studies, he worked in the corporate sector for more than 5 years. However, he was interested in working with the rural communities and particularly on problems being faced by farmers, youth, women and children from rural areas. He joined the CM fellowship program and got grassroots level experience of working with government machinery, end beneficiaries and other stakeholders.
                    He has got various fellowship awards and opportunities to learn and develop his leadership skills. He was part of IATSS Japan fellowship program, Vision India Fellowship Program, Anubhav Lecture Series, a flagship series by the Harris School of Public Policy of the University of Chicago in India, Edumentee (by Mantra for Change) 2020, Changeloomer 2020, TFIx entrepreneur and others.
                </div>
            </article>
            <div className="flex flex-wrap justify-center my-5 mx-auto w-4/5">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-white border border-gray-300 rounded-lg m-2 p-5 flex-1 min-w-[calc(33%-2rem)] shadow-md transition-transform transform hover:translate-y-[-5px] text-left">
                        <img src={member.image} alt={member.name} className="w-full h-auto rounded mb-2" />
                        <h3 className="text-gray-900">{member.name}</h3>
                        <p className="text-gray-600">{member.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;