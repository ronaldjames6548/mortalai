"use client"
import React,{useEffect} from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const NavLight = dynamic(()=>import('../components/navbar'))
const Footer = dynamic(() => import('../components/footer'))
const Switcher = dynamic(() => import('../components/switcher'))

export default function Privacy(){
    useEffect(() => {
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      }, []);
    return(
        <>
        <NavLight/>
        <section className="relative md:pt-44 pt-32 pb-8 bg-gradient-to-b from-amber-400/20 dark:from-amber-400/40 to-transparent">
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-6">
                    <div>
                        <h5 className="md:text-4xl text-3xl md:leading-normal leading-normal tracking-wider font-semibold mb-0">Privacy Policy</h5>
                    </div>

                    <ul className="tracking-[0.5px] mb-0 inline-block mt-5">
                        <li className="inline-block capitalize font-medium duration-500 ease-in-out hover:text-amber-400"><Link href="/">Mortal.Ai</Link></li>
                        <li className="inline-block text-base mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block capitalize font-medium duration-500 ease-in-out text-amber-400" aria-current="page">Privacy</li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="md:flex justify-center">
                    <div className="md:w-3/4">
                        <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                            <h5 className="text-xl font-semibold mb-4">Overview :</h5>
                            <p className="text-slate-400">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</p>
                            <p className="text-slate-400">In the 1960s, the text suddenly became known beyond the professional circle of typesetters and layout designers when it was used for Letraset sheets (adhesive letters on transparent film, popular until the 1980s) Versions of the text were subsequently included in DTP programmes such as PageMaker etc.</p>
                            <p className="text-slate-400">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.</p>
                        
                            <h5 className="text-xl font-semibold mb-4 mt-8">We use your information to :</h5>
                            <ul className="list-none text-slate-400 mt-4">
                                <li className="flex mt-2"><i className="mdi mdi-arrow-right text-amber-400 text-lg align-middle me-2"></i>Digital Marketing Solutions for Tomorrow</li>
                                <li className="flex mt-2"><i className="mdi mdi-arrow-right text-amber-400 text-lg align-middle me-2"></i>Our Talented & Experienced Marketing Agency</li>
                                <li className="flex mt-2"><i className="mdi mdi-arrow-right text-amber-400 text-lg align-middle me-2"></i>Create your own skin to match your brand</li>
                                <li className="flex mt-2"><i className="mdi mdi-arrow-right text-amber-400 text-lg align-middle me-2"></i>Digital Marketing Solutions for Tomorrow</li>
                                <li className="flex mt-2"><i className="mdi mdi-arrow-right text-amber-400 text-lg align-middle me-2"></i>Our Talented & Experienced Marketing Agency</li>
                                <li className="flex mt-2"><i className="mdi mdi-arrow-right text-amber-400 text-lg align-middle me-2"></i>Create your own skin to match your brand</li>
                            </ul>

                            <h5 className="text-xl font-semibold mb-4 mt-8">Information Provided Voluntarily :</h5>
                            <p className="text-slate-400">In the 1960s, the text suddenly became known beyond the professional circle of typesetters and layout designers when it was used for Letraset sheets (adhesive letters on transparent film, popular until the 1980s) Versions of the text were subsequently included in DTP programmes such as PageMaker etc.</p>

                            <div className="mt-8">
                                <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded-md">Print</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <Footer/>
        <Switcher/>
        </>
    )
}