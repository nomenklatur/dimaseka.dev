"use client"
export default function Footer() {
    return (
        <div className="relative mt-[100px]">
            <div className="absolute inset-x-0 top-[-63px] h-16 bg-gradient-to-b from-white to-yellow-400"></div>
            <div className="w-screen bg-yellow-400 flex flex-col gap-4 items-center px-2 pt-4 pb-8 snap-start">
                <div>
                    <img src="/logos/dimaseka.png" alt="Dimaseka.dev Logo" className="w-20 md:w-28"/>
                </div>
                <div>
                    <h2 className="font-semibold text-lg md:text-2xl text-center">Let's build something amazing</h2>
                    <p className="font-figtree text-sm md:text-lg text-center text-gray-800">Reach me out and discuss your tech needs!</p>
                </div>
                <div>
                    <a href="mailto:hi@dimaseka.my.id?subject=Hello&body=I want to talk about..." className="bg-gray-800 cursor-pointer text-white px-4 py-2 md:px-2 md:py-1 lg:px-4 lg:py-2 rounded-md text-sm shadow-lg flex gap-2 justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"/></svg>
                        hi@dimaseka.my.id
                    </a>
                </div>
                <div>
                    <p className="text-xs text-gray-600 mt-4">&copy; 2025 Dimas Eka Putra</p>
                </div>
            </div>
        </div>
            
    );
}