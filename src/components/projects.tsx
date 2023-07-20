import { Style, A } from "solid-start";

export default function Projects() {
  const data = [
    {
      link: "#",
      image: "./project3.png",
      title: "Silicon Voyage Admin Dashboard",
      description:
        "Powerful tool designed to streamline content management and website administration. It empowers administrators to efficiently handle product specifications, user reviews, and overall website performance, ensuring a seamless and up-to-date user experience.",
      tags: ["ReactJS", "NextJS", "MongoDB", "TailwindCSS", "ReactQuery"],
    },
    {
      link: "https://siliconvoyage.com",
      image: "./project2.png",
      title: "Silicon Voyage",
      description:
        "A technology website that archives specifications for various lines of products in the Tech sector i.e CPUs, GPUs, and Smartphones",
      tags: ["ReactJS", "NextJS", "MongoDB", "TailwindCSS", "ReactQuery"],
    },
    {
      link: "https://sc-validator-kmishmael.vercel.app/twitter-validator",
      image: "./sc_validator.png",
      title: "Twitter card validator",
      description:
        "Web-based tool that allows users to input their website URLs and validate the associated Twitter cards.",
      tags: ["ReactJS", "TailwindCSS", "Golang", "Serverless Architecture"],
    },
    {
      link: "https://joy-4e4c6.web.app/",
      image: "./joy_project.png",
      title: "Time countdown",
      description: "Having fun with Angular.",
      tags: ["Angular", "SCSS"],
    },
  ];
  return (
    <>
      <div id="portfolio" class="mt-12">
        <h2 class="project w-fit text-2xl font-semibold uppercase">
          Portfolio
        </h2>

        {data.map((project, index) => (
          <>
            <div class="mt-10">
              <p class="text-2xl underline font-bold text-slate-500">
                0{index + 1}
              </p>
            </div>
            <div
              class={`flex flex-col sm:flex-row flex-wrap mt-4 sm:mt-8 justify-between ${
                (index + 1) % 2 ? "sm:flex-row-reverse" : ""
              }`}
            >
              <div class="w-full sm:w-3/5 mb-4">
                <div class="flex flex-col relative rounded overflow-hidden shadow-lg">
                  <A
                    href={project.link}
                    class="absolute w-full rounded bg-black transition-all duration-200 ease-in bg-opacity-30 hover:bg-opacity-0 h-full"
                  ></A>
                  <A href={project.link}>
                    <img class="object-fit rounded" src={project.image} />
                  </A>
                </div>
              </div>

              <div class="flex flex-col w-full sm:w-2/5 sm:px-4 text-left sm:text-right justify-center gap-3">
                <div class="h-fit bg-navy p-4 text-slate-400 rounded-md">
                  <p class="uppercase font-bold text-lg">{project.title}</p>
                  <p class="text-sm">{project.description}</p>
                  <div>
                    <ul class="flex gap-2 font-semibold justify-start sm:justify-end">
                      {project.tags.map((img) => (
                        <li class="cursor-pointer hover:text-blue-700 text-sm">
                          {img}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div class="w-full pr-3 mt-3">
                    <A href={project.link}>
                      <svg
                        class="h-6 w-6 fill-slate-300 transition-[fill] duration-200 ease-in hover:fill-neon ml-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
                      </svg>
                    </A>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>

      <Style>{`
      .project{
        position: relative;
    }
    .project::after{
        content: "";
        position: absolute;
        height: 6px;
        width: 60%;
        bottom: -10px;
        left: 0;
        background-color: black;
    }
      `}</Style>
    </>
  );
}
