"use client"
export default function Projects() {
    return (
        <>
            <div className="w-screen h-screen flex flex-col pt-16 px-8 gap-4 snap-start">
                <div className="text-[25px] md:text-[65px] font-bold text-start">
                    <p>Code that performs.</p>
                    <p>Solutions that scale.</p>
                    <p>Results you can quantify.</p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full">
                    <div>
                        <p className="text-[70px] md:text-[60px] font-semibold">10+</p>
                        <p className="text-base text-gray-400">Real projects</p>
                    </div>
                    <div>
                        <p className="text-[70px] md:text-[60px] font-semibold">500+</p>
                        <p className="text-base text-gray-400">Connections on LinkedIn</p>
                    </div>
                    <div>
                        <p className="text-[70px] md:text-[60px] font-semibold">3+</p>
                        <p className="text-base text-gray-400">Years of experience</p>
                    </div>
                </div>
                <div className="flex gap-4 overflow-auto mt-4">
                    <img src="/screenshots/simbkd.png" alt="Simbkd SS" width={400} className="rounded-md"/>
                    <img src="/screenshots/menuju.png" alt="Menuju SS" width={400} className="rounded-md"/>
                    {/* <img src="/screenshots/simbkd.png" alt="Simbkd SS" width={400}/>
                    <img src="/screenshots/simbkd.png" alt="Simbkd SS" width={400}/>
                    <img src="/screenshots/simbkd.png" alt="Simbkd SS" width={400}/>
                    <img src="/screenshots/simbkd.png" alt="Simbkd SS" width={400}/> */}
                </div>
            </div>
        </>
    );
}