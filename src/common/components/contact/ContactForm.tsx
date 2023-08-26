import { motion } from "framer-motion";
import { fadeIn } from "src/variants";
import Buttons from "../buttons";
import { contactData } from "@/data/data";
import Inputs from "../inputs";
import Textareas from "../textareas";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactForm = () => {
  const form: any = useRef();

  const handleSubmit = (e: any) => {
    form.current.value = "";
    console.log(form.current.value);
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p0itr47",
        "template_fww8f71",
        form.current,
        "b3JA5hyW9InYOLvL6"
      )
      .then(
        (result: any) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <motion.form
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      animate="show"
      className="mx-auto flex w-full flex-1 flex-col gap-6"
      ref={form}
      onSubmit={sendEmail}
    >
      {/* input group */}
      <div className="flex w-full gap-x-6">
        <Inputs
          type="text"
          placeholder="name"
          className="input"
          name="user_name"
          required
        />
        <Inputs
          type="text"
          placeholder="email"
          className="input"
          name="user_email"
          required
        />
      </div>
      <Inputs
        type="text"
        placeholder="subject"
        className="input"
        name="user_subject"
        required
      />
      <Textareas
        placeholder="message"
        className="textarea"
        name="message"
        required
      />
      {contactData.map((contact, index) => {
        return (
          <Buttons
            key={index}
            btnicon={contact.icon}
            btntext={contact.text}
            onClick={handleSubmit}
            type="submit"
            value="Send"
          />
        );
      })}
    </motion.form>
  );
};

export default ContactForm;
