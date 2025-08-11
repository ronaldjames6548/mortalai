"use client"
import React,{useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const NavLight = dynamic(()=>import('../components/navlight'))
const Footer = dynamic(() => import('../components/footer'))
const Switcher = dynamic(() => import('../components/switcher'))

import { blogData } from "../data/data";
import {FiClock, FiCalendar} from '../assets/icons/vander'

export default function Blog(){
    useEffect(() => {
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      }, []);
    return(
        <>
        <NavLight/>
        <section className="relative md:py-44 py-32  bg-no-repeat bg-bottom bg-cover" style={{backgroundImage:"url('/images/bg/bg-pages.jpg')"}}>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-900/70"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-6">
                    <div>
                        <h5 className="md:text-4xl text-3xl md:leading-normal leading-normal tracking-wider font-semibold text-white mb-0">Latest Blogs & News</h5>
                    </div>

                    <ul className="tracking-[0.5px] mb-0 inline-block mt-5">
                        <li className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Mortal.Ai</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out text-white" aria-current="page">Blogs</li>
                    </ul>
                </div>
            </div>
        </section>
        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {blogData.map((item,index) => {
                        return(
                            <div className="relative bg-white dark:bg-slate-900 p-4 rounded-md shadow dark:shadow-gray-700" key={index}>
                                <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="rounded-md shadow dark:shadow-gray-700" alt=""/>
                                <div className="pt-4">
                                    <div className="flex justify-between items-center">
                                        <div className="space-x-1">
                                            <Link href="" className="bg-amber-400/10 text-amber-500 dark:text-amber-400 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">AI</Link>
                                            <Link href="" className="bg-amber-400/10 text-amber-500 dark:text-amber-400 text-[12px] font-semibold px-2.5 py-0.5 rounded h-5">Marketing</Link>
                                        </div>

                                        <span className="flex items-center"><FiClock className="h-4 w-4"/><span className="ms-1 text-slate-400">5 min read</span></span>
                                    </div>

                                    <div className="mt-5">
                                        <Link href={`/blog-detail/${item.id}`} className="text-lg font-semibold hover:text-amber-400">{item.title}</Link>
                                    </div>

                                    <div className="mt-5 flex justify-between items-center">
                                        <span className="flex items-center">
                                            <Image src={item.client} width={28} height={28} className="h-7 w-7 rounded-full" alt=""/>
                                            <Link href="" className="ms-1 text-slate-400 hover:text-amber-400">{item.author}</Link>
                                        </span>

                                        <span className="flex items-center"><FiCalendar className="h-4 w-4"/><span className="ms-1 text-slate-400">{item.date}</span></span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                    <div className="md:col-span-12 text-center">
                        <nav aria-label="Page navigation example">
                            <ul className="inline-flex items-center -space-x-px">
                                <li>
                                    <Link href="#" className="w-9 h-9 inline-flex text-sm justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400 dark:hover:bg-amber-400">
                                        <i className="mdi mdi-chevron-left text-[20px] rtl:rotate-180 rtl:-mt-1"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="w-9 h-9 inline-flex text-sm justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400 dark:hover:bg-amber-400">1</Link>
                                </li>
                                <li>
                                    <Link href="#" className="w-9 h-9 inline-flex text-sm justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400 dark:hover:bg-amber-400">2</Link>
                                </li>
                                <li>
                                    <Link href="#" aria-current="page" className="z-10 w-9 h-9 inline-flex text-sm justify-center items-center text-white bg-amber-400 border border-amber-400">3</Link>
                                </li>
                                <li>
                                    <Link href="#" className="w-9 h-9 inline-flex text-sm justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400 dark:hover:bg-amber-400">4</Link>
                                </li>
                                <li>
                                    <Link href="#" className="w-9 h-9 inline-flex text-sm justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400 dark:hover:bg-amber-400">5</Link>
                                </li>
                                <li>
                                    <Link href="#" className="w-9 h-9 inline-flex text-sm justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400 dark:hover:bg-amber-400">
                                        <i className="mdi mdi-chevron-right text-[20px] rtl:rotate-180 rtl:-mt-1"></i>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}