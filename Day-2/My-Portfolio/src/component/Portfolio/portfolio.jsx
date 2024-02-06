import calculator from "../../Asset/Images/calculator.jpg";
import country from "../../Asset/Images/country.jpg";
import Ecommerce from "../../Asset/Images/ecommerce.jpg";
import time from "../../Asset/Images/time.jpg";
import travel from "../../Asset/Images/travel.jpg";
import weather from "../../Asset/Images/weather.jpg";
import "./portfolio.css";

function Portfolio() {
  return (
    <>
      <section
        id="portfolio"
        className="max-w-[95%] min-h-[90vh] w-[100vw] flex flex-col mx-[auto] my-0 text-center px-[1rem]"
      >
        <div className="flex flex-col justify-center items-center">
          <h2 className="my-[1rem] text-[3rem]">My Portfolio</h2>
          <p className="description font-[300] text-[1rem] text-left max-w-[75%] mb-[3rem]">
            In my journey as a web developer, I have meticulously crafted a
            diverse array of digital experiences that seamlessly blend
            functionality with aesthetics. From responsive and visually engaging
            websites to dynamic web applications, my portfolio reflects a
            commitment to creating online spaces that captivate, inform, and
            interact. Each project embodies a fusion of cutting-edge
            technologies and a keen eye for user-centric design, demonstrating
            my dedication to pushing the boundaries of what's possible in the
            dynamic world of web development. Explore the showcase and witness
            the evolution of my craft, where every line of code weaves a story
            of innovation and creativity.
          </p>
        </div>
        <div className="portfolioimg ">
          <div className="expwork">
            <img className="" src={weather} alt="portfolio" />
            <div className="layer">
              <h3>Weather App</h3>
              <p>
                This website is a site that shows the weather condition of your
                location and any country.
              </p>
              <a href="https://aileswhale.github.io/weather-App/">Learn more</a>
            </div>
          </div>

          <div className="expwork">
            <img className="" src={country} alt="portfolio" />
            <div className="layer">
              <h3> Country App</h3>
              <p>
                This website displays the details about the countrys in the
                world .
              </p>
              <a href="https://aileswhale.github.io/Intermediate-task/">
                Learn more
              </a>
            </div>
          </div>

          <div className="expwork">
            <img className="object-fill" src={time} alt="portfolio" />
            <div className="layer">
              <h3>Clock App</h3>
              <p>
                This website is a site that shows the curent time of your
                location.
              </p>
              <a href="https://aileswhale.github.io/clock/">Learn more</a>
            </div>
          </div>

          <div className="expwork">
            <img className="" src={calculator} alt="portfolio" />
            <div className="layer">
              <h3>Calculator App</h3>
              <p>
                This webapp is a digital culculator built with vanilla
                javascript.
              </p>
              <a href="https://aileswhale.github.io/Calculator/">Learn more</a>
            </div>
          </div>

          <div className="expwork">
            <img className="" src={travel} alt="portfolio" />
            <div className="layer">
              <h3>Travel Journal App</h3>
              <p>This website is a site that keeps track of places visited.</p>
              <a href="https://aileswhale.github.io/my-travel-journal/">
                Learn more
              </a>
            </div>
          </div>

          <div className="expwork">
            <img className="" src={Ecommerce} alt="portfolio" />
            <div className="layer">
              <h3>Ecommerce App</h3>
              <p>
                This webapp is an ecommerce app that displays wares and enable
                users to add items to cart, have an account by signing in and
                logging in .
              </p>
              <a href="https://aileswhale.github.io/kodecamp-ecommerce/">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <button className=" btn">See more</button>
      </section>
    </>
  );
}

export default Portfolio;
