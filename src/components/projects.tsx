import { Style, A } from "solid-start";

export default function Projects() {
  const data = [
    {
      link: "#",
      image: "./project3.png",
      title: "Silicon Voyage Admin Dashboard",
      descrption: "Powerful tool designed to streamline content management and website administration. It empowers administrators to efficiently handle product specifications, user reviews, and overall website performance, ensuring a seamless and up-to-date user experience.",
      tags: ['ReactJS', 'NextJS', 'MongoDB', 'TailwindCSS', 'ReactQuery'],
    },
    {
        link: '#',
        image: "./project2.png",
        'title': "",
        "description": "",
        tags: []
    },
    {
        link: 'https://sc-validator-kmishmael.vercel.app/twitter-validator',
        image: "./sc_validator.png",
        'title': "Twitter card validator",
        "description": "Web-based tool that allows users to input their website URLs and validate the associated Twitter cards.",
        tags: []
    },
    {
        link: 'https://joy-4e4c6.web.app/',
        image: "./joy_project.png",
        'title': "Time countdown",
        "description": "Having fun with Angular.",
        tags: []
    }
  ];
  return (
    <>
      <div class="mt-12">
        <h2 class="project w-fit text-2xl font-semibold">Portofolio</h2>
        <div class=" flex flex-row flex-wrap mt-10 justify-between">
          <div class="w-1/2 mb-4">
            <div class="flex flex-col relative rounded-md overflow-hidden shadow-lg">
              <A
                href="https://www.theverge.com/23800129/oppenheimer-movie-review-christopher-nola"
                class="absolute w-full rounded-md bg-black transition-all duration-200 ease-in bg-opacity-50 hover:bg-opacity-0 h-full"
              ></A>
              <A href="https://www.theverge.com/23800129/oppenheimer-movie-review-christopher-nola">
                <img class="object-fit rounded-md" src={"./project3.png"} />
              </A>
            </div>
          </div>

          <div class="flex flex-col w-2/5 px-4 text-right justify-center gap-3">
            <p class="uppercase font-bold text-lg">{`Silicon Voyage Admin Dashboard`}</p>
            <p class="text-sm">
              {
                "Powerful tool designed to streamline content management and website administration. It empowers administrators to efficiently handle product specifications, user reviews, and overall website performance, ensuring a seamless and up-to-date user experience."
              }
            </p>
            <div>
              <ul class="flex gap-2 font-semibold justify-end">
                <li class="cursor-pointer hover:text-blue-700 text-sm">
                  ReactJS
                </li>
                <li class="cursor-pointer hover:text-blue-700 text-sm">
                  NextJS
                </li>
                <li class="cursor-pointer hover:text-blue-700 text-sm">
                  Edge Functions
                </li>
                <li class="cursor-pointer hover:text-blue-700 text-sm">
                  MongoDB
                </li>
                <li class="cursor-pointer hover:text-blue-700 text-sm">
                  TailwindCSS
                </li>
              </ul>
            </div>
            <div class="w-full pr-3">
              <svg
                class="h-6 w-6 hover:fill-blue-700 ml-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
              </svg>
            </div>
          </div>
        </div>
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
