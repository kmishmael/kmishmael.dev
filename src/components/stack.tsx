
interface Language {
  name: string;
  link: string;
}

export default function Stack() {
  
  const languages = [
    {
      name: "TypeScript",
      link: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
    },
    {
      name: "JavaScript",
      link: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
    },
    {
      name: "Python",
      link: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
    },
    {
      name: "Go",
      link: "https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white",
    },
    {
      name: "C",
      link: "https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white",
    },
    {
      name: "C++",
      link: "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
    },
    {
      name: "Dart",
      link: "https://img.shields.io/badge/dart-%230175C2.svg?style=for-the-badge&logo=dart&logoColor=white",
    },
  ];

  const frameworks = [
    {
      name: "Node.js",
      link: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
    },
    {
      name: "Hugo",
      link: "https://img.shields.io/badge/Hugo-black.svg?style=for-the-badge&logo=Hugo",
    },
    {
      name: "Next.js",
      link: "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
    },
    {
      name: "React",
      link: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    },
    {
      name: "Angular",
      link: "https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white",
    },
    {
      name: "SolidJS",
      link: "https://img.shields.io/badge/SolidJS-2c4f7c?style=for-the-badge&logo=solid&logoColor=c8c9cb",
    },
    {
      name: "TailwindCSS",
      link: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
    },
    {
      name: "Svelte",
      link: "https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white",
    },
  ];

  const hosting = [
    {
      name: "Firebase",
      link: "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase",
    },
    {
      name: "Google Cloud",
      link: "https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white",
    },
    {
      name: "Vercel",
      link: "https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white",
    },
    {
      name: "PlanetScale",
      link: "https://img.shields.io/badge/planetscale-%23000000.svg?style=for-the-badge&logo=planetscale&logoColor=white",
    },
    {
      name: "Supabase",
      link: "https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white",
    },
    {
      name: "MongoDB",
      link: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
    },
    {
      name: "Postgres",
      link: "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
    },
  ];

  const design = [
    {
      name: "Figma",
      link: "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white",
    },
    {
      name: "Inkscape",
      link: "https://img.shields.io/badge/Inkscape-e0e0e0?style=for-the-badge&logo=inkscape&logoColor=080A13",
    },
  ];

  return (
    <>
      <div class="mt-28">
        <p class="text-2xl uppercase font-bold underline">Tech Stack</p>

        <div class="bg-gray-100 p-8 mt-4">
          <div class="max-w-3xl mx-auto">
            <h2 class="text-2xl font-bold mb-4">Languages</h2>
            <div class="flex flex-wrap mb-8">
              {languages.map((lang) => (
                <img
                  src={lang.link}
                  alt={lang.name}
                  class="m-2"
                />
              ))}
            </div>

            <h2 class="text-2xl font-bold mb-4">
              Frameworks, Platforms, and Libraries
            </h2>
            <div class="flex flex-wrap mb-8">
            {frameworks.map((frame) => (
                <img
                  src={frame.link}
                  alt={frame.name}
                  class="m-2"
                />
              ))}
            </div>

            <h2 class="text-2xl font-bold mb-4">
              Hosting, Saas, Databases, and other Cloud Services
            </h2>
            <div class="flex flex-wrap mb-8">
            {hosting.map((host) => (
                <img
                  src={host.link}
                  alt={host.name}
                  class="m-2"
                />
              ))}
            </div>

            {/* <!-- Design and prototyping section --> */}
            <h2 class="text-2xl font-bold mb-4">Design and Prototyping</h2>
            <div class="flex flex-wrap mb-8">
            {design.map((des) => (
                <img
                  src={des.link}
                  alt={des.name}
                  class="m-2"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
