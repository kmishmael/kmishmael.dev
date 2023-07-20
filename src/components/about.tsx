import { Style } from "solid-start";

export default function About() {
  return (
    <>
      <div class="mt-8 flex flex-col-reverse sm:flex-row items-center">
        <div class="w-full max-sm:mt-8   sm:w-2/4 flex justify-center">
          <div class="w-[68%] py-2 max-sm:px-2 overflow-hidden border-l-4 flex justify-center items-center shadow-lg rounded-lg">
            <img
              class="w-[256px] h-[93%] rounded-lg object-contain"
              src={"./kibet_touch_grass.jpg"}
              alt="Kibet onced touch grass"
            />
          </div>
        </div>

        <div class="w-full sm:w-2/3 px-4">
          <h2 class="about w-fit text-3xl font-semibold" >ABOUT</h2>
          <Style>
            {`
            .about{
                position: relative;
            }
            .about::after{
                content: "";
                position: absolute;
                height: 6px;
                width: 60%;
                bottom: -10px;
                left: 0;
                background-color: black;
            }
            `}
          </Style>
          <p class="mt-6 text-lg">
            I am a Software Developer, with three years+ experience in building
            fully fledged and functional web and mobile applications. Over the years, I have
            acquired profiency in TypeScript, Python, Javascript, NextJS, ReactJS, Angular, Solid Start, CSS, TailwindCSS and other libraries. My love for learning has driven me to
            acquire more skills to build applications that solve problems and
            make life easy for others. I also have experience in integrating RESTful
            APIs, using Git for version control. I am passionate about creating user-friendly web
            applications that meet the needs of users while delivering a
            seamless experience. I am a quick learner, adaptable, and always
            eager to improve my skills.
            I am currently persuing a Bachelors Degree in Electrical
            and Electronics Engineering at the University Of Nairobi.
          </p>
        </div>
      </div>
    </>
  );
}
