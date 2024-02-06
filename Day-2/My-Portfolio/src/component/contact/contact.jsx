import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <section className="client"></section>

      <section id="contact" className="max-w-[95%] min-h-[90vh] w-[100vw] mx-[auto] my-0 text-center px-[1rem]">
        <h1 className="font-[600] text-[2rem] my-[1.5rem] "> Contact Me</h1>
        <p className="font-[200] mb-[1.2rem]">
          Please fill the form below to discusss any work opportunity
        </p>
        <form className="flex flex-col w-[70%] m-[auto] " action="">
          <input
            type="text"
            placeholder="Your name"
            className="rounded-[0.7rem] my-[0.5rem] bg-[#282828] py-[0.5rem] px-[1rem] outline-none text-white"
          />
          <input
            type="email"
            placeholder="Your email"
            className="rounded-[0.7rem] my-[0.5rem] bg-[#282828] py-[0.5rem] px-[1rem] outline-none text-white "
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your message"
            className=" rounded-[0.7rem] my-[0.5rem] bg-[#282828] py-[0.5rem] px-[1rem] outline-none text-white "
          ></textarea>
        </form>
        <button
          type="submit"
          value="send"
          className="btn"
        >
          Submit
        </button>
        <div className="flex  justify-center items-center gap-[1rem] pt-[2rem">
            <FaFacebook className="text-[2.5rem]  text-[#847b64]"/>
          <FaInstagram className="text-[2.5rem]  text-[#847b64]  " />
          <FaWhatsapp className="text-[2.5rem]  text-[#847b64]  " />
          <FaLinkedin className="text-[2.5rem]  text-[#847b64]" />
          <FaTwitter className="text-[2.5rem]  text-[#847b64]  " />
        </div>
      </section>
    </>
  );
};

export default Contact;
