import { useRef } from 'react';
import Heading from '../components/Heading';
import emailjs from '@emailjs/browser';
import Button from '../components/Button';
import { useForm } from 'react-hook-form';
const inputStyle =
  'border-primary focus:border-white w-60 py-0.5 px-2 focus:outline-none rounded-sm border bg-transparent';

function Contact() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const form = useRef();

  const sendEmail = (data) => {
    console.log('data', data);

    // emailjs
    //   .sendForm('service_sojibiw', 'template_spabzzp', form.current, {
    //     publicKey: 'B6gcQ2lDYLr05dzrV',
    //   })
    //   .then(
    //     () => {
    //       console.log('SUCCESS!');
    //     },
    //     (error) => {
    //       console.log('FAILED...', error.text);
    //     },
    //   );
  };
  return (
    <>
      <Heading title="Contact Me" />
      <div className=" flex h-screen w-full justify-center ">
        <form
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
          className="shadow-primary border-primary mt-4  flex h-3/4 w-4/5 flex-col items-center justify-center gap-5 rounded-md border bg-transparent p-5 text-white shadow-lg lg:w-1/3"
        >
          <div className="flex flex-col gap-2">
            <input
              placeholder="Your name"
              type="text"
              {...register('name', {
                required: 'This field is required',
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: 'Only Alphabetic characters allowed',
                },
                minLength: {
                  value: 3,
                  message: 'Name must be at least 3 characters',
                },
              })}
              name="name"
              className={inputStyle}
            />
            {errors?.name?.message && (
              <p className="text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div className="relative flex flex-col gap-2">
            <input
              placeholder="Your email"
              {...register('email', {
                required: 'This field is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email address',
                },
              })}
              type="email"
              name="email"
              className={inputStyle}
            />

            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col  gap-2">
            <textarea
              {...register('message', {
                required: 'This field is required',
                minLength: {
                  value: 200,
                  message: 'Max characters reached',
                },
              })}
              placeholder="Message"
              name="message"
              className={`${inputStyle} h-32`}
            />
            {errors.message && (
              <p className="text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>
          {/* <button
            type="submit"
            value="send"
            className="btn border-primary hover:bg-primary  w-60 rounded-sm text-white"
          >
            Send
          </button> */}
          <Button width="w-60">Send</Button>
        </form>
      </div>
    </>
  );
}

export default Contact;
