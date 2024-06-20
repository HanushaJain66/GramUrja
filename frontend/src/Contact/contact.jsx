import React from 'react';

const Contact = () => {
    const submitForm = () => {
        setTimeout(() => {
            alert("Your form has been successfully submitted");
        }, 4000);
        document.getElementById("email").value = "";
        document.getElementById("comment").value = "";
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="flex flex-col md:flex-row w-full max-w-4xl">
                <div className="bg-red-800 p-6 md:w-1/3 rounded-t-md md:rounded-t-none md:rounded-l-md flex flex-col items-center justify-center">
                    <img
                        src="https://image.ibb.co/kUASdV/contact-image.png"
                        alt="contact"
                        className="w-24 mb-6"
                    />
                    <h2 className="text-white text-2xl">Contact Us</h2>
                </div>
                <div className="bg-orange-200 p-6 md:w-2/3 rounded-b-md md:rounded-b-none md:rounded-r-md">
                    <form className="space-y-6">
                        <div className="form-group flex flex-col">
                            <label className="font-semibold" htmlFor="fname">First Name:</label>
                            <input
                                type="text"
                                className="form-control p-2 border rounded"
                                id="fname"
                                placeholder="Enter First Name"
                                name="fname"
                            />
                        </div>
                        <div className="form-group flex flex-col">
                            <label className="font-semibold" htmlFor="lname">Last Name:</label>
                            <input
                                type="text"
                                className="form-control p-2 border rounded"
                                id="lname"
                                placeholder="Enter Last Name"
                                name="lname"
                            />
                        </div>
                        <div className="form-group flex flex-col">
                            <label className="font-semibold" htmlFor="email">Email:</label>
                            <input
                                type="email"
                                className="form-control p-2 border rounded"
                                id="email"
                                placeholder="Enter email"
                                name="email"
                            />
                        </div>
                        <div className="form-group flex flex-col">
                            <label className="font-semibold" htmlFor="comment">Comment:</label>
                            <textarea
                                className="form-control p-2 border rounded"
                                rows="5"
                                id="comment"
                                placeholder="Enter your comment"
                            ></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="bg-red-800 text-white font-semibold py-2 px-6 rounded"
                                onClick={submitForm}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;