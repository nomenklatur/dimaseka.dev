"use client"
export default function Experience() {
    return (
        <>
            <div id="Experience" className="w-screen h-fit flex flex-col pt-16 px-8 gap-4 snap-start">
                <div className="text-start">
                    <h2 className="text-lg md:text-[45px] font-semibold w-full md:w-1/2 md:leading-relaxed">From Debugging Nightmares to Seamless Deployments—I’ve Seen It All.</h2>
                    <p className="text-sm md:text-[18px] text-gray-400 font-figtree">Let’s leverage my 3+ years of experience to build something extraordinary.</p>
                </div>
                <div className="mt-4 flex flex-col md:flex-row gap-4">
                    <div className="flex gap-2 justify-between border border-gray-800 rounded-lg p-4 shadow-md">
                        <div className="flex gap-2">
                            <div>
                                <img src="/logos/iakn.png" alt="IAKN Logo" width={80} />
                            </div>
                            <div>
                                <p className="font-semibold">Web Developer</p>
                                <p className="text-gray-400 font-figtree">IAKN Tarutung</p>
                                <p className="text-sm">2021 - 2022</p>
                            </div>
                        </div>
                        <div>
                            <a href="https://www.iakntarutung.ac.id/" target="_blank" className="bg-gray-800 cursor-pointer text-white px-3 py-1 md:px-2 md:py-1 lg:px-4 lg:py-2 rounded-md text-sm shadow-lg">Visit</a>
                        </div>
                    </div>
                    <div className="flex gap-2 justify-between border border-gray-800 rounded-lg p-4 shadow-md">
                        <div className="flex gap-2">
                            <div>
                                <img src="/logos/kawan_kerja.png" alt="Kawan Kerja Logo" width={80} />
                            </div>
                            <div>
                                <p className="font-semibold text-sm">Backend Engineer Intern</p>
                                <p className="text-gray-400 font-figtree">PT. Kawan Kerja</p>
                                <p className="text-sm">2022 - 2023</p>
                            </div>
                        </div>
                        <div>
                            <a href="https://kawankerja.id/" target="_blank" className="bg-gray-800 cursor-pointer text-white px-3 py-1 md:px-2 md:py-1 lg:px-4 lg:py-2 rounded-md text-sm shadow-lg">Visit</a>
                        </div>
                    </div>
                    <div className="flex gap-2 justify-between border border-gray-800 rounded-lg p-4 shadow-md">
                        <div className="flex gap-2">
                            <div>
                                <img src="/logos/rey.png" alt="Rey Logo" width={80} />
                            </div>
                            <div>
                                <p className="font-semibold text-sm">Software Engineer Intern</p>
                                <p className="text-gray-400 font-figtree">Rey.id</p>
                                <p className="text-sm">2023</p>
                            </div>
                        </div>
                        <div>
                            <a href="https://rey.id/id/" target="_blank" className="bg-gray-800 cursor-pointer text-white px-3 py-1 md:px-2 md:py-1 lg:px-4 lg:py-2 rounded-md text-sm shadow-lg">Visit</a>
                        </div>
                    </div>
                    <div className="flex gap-2 justify-between border border-yellow-600 rounded-lg p-4 shadow-xl shadow-yellow-200">
                        <div className="flex gap-2">
                            <div>
                                <img src="/logos/lezenda.png" alt="Lezenda Logo" width={80} />
                            </div>
                            <div>
                                <p className="font-semibold text-sm">Software Engineer</p>
                                <p className="text-gray-400 font-figtree mb-1">Lezenda</p>
                                <p className="text-sm">2023 - <span className="bg-yellow-400 px-3 py-1 rounded-lg text-xs font-semibold">Today</span> </p>
                            </div>
                        </div>
                        <div>
                            <a href="https://lezenda.com/" target="_blank" className="bg-gray-800 cursor-pointer text-white px-3 py-1 md:px-2 md:py-1 lg:px-4 lg:py-2 rounded-md text-sm shadow-lg">Visit</a>
                        </div>
                    </div>
                </div>
                <div className="w-full h-1 bg-[radial-gradient(circle,_black_2px,_transparent_2px)] bg-[length:10px_10px] mt-4"></div>
                <div className="flex flex-col md:flex-row justify-between md:justify-start items-center">
                    <div className="md:w-1/3 mb-3 text-center w-3/4">
                        <h3 className="text-sm md:text-lg font-semibold text-center md:text-start">Where It All Began: Building My Engineering Mindset</h3>
                        <p className="text-xs text-start hidden md:block md:text-sm font-figtree text-gray-400">Bachelor Degree in Computer Science from Universitas Sumatera Utara – where I first learned to transform theoretical concepts into functional code</p>
                    </div>
                    <div className="flex gap-2 justify-center p-4">
                        <div className="flex gap-2 justify-between">
                            <div>
                                <img src="/logos/usu.png" alt="Usu Logo" width={80} />
                            </div>
                            <div>
                                <p className="font-semibold text-sm">Computer Science</p>
                                <p className="text-sm text-gray-400">2018 - 2022</p>
                                <p className="mt-2 font-semibold">3.88/ <span className="text-gray-400">4.00</span> GPA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}