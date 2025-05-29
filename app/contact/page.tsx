"use client";

import React, { FormEvent, useRef, useState } from "react";
import Heading from "@/components/animation/heading";
import Paragraph from "@/components/animation/paragraph";
import Container from "@/components/container";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
          form.current,
          {
            publicKey: process.env.NEXT_PUBLIC_PUBLIC_ID as string,
          },
        )
        .then(
          () => {
            setSuccess(true);
            form.current?.reset();
          },
          () => {
            setError(true);
            console.log(error);
          },
        );
    } else {
      setError(true);
    }
  };

  return (
    <Container className="flex w-full flex-col justify-center">
      <div className="mt-16 max-w-lg items-start rounded-xl bg-white shadow-md sm:mt-0 dark:bg-neutral-900">
        <Heading>Contact Us</Heading>
        <Paragraph delay={0.1}>
          We&apos;d love to hear from you. Fill out the form and we&apos;ll get
          back to you soon.
        </Paragraph>
      </div>
      <div className="mx-auto w-full max-w-md pt-20 pb-40">
        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <div>
            <label className="mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Full Name
            </label>
            <input
              name="user_name"
              type="text"
              className="text-paragraph w-full rounded-md border border-neutral-300 bg-neutral-50 px-4 py-2 focus:ring-2 focus:ring-neutral-400 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Email Address
            </label>
            <input
              name="user_email"
              type="email"
              className="text-paragraph w-full rounded-md border border-neutral-300 bg-neutral-50 px-4 py-2 focus:ring-2 focus:ring-neutral-400 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900"
              placeholder="johndoe@email.com"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Message
            </label>
            <textarea
              name="user_message"
              rows={4}
              className="text-paragraph w-full rounded-md border border-neutral-300 bg-neutral-900 px-4 py-2 focus:ring-2 focus:ring-neutral-400 focus:outline-none dark:border-neutral-700"
              placeholder="Your message"
            />
          </div>
          <button
            type="submit"
            className="shadow-background w-full rounded-md border bg-gradient-to-br from-neutral-800 to-neutral-900 px-4 py-2 text-sm font-medium text-neutral-700 transition dark:text-neutral-200 dark:hover:bg-neutral-200"
          >
            Send Message
          </button>
          {success && (
            <span className="font-semibold text-green-600">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="font-semibold text-red-600">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </Container>
  );
};

export default Contact;
