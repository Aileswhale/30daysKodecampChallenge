import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <div className="nav flex items-center justify-between sticky top-0 z-[3] my-0 mx-[auto]  w-[100vw] h-[5rem] py-[1rem] px-[2rem] bg-[#1e1e1e] ">
        <div className="logo">logo</div>
        <div className="menu flex ">
          <div className="  m-[1rem] menu-list cursor-pointer ">Home</div>
          <div className="menu-list m-[1rem] cursor-pointer">About</div>
          <div className="menu-list m-[1rem] cursor-pointer">Portfolio</div>
          <div className=" menu-list m-[1rem] cursor-pointer">Clients</div>
        </div>
        <div className="contact rounded-[2rem]">
          <button className="bg-white text-black   rounded-[2rem] px-[1rem] py-[0.5rem]">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
