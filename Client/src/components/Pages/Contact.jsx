import { useState } from 'react';
import location from '/icons/location.png';
import mail from '/icons/mail.png';
import phone from '/icons/Mobile.png';
import { alert } from '../helper';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [btnTxt, setBtnTxt] = useState('SEND MESSAGE');

  const handleInputChange = function (e) {
    const { name, value } = e.target;

    setFormData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleFormSubmit = async function (e) {
    e.preventDefault();

    // validate to check if the input fields were filled
    const isNotValid = Object.values(formData).includes('');

    if (isNotValid) return;

    try {
      setBtnTxt('SENDING...');
      const res = await fetch('http://localhost:8080/api/send_mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log('data', data);

      if (res.status === 200) {
        alert('success', 'Message sent successfully');

        setFormData({
          fullName: '',
          email: '',
          subject: '',
          message: '',
        });
      }
    } catch (err) {
      console.log(err);
      alert('error', 'Something went wrong');
    } finally {
      setBtnTxt('SEND MESSAGE');
    }
  };

  return (
    <section id="contact" className="contact mt-32 flex flex-col-reverse lg:flex-row items-start gap-6">
      <section className="left w-full">
        <h2 className="font-bold text-hdTxt text-2xl text-center lg:text-left">Contact Me</h2>

        <form className="mt-3 bg-white p-6" onSubmit={handleFormSubmit}>
          <div className="fullName mb-8">
            <label htmlFor="fullName" className="block">
              Your Full Name (Required)
            </label>
            <input type="text" className="outline-none mt-2 bg-modalBg px-3 py-2 rounded-md w-full" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
          </div>

          <div className="email mb-8">
            <label htmlFor="email" className="block">
              Your Email (Required)
            </label>
            <input type="email" className="outline-none mt-2 bg-modalBg px-3 py-2 rounded-md w-full" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>

          <div className="subject mb-8">
            <label htmlFor="subject" className="block">
              Subject
            </label>
            <input type="text" className="outline-none mt-2 bg-modalBg px-3 py-2 rounded-md w-full" name="subject" value={formData.subject} onChange={handleInputChange} required />
          </div>

          <div className="message mb-8">
            <label htmlFor="message" className="block">
              Message
            </label>
            <textarea cols="30" rows="10" className="outline-none mt-2 bg-modalBg px-3 py-2 rounded-md w-full" name="message" value={formData.message} onChange={handleInputChange} required></textarea>
          </div>

          <button className="bg-cta px-3 py-1">{btnTxt}</button>
        </form>
      </section>

      <section className="right w-full lg:w-[60%] mx-auto lg:mx-0">
        <h2 className="font-bold text-hdTxt text-2xl text-center lg:text-left mt-6 lg:mt-0">Contact Information</h2>
        <div className="nationality__info bg-white px-6 py-3 mt-3 mb-6">
          <div className="circle rounded-full bg-cta mb-3 w-8 h-8 flex items-center justify-center mx-auto">
            <img src={location} alt="location icon" />
          </div>

          <div className="country flex items-center justify-between">
            <h3 className="text-hdTxt font-bold">Country:</h3>
            <p className="text-txt">Nigeria</p>
          </div>

          <div className="city my-3 flex items-center justify-between">
            <h3 className="text-hdTxt font-bold">City:</h3>
            <p className="text-txt">Lagos</p>
          </div>

          <div className="street flex items-center justify-between">
            <h3 className="text-hdTxt font-bold">Street:</h3>
            <p className="text-txt">Lagos, Nigeria</p>
          </div>
        </div>

        <div className="mail__info bg-white px-6 py-3 mt-3 mb-6">
          <div className="circle rounded-full bg-cta mb-3 w-8 h-8 flex items-center justify-center mx-auto">
            <img src={mail} alt="mail icon" />
          </div>

          <div className="country flex items-center justify-between">
            <h3 className="text-hdTxt font-bold mr-4 lg:mr-0">Email:</h3>
            <p className="text-txt">officialayo540@gmail.com</p>
          </div>

          <div className="city my-3 flex items-center justify-between">
            <h3 className="text-hdTxt font-bold">Twitter:</h3>
            <p className="text-txt">@officialayo540</p>
          </div>

          <div className="street flex items-center justify-between">
            <h3 className="text-hdTxt font-bold">Facebook:</h3>
            <p className="text-txt">nil</p>
          </div>
        </div>

        <div className="support__info bg-white px-6 py-3 mt-3 mb-6">
          <div className="circle rounded-full bg-cta mb-3 w-8 h-8 flex items-center justify-center mx-auto">
            <img src={phone} alt="mobile icon" />
          </div>

          <div className="country flex items-center justify-between">
            <h3 className="text-hdTxt font-bold">Personal:</h3>
            <p className="text-txt">+2347089111679</p>
          </div>

          <div className="city my-3 flex items-center justify-between">
            <h3 className="text-hdTxt font-bold">Office:</h3>
            <p className="text-txt">nil</p>
          </div>

          <div className="street flex items-center justify-between">
            <h3 className="text-hdTxt font-bold">Support:</h3>
            <p className="text-txt">nil</p>
          </div>
        </div>
      </section>
    </section>
  );
}
