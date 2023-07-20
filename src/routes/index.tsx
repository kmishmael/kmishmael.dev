import { createSignal } from "solid-js";
import { A } from "solid-start";
import About from "~/components/about";
import Landing from "~/components/landing";
import Projects from "~/components/projects";
import SideBar from "~/components/side-menu";
import Stack from "~/components/stack";

export const [isMenu, setIsMenu] = createSignal(false);

export default function Home() {
  return (
    <>
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
