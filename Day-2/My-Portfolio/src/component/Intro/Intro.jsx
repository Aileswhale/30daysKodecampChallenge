import pic from "../../Asset/Images/Pic.png";
import Bag from "../../Asset/Images/hire.png";

const Intro = () => {
  return (
    <div>
      <section id="intro" className=" ">
        <div className="intro-writeup flex flex-col justify-center pt-[3rem] h-[100vh - 4rem] w-[100vw] max-w-[75rem] overflow-hidden my-0 mx-[5rem] relative ">
          <span className="font-[500]">Hello, </span>

          <span className="text-[2rem] font-[700] ">I'm </span>
          <span className="text-[2rem] text-[#efcf1b] font-[700] ">
            Emmanuel
          </span>

          <span className="text-[2rem] font-[700]">Website Designer</span>
          <p className="font-[300] pt-[1rem] w-[60%] md:w-[50%] lg:w-[40%]">
            I'm a versatile web developer and data analyst, weaving intricate
            code to bring ideas to life and unraveling insights from
            complex datasets.
          </p>
          <div>
            <button className="bg-white text-black  gap-[1rem] rounded-[2rem] px-[1.5rem] py-[1rem] flex items-center justify-center mt-[3rem]">
              <img className="w-[2rem] object-cover" src={Bag} alt="hire" />{" "}
              Hire Me
            </button>
          </div>
        </div>

        <img
          className=" absolute z-[-1] top-[5rem] right-0 object-cover h-[85vh]"
          src={pic}
          alt="profile-picture"
        />
      </section>
    </div>
  );
};

export default Intro;
