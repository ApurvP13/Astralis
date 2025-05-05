import React, { useState } from "react";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholder-and-text";

const Contact = () => {
  const [showToast, setShowToast] = useState(false);

  const triggerToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  const placeholders = [
    "Your Number",
    "Your Email",
    "Your Passport Number",
    "Your Instagram Id",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
    triggerToast();
  };

  return (
    <div
      id="contact"
      className=" bg-[url('./images/star-bg.png')] bg-cover font-display flex gap-7 flex-col items-center p-6 md:p-10 mb-12 mt-8 md:mt-10"
    >
      <h2 className="text-gradient text-xl md:text-3xl ">
        Book Your Dream Trip Now! <span className="text-white">📞</span>
      </h2>
      <p className="text-lg max-w-xl md:text-xl text-slate-400 italic tracking-wide text-center opacity-30">
        Please provide your preferred contact method (email, phone, or social
        media) and our team will respond within 12 business hours.
      </p>

      <div className="flex flex-col items-center w-3/4 justify-between">
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
      {showToast && (
        <div className="fixed bg-gradient-to-br from-slate-300  to-slate-900 animate-toast text-slate-300 bottom-6 right-6 italic tracking-wider font-display px-4 py-2 rounded-lg ">
          We will reach out soon 🥂
        </div>
      )}
    </div>
  );
};

export default Contact;
