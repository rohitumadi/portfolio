import { useRef, useState } from 'react';
import Heading from '../components/Heading';
import emailjs from '@emailjs/browser';
import Button from '../components/Button';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
const inputStyle =
  'border-primary focus:border-white w-60 py-0.5 px-2 focus:outline-none rounded-sm border bg-transparent';

function Contact() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const [isSending, setIsSending] = useState(false);
  const form = useRef();

  const sendEmail = (data) => {
    setIsSending(true);
    emailjs
      .sendForm('service_sojibiw', 'template_spabzzp', form.current, {
        publicKey: 'B6gcQ2lDYLr05dzrV',
      })
      .then(
        () => {
          toast.success('Message sent successfully');
        },
        (error) => {
          toast.error('There was an error sending the message', error.text);
        },
      )
      .finally(() => setIsSending(false));
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
          <div className="flex flex-col items-center  gap-2">
            <input
              placeholder="Your name"
              type="text"
              {...register('name', {
                required: 'This field is required',
                pattern: {
                  value: /^[a-zA-Z]+( [a-zA-Z]+)?$/,
                  message:
                    'Only Alphabets allowed and no trailing spaces allowed',
                },

                minLength: {
                  value: 3,
                  message: 'Name must be at least 3 characters',
                },
                maxLength: {
                  value: 20,
                  message: 'Max characters reached',
                },
              })}
              name="name"
              className={inputStyle}
            />
            {errors?.name?.message && (
              <p className="w-60 text-wrap text-sm text-red-600">
                {errors.name.message}
              </p>
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
                maxLength: {
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
          <Button width="w-60">
            <svg
              className="... mr-3 h-5 w-5 animate-spin "
              viewBox="0 0 24 24"
            ></svg>
            {isSending ? 'Sending' : 'Send'}
          </Button>
        </form>
      </div>
    </>
  );
}

export default Contact;
