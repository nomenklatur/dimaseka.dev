function Navbar() {
    return (
        <>
            <nav className="fixed top-0 left-0 w-full flex justify-end md:justify-end gap-4 items-center p-5 z-[99999]">
                {/* <h3 className="nav-title">
                    F<span>OO</span>DIES
                </h3> */}
                {/* <ul className="flex gap-5">
                    <li>
                        <a className="text-gray-700" href="#home">Home</a>
                    </li>
                    <li>
                    <a href="#foods">Projects</a>
                    </li>
                    <li>
                    <a href="#contact">Contact</a>
                    </li>
                </ul> */}

                <a href="/files/Dimas Eka Putra - Resume.pdf" download="Dimas Eka Putra - Resume.pdf" className="bg-yellow-400 font-semibold cursor-pointer px-2 py-1 md:px-2 md:py-1 lg:px-4 lg:py-2 rounded-md text-sm flex gap-1 items-center shadow-lg z-99">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 15.577l-3.539-3.538l.708-.72L11.5 13.65V5h1v8.65l2.33-2.33l.709.719zM6.616 19q-.691 0-1.153-.462T5 17.384v-2.423h1v2.423q0 .231.192.424t.423.192h10.77q.23 0 .423-.192t.192-.424v-2.423h1v2.423q0 .691-.462 1.153T17.384 19z"/></svg>
                    Resume
                </a>
            </nav>
        </>
    );
}

export default Navbar;