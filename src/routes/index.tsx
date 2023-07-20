import { A } from "solid-start";
import About from "~/components/about";
import Landing from "~/components/landing";
import NavBar from "~/components/navbar";
import Projects from "~/components/projects";
import Stack from "~/components/stack";

export default function Home() {
  return (
    <>
    
    <main class="mx-2 sm:mx-10 md:mx-20 py-10">
      <Landing/>
      <Stack />
      <About />
      <Projects />
    </main>
    </>
  );
}
