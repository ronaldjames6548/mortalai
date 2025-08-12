"use client"
import React, { useState,useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const NavLight = dynamic(()=>import('../components/navbar'))
const Footer = dynamic(() => import('../components/footer'))
const Switcher = dynamic(() => import('../components/switcher'))

import {MdKeyboardArrowDown} from "../assets/icons/vander"

export default function Terms(){
    useEffect(() => {
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      }, []);
    const [activeIndex, setActiveIndex] = useState(1)
    const accordianData = [
        {
            id:1,
            title:'How does it generate responses?',
            desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            id:2,
            title:'Is AI copywriting more cost-effective than hiring human writers?',
            desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            id:3,
            title:'Can AI copywriting be customized to my brand and audience?',
            desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            id:4,
            title:'What kind of support is available for AI copywriting tools?',
            desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
    ]
    return(
        <>
        <NavLight/>
        <section className="relative md:pt-44 pt-32 pb-8 bg-gradient-to-b from-amber-400/20 dark:from-amber-400/40 to-transparent">
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-6">
                    <div>
                        <h5 className="md:text-4xl text-3xl md:leading-normal leading-normal tracking-wider font-semibold mb-0">Terms of Services</h5>
                    </div>

                    <ul className="tracking-[0.5px] mb-0 inline-block mt-5">
                        <li className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out hover:text-amber-400"><Link href="/">Mortal.Ai</Link></li>
                        <li className="inline-block text-base mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out text-amber-400" aria-current="page">Terms</li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="md:flex justify-center">
                    <div className="md:w-3/4">
                        <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                            <h5 className="text-xl font-semibold mb-4">Introduction :</h5>
                            <p className="text-slate-400">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</p>

                            <h5 className="text-xl font-semibold mb-4 mt-8">User Agreements :</h5>
                            <p className="text-slate-400">The most well-known dummy text is the Lorem Ipsum, which is said to have <b className="text-red-600">originated</b> in the 16th century. Lorem Ipsum is <b className="text-red-600">composed</b> in a pseudo-Latin language which more or less <b className="text-red-600">corresponds</b> to proper Latin. It contains a series of real Latin words. This ancient dummy text is also <b className="text-red-600">incomprehensible</b>, but it imitates the rhythm of most European languages in Latin script. The <b className="text-red-600">advantage</b> of its Latin origin and the relative <b className="text-red-600">meaninglessness</b> of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer <b className="text-red-600">attention</b> from the layout.</p>
                            <p className="text-slate-400 mt-3">There is now an <b className="text-red-600">abundance</b> of readable dummy texts. These are usually used when a text is <b className="text-red-600">required purely</b> to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or <b className="text-red-600">nonsensical</b> stories.</p>
                            <p className="text-slate-400 mt-3">It seems that only <b className="text-red-600">fragments</b> of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</p>
                            
                            <h5 className="text-xl font-semibold mb-4 mt-8">Restrictions :</h5>
                            <p className="text-slate-400">You are specifically restricted from all of the following :</p>
                            <ul className="list-none text-slate-400 mt-3">
                                <li className="flex mt-2"><i className="mdi mdi-arrow-right text-amber-400 text-lg align-middle me-2"></i>Digital Marketing Solutions for Tomorrow</li>
                                <li className="flex mt-2"><i className="mdi mdi-arrow-right text-amber-400 text-lg align-middle me-2"></i>Our Talented & Experienced Marketing Agency</li>
                                <li className="flex mt-2"><i className="mdi mdi-arrow-right text-amber-400 text-lg align-middle me-2"></i>Create your own skin to match your brand</li>
                                <li className="flex mt-2"><i className="mdi mdi-arrow-right text-amber-400 text-lg align-middle me-2"></i>Digital Marketing Solutions for Tomorrow</li>
                                <li className="flex mt-2"><i className="mdi mdi-arrow-right text-amber-400 text-lg align-middle me-2"></i>Our Talented & Experienced Marketing Agency</li>
                                <li className="flex mt-2"><i className="mdi mdi-arrow-right text-amber-400 text-lg align-middle me-2"></i>Create your own skin to match your brand</li>
                            </ul>

                            <h5 className="text-xl font-semibold mt-8">Users Question & Answer :</h5>

                            <div  className="mt-6">
                            {accordianData.map((item,index)=>{
                            return(
                                <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4" key={index}>
                                    <h2 className="text-base font-semibold" >
                                        <button type="button" onClick={() => setActiveIndex(item.id)} className={`${activeIndex === item.id ? "bg-gray-50 dark:bg-slate-800 text-amber-400" : ""} flex justify-between items-center p-5 w-full font-medium text-start`}>
                                            <span>{item.title}</span>
                                            <MdKeyboardArrowDown className={`${activeIndex === item.id ? "rotate-180" : ""} w-4 h-4 shrink-0`}/>
                                        </button>
                                    </h2>
                                    <div className={activeIndex === item.id ? "" : "hidden"}>
                                        <div className="p-5">
                                            <p className="text-slate-400 dark:text-gray-400">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                            </div>

                            <div className="mt-6">
                                <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded-md">Accept</Link>
                                <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-amber-400 border-amber-400 text-amber-400 hover:text-white rounded-md ms-2">Decline</Link>
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