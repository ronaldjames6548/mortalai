"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const Switcher = dynamic(() => import('../components/switcher'))

export default function Error(){
    return(
        <>
         <section className="relative overflow-hidden h-screen flex items-center bg-amber-400/5 dark:bg-amber-400/10">
            <div className="container relative">
                <div className="lg:flex justify-center">
                    <div className="lg:w-1/2">
                        <Link href="/">
                            <Image src="/images/logo-dark.png" width={127} height={24} className="mx-auto block dark:hidden" alt=""/>
                            <Image src="/images/logo-light.png" width={127} height={24} className="mx-auto dark:block hidden" alt=""/>
                        </Link>
                        <div className="mt-8">
                            <Image src="/images/error.svg" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="max-w-md mx-auto" alt=""/>

                            <div className="text-center">
                                <h5 className="mb-4 md:text-5xl text-3xl md:leading-normal leading-normal tracking-wider font-bold">Page Not Found</h5>
                                <p className="text-slate-400 dark:text-white/70 max-w-xl mx-auto">Artificial intelligence makes it fast easy to create content for your blog, social media, website, and more!</p>
                            
                                <div className="mt-6">
                                    <Link href="/" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded-md">Back to Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Switcher/>
        </>
    )
}