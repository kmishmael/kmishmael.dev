import { createSignal } from "solid-js";
import { A, Meta, Title } from "solid-start";
import About from "~/components/about";
import Landing from "~/components/landing";
import Projects from "~/components/projects";
import SideBar from "~/components/side-menu";
import Stack from "~/components/stack";

export const [isMenu, setIsMenu] = createSignal(false);

export default function Home() {
  return (
    <>
    <Meta name="title" content="Kibet Ismael - Portfolio"/>
    <Meta name="description" content="Software Developer, who is passionate about building user
            friendly and beautiful applications on the internet" />
    <Meta property="og:title" content="Kibet Ismael - Portfolio"/>
    <Meta property="og:description" content="Software Developer, who is passionate about building user
            friendly and beautiful applications on the internet" />
    <Meta property="og:title" content="Kibet Ismael - Portfolio"/>
    <Meta property="og:site_name" content="Portofolio" />
    <Meta property="og:image" content="https://kmishmael.vercel.app/landing-frame.png" />
    <Meta property="og:type" content="website" />
    <Meta name="twitter:card" content="summary_large_image"/>

    <main class="mx-2 sm:mx-10 md:mx-20 py-10">
      <Landing/>
      <Stack />
      <About />
      <Projects />
      <SideBar isMenu={isMenu} setIsMenu={setIsMenu} />
    </main>
    </>
  );
}
