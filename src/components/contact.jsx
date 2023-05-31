import React, { useState } from "react";
export const Contact = () => {
  const formData = {
    name: '',
    email: '',
    message: '',
  }

  const [formDetails, setFormDetails] = useState(formData)
  const [buttonText, setButtonText] = useState('send')
  const [status, setStatus] = useState({})

    
    const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("https://portfolio-4978.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formData);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }

  };
  return (
    <section id="contact" className="bg-white dark:bg-black lg:p-20 font-burtons">
      <div className="p-20 lg:py-16 px-4 mx-auto max-w-screen-md border">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Let's Connect
        </h2>
        <form action="#" className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              defaultvalue={formData.name}
              onChange={(e) => onFormUpdate('name', e.target.value)}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Baba Yaga"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              defaultvalue={formData.email}
              onChange={(e) => onFormUpdate('email', e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="BabaYaga@gmail.com"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              defaultValue={formData.message}
              onChange={(e) => onFormUpdate('message', e.target.value)}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-orange-400 sm:w-fit hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};
