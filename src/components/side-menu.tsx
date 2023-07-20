import { Accessor, Setter } from "solid-js";
import { A } from "solid-start";
//          isMenu() ? `right-10` : `-right-48`
export default function SideBar({
  isMenu,
  setIsMenu,
}: {
  isMenu: Accessor<boolean>;
  setIsMenu: Setter<boolean>;
}) {
  return (
      <div
        class={`absolute top-20 right-0 bg-white transition-[opacity] ease-in duration-300 shadow z-50 py-4 w-48 ${
          isMenu() ? `opacity-100 scale-100` : `opacity-0 scale-0`
        }`}
      >
        <ul class="flex flex-col gap-2 items-center justify-between text-lg font-bold text-slate-500">
          <li>
            <A href="#" class="hover:text-blue-700">
              Home
            </A>
          </li>
          <li>
            <A href="#" class="hover:text-blue-700">
              Tech stack
            </A>
          </li>
          <li>
            <A href="#" class="hover:text-blue-700">
              Portofolio
            </A>
          </li>
          <li>
            <A href="#" class="hover:text-blue-700">
              Blog
            </A>
          </li>
          <li>
            <A href="#" class="hover:text-blue-700">
              Contact
            </A>
          </li>
        </ul>
      </div>

  );
}
