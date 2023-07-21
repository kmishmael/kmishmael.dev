import { A } from "solid-start";
import { setIsMenu, isMenu } from "~/routes";

export default function NavBar() {
  return (
    <>
      <div class="flex flex-row justify-between h-16 border shadow-md items-center px-12">
        <div>
          <p class="uppercase font-bold text-2xl text-gray-500">Kibet Ismael</p>
        </div>
        <ul class="hidden sm:flex flex-row justify-between text-xl w-1/2">
          <li>
            <A href="#home" class="hover:text-blue-700">
              Home
            </A>
          </li>
          <li>
            <A href="#techstack" class="hover:text-blue-700">
              Tech stack
            </A>
          </li>
          <li>
            <A href="#portfolio" class="hover:text-blue-700">
              Portofolio
            </A>
          </li>
          
          <li>
            <A href="#" class="hover:text-blue-700">
              Contact
            </A>
          </li>
        </ul>
        

        <div class="sm:hidden">
          <button class="hover:fill-blue-700" onClick={() => setIsMenu(prev => !prev)}>
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
