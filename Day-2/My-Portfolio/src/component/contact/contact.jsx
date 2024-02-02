import React from 'react'

const Contact = () => {
  return (
    <>
      <section className="client"></section>

      <section className="contact max-w-[95%] min-h-[90vh] w-[100vw] flex flex-col items-center justify-center mx-[auto] my-0 text-center px-[1rem]">
        <h1> Contact Me</h1>
        <p>Please fill the form below to discusss any work opportunity</p>
        <form className="flex flex-col" action="">
          <input type="text" placeholder="Your name" className="border" />
          <input type="email" placeholder="Your email" className="border" />
          <textarea
            name="message"
            rows="5"
            placeholder="Your message"
            className="border"
          ></textarea>
          <button type="submit" value="send">
            Submit
          </button>
          {/* <div className='links'>
                      <img src={k } alt="icons" className='links' />
                      <img src={k } alt="icons" className='links' />
                      <img src={m } alt="icons" className='links' />
                      <img src={ jk} alt="icons" className='links' />
                      
                  </div> */}
        </form>
      </section>
    </>
  );
}

export default Contact