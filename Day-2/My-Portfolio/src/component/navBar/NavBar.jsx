// import { Link } from "react-scroll";
import "./NavBar.css";

const NavBar = () => {
  const contactScroll = () => {
    return document
      .getElementById("contact")
      .scrollIntoView({ behavior: "smooth" });
  };
  const homeScroll = () => {
    return document
      .getElementById("intro")
      .scrollIntoView({ behavior: "smooth" });
  };
  const aboutScroll = () => {
    return document
      .getElementById("about")
      .scrollIntoView({ behavior: "smooth" });
  };
  const portfolioScroll = () => {
    return (document
      .getElementById("portfolio")
      .scrollIntoView({ behavior: "smooth" }))
  };
  const clientScroll = () => {
    return alert("Contact me to be added to my clients list! 😃");
  };

  return (
    <div>
      <div className="nav flex items-center justify-between sticky top-0 z-[3] my-0 mx-[auto]  w-[100vw] h-[5rem] py-[1rem] px-[2rem] bg-[#1e1e1e] ">
        <div className="logo">logo</div>
        <div className="menu flex ">
         
          <div
            className="  m-[1rem] menu-list cursor-pointer "
            onClick={homeScroll}
          >
            Home
          </div>
          
          <div
            className="menu-list m-[1rem] cursor-pointer"
            onClick={aboutScroll}
          >
            About
          </div>
          
          <div
            className="menu-list m-[1rem] cursor-pointer"
            onClick={portfolioScroll}
          >
            Portfolio
          </div>
          
          <div
            className=" menu-list m-[1rem] cursor-pointer"
            onClick={clientScroll}
          >
            Clients
          </div>
        </div>

        <div className="contact rounded-[2rem]">
          <button
            className="bg-white text-black   rounded-[2rem] px-[1rem] py-[0.5rem]"
            onClick={contactScroll}
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
