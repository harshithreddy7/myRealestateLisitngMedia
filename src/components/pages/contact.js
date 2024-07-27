import React,{ useState} from "react";
import emailjs from 'emailjs-com';


const ContactUs = () => {
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[phone, setPhone] = useState('');
  const[message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Your email service credentials
      const serviceId = 'service_vazp8nu';
      const templateId = 'template_xkj6hxp';
      const userId = 'grht8fuXZoY9cFdhz';

      const templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'HR_REPP',
        from_phone: phone,
        message: message,
      };
  
      emailjs.send(serviceId, templateId, templateParams, userId)
        .then((response) => {
          console.log('Email sent successfully:', response);
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    };
  


  return (
    <div id="contact" className="bg-gray-100 w-full min-h-screen p-2 flex items-center">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-700 mb-8">
            If you have any questions or would like to schedule a consultation with us, please don't hesitate to contact us.
            </p>
            <ul className="text-lg text-gray-700">
              <li className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
                1808 Welker Dr, Van Alstyne, TX USA 75495
              </li>
              <li className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4.5 8-11.8c0-4.1-2.3-7.6-5.5-9.4"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s-8-4.5-8-11.8c0-4.1 2.3-7.6 5.5-9.4"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
                (602) 831-6462
              </li>
              <li className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4.5 8-11.8c0-4.1-2.3-7.6-5.5-9.4"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s-8-4.5-8-11.8c0-4.1 2.3-7.6 5.5-9.4"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
                tbd@gmail.com
              </li>
            </ul>
          </div>
          <div className="mt-12 sm:mt-16 md:mt-0">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="py-3 px-4 block w-full shadow-sm focus:ring-green-600 focus:border-green-600 border border-green-600 rounded-md"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="py-3 px-4 block w-full shadow-sm focus:ring-green-600 focus:border-green-600 border border-green-600 rounded-md"
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
              Phone
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="phone"
                id="phone"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="py-3 px-4 block w-full shadow-sm focus:ring-green-600 focus:border-green-600 border border-green-600 rounded-md"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">
              Message
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="py-3 px-4 block w-full shadow-sm focus:ring-green-600 focus:border-green-600 border border-green-600 rounded-md"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-green-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
            >
              Send Message
            </button>
          </div> 
        </form>
        </div>
      </div>
     </div>
    </div>
  );
};

export default ContactUs;