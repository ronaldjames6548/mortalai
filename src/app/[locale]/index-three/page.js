'use client'
import React,{useEffect} from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const Navbar = dynamic(()=>import('../components/navbar'))
const Footer = dynamic(() => import('../components/footer'))
const Switcher = dynamic(() => import('../components/switcher'))
const BrandLogo = dynamic(()=>import('../components/brandLogo'))
const AboutThree = dynamic(()=>import('../components/aboutThree'))
const AiFeatures = dynamic(()=>import('../components/aiFeatures'))
const AboutOne = dynamic(()=>import('../components/aboutOne'))
const AboutTwo = dynamic(()=>import('../components/aboutTwo'))
const Pricing = dynamic(()=>import('../components/pricing'))
const Clients = dynamic(()=>import('../components/clients'))
const Blogs = dynamic(() => import('../components/blogs'))
const Features = dynamic(()=>import('../components/features'))

export default function IndexThree(){
    useEffect(() => {
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      }, []);
    return(
        <>
        <Navbar/>
        <section className="relative md:py-48 py-36 items-center mt-[74px] md:mx-4 md:rounded-3xl overflow-hidden">
            <div className="absolute top-0 start-0 w-full h-full z-0 pointer-events-none overflow-hidden">

                <iframe src="https://www.youtube.com/embed/_VsKABxUA_8?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1" title="my-fram" className="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 w-screen h-[56.25vw] min-h-screen md:min-w-[177.77vw] min-w-[400vw]"></iframe>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center">
                    <div className="">
                        <h4 className="font-bold lg:leading-normal leading-normal text-white text-4xl lg:text-7xl mb-5">Create AI videos <br/> from <span className="bg-gradient-to-br from-amber-400 to-fuchsia-600 text-transparent bg-clip-text"> just text.</span> </h4>
                        <p className="text-white/70 text-lg max-w-xl mx-auto">Artificial intelligence makes it fast easy to create content for your blog, social media, website, and more!</p>

                        <div className="mt-6">
                            <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded-md">Start Free Trail</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="pt-6">
            <BrandLogo/>
        </section>

        <section className="relative md:pb-24 pb-16">
            <AboutThree/>
            <Features classlist ="container relative md:mt-24 mt-16"/>
            <AboutOne />
            <AboutTwo/>
            <AiFeatures/>
            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Pricing Plans</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Artificial intelligence makes it fast easy to create content for your blog, social media, website, and more!</p>
                </div>
                <Pricing/>
            </div>
            <Clients/>
            <Blogs/>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}