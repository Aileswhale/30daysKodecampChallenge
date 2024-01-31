const About = () => {
  return (
    <>
      <section className="about overflow-hidden w-[100vw] max-w[65rem] flex flex-col items-center justify-center text-center mt-[15%] mx-[auto]">
        <h1 className="text-[3rem] font-[600] pt-[3rem] mb-[1.5rem]">
          What I do
        </h1>
        <p className="font-[200] text-[1rem] max-w-[60%] mx-[2rem]">
          As a versatile professional, I seamlessly merge the analytical prowess
          of a data analyst with the creative finesse of a front-end developer.
          My passion lies in crafting data-driven narratives and visually
          engaging digital experiences. Let's delve into the distinct realms
          that define my skill set.
        </p>
        <div className="skills w-[100vw] max-w-[70%] text-left  m-[1.5rem]">
          <div className="m-[1rem] p-[1.5rem] rounded-[.5rem] bg-[#323232]">
            <h1 className="text-[2rem] font-[300]">Front-End Developer</h1>
            <p className="text-[1rem] font-[200]">
              In the world of front-end development, I thrive on transforming
              ideas into captivating user interfaces. Proficient in <strong>HTML, CSS,
              and JavaScript, React.js, Typescript, Next.js</strong>, I leverage my
              creativity to design seamless, responsive, and visually appealing
              websites. With a keen eye for user experience, I bring concepts to
              life, ensuring that each click is an intuitive and enjoyable
              journey for the user.
            </p>
          </div>
          <div className="m-[1rem] p-[1.5rem] rounded-[.5rem] bg-[#323232]">
            <h1 className="text-[2rem] font-[300]">Data Analytics</h1>
            <p className="text-[1rem] font-[200]">
              Delving into the realm of data analysis, I embark on a journey of
              discovery through numbers. Proficient in data visualization tools
              and statistical analysis like <strong>MIcrosoft Power BI, Microsoft Excel,
              Phython </strong>. I uncover actionable insights that drive informed
              decision-making. From cleaning and organizing raw data to
              presenting compelling visualizations, I navigate the data
              landscape to extract meaningful narratives and provide valuable
              insights.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
