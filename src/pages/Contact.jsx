import { useRef } from 'react';
import Heading from '../components/Heading';
import emailjs from '@emailjs/browser';
const inputStyle =
  'border-primary focus:border-white w-60 py-0.5 px-2 focus:outline-none rounded-sm border bg-transparent';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    return;

    emailjs
      .sendForm('service_sojibiw', 'template_spabzzp', form.current, {
        publicKey: 'B6gcQ2lDYLr05dzrV',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
      <Heading title="Contact Me" />
      <div className=" flex h-screen w-full justify-center ">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="shadow-primary border-primary  mt-6 flex h-3/4 w-4/5 flex-col items-center justify-center gap-5 rounded-md border p-5 text-white shadow-lg lg:w-1/3"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Your name</label>
            <input type="text" name="user_name" className={inputStyle} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Your email</label>
            <input type="text" name="user_email" className={inputStyle} />
          </div>
          <div className="flex flex-col  gap-2">
            <label htmlFor="message">Message</label>
            <textarea name="message" className={`${inputStyle} h-32`} />
          </div>
          <button
            type="submit"
            value="send"
            className="btn border-primary hover:bg-primary  w-60 rounded-sm text-white"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
