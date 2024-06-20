import React, { useState } from 'react';
import './App.css'; // Import your custom styles
import Hero from '../img/home2.jpg'
import Hero2 from '../img/GH-Past-Projects.png'
import problem from '../img/problem.png'
import about from '../img/about.jpg'
import { useNavigate } from 'react-router-dom';

const Intro  = ()=> {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false); // Define isOpen state and setIsOpen function

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle isOpen state
    };

    return (
        <div className='mt-[75px]'>
            <section className="hero text-center" aria-label="home" id="home">
                <ul classNamr="hero-slider" data-hero-slider>
                    <li className="slider-item active" data-hero-slider-item>
                        <div className="slider-bg">
                            <img src={Hero} width="1880" height="950" alt="" class="w-full h-full object-cover" />
                        </div>
                        <h1 className="label-2 section-subtitle slider-reveal" id="homehead">Developing
                            a better tomorrow.</h1>

                        <div className="homecon">
                            <p className="body-2 hero-text slider-reveal" id="hometext" >
                                GramUrja is a team of young rural development professionals coming from various professional backgrounds
                            </p>
                            <p className="body-2 hero-text slider-reveal" id="hometext">Volunteer now to make a difference!</p>
                        </div>
                        <a href="/contact" className="btn btn-primary slider-reveal" id="homebtn">
                            <span class="text text-1">Contact Us</span>
                        </a>
                    </li>
                </ul>
            </section>

            <div class="home py-4">
                <img src={problem} alt="Avatar" class="images2" />
            </div>
            <div class="text-center" id="homep1">
                <h4>‘’It takes a village to raise a child’’</h4>
            </div>
            <div class="home py-4">
                <img src={Hero2} alt="Avatar" class="images" />
            </div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col justify-between items-center md:flex-row md:space-x-12 lg:space-x-20">
                    <div className="text-center md:text-left" id="abtdiv">
                        <h1 className="text-4xl font-bold text-black" id="head">ABOUT US</h1>
                        <p className="text-xl text-black-100 mt-4">
                            Gramurja is a team of young rural development professionals coming from various professional backgrounds. It has three major areas of intervention, namely education, livelihood and governance, under GramHunar, GramUdyarn and GramConnect programs.
                        </p>
                        <p className="text-lg text-black-300 mt-4">
                            Coming from our deep, immersive experience in the rural development sector as Chief Minister's Rural Development Fellows, we started the organization in the year 2020.
                        </p>
                        <a href="/about" className="btn btn-primary mt-6 inline-flex items-center px-4 py-2 rounded-md focus:outline-none text-white font-bold" id="abtbtn1">
                            Know More
                        </a>
                    </div>
                    <div className="w-full">
                        <img className="rounded-lg shadow-md mx-auto" id="abtimg" src={about} alt="Gramurja Hero Image" />
                    </div>
                </div>
            </div>
            <div class="banner">
                <div class="text-button-container">
                    <h2>Ready to help us in our journey ?</h2>
                    <button onClick={()=>navigate('/student')}>Volunteer Now</button>
                </div>
            </div>
        </div>
    );
}

export default Intro;
