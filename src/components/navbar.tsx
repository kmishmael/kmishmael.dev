export default function NavBar() {
    return (
        <>
        <div class="flex flex-row justify-between h-16 border shadow-md items-center px-12">
            <div>
                <p class="uppercase font-bold text-2xl text-gray-500">Kibet Ismael</p>
            </div>
                <ul class="flex flex-row justify-between text-xl w-1/2">
                    <li>
                        <p>Home</p>
                    </li>
                    <li>
                        <p>Tech stack</p>
                    </li>
                    <li>
                        <p>Portofolio</p>
                    </li>
                    <li>
                        <p>Blog</p>
                    </li>
                    <li>
                        <p>Contact</p>
                    </li>
                </ul>
            
        </div>
        </>
    )
}