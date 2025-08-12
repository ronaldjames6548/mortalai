"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic"
const Switcher = dynamic(() => import('../components/switcher'))

export default function ResetPassword(){
    return(
        <>
         <section className="relative overflow-hidden h-screen flex items-center bg-no-repeat bg-left bg-cover bg-fixed" style={{backgroundImage:"url('/images/bg/bg-ai.jpg')"}}>
            <div className="absolute inset-0 bg-slate-950/20"></div>
            <div className="container relative">
                <div className="md:flex justify-end">
                    <div className="lg:w-1/3 md:w-2/4">
                        <div className="rounded shadow bg-white dark:bg-slate-900 p-6">
                            <Link href="/">
                                <Image src="/images/logo-icon-64.png" width={64} height={64} alt=""/>
                            </Link>

                            <h5 className="mt-6 text-xl font-semibold">Forgot password</h5>

                            <p className="text-slate-400 mt-2">Please enter your email address. You will receive a link to create a new password via email.</p>

                            <form className="text-start mt-4">
                                <div className="grid grid-cols-1">
                                    <div className="mb-4">
                                        <label className="font-semibold" htmlFor="LoginEmail">Email Address:</label>
                                        <input id="LoginEmail" type="email" className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-amber-400 dark:border-gray-800 dark:focus:border-amber-400 focus:ring-0" placeholder="name@example.com"/>
                                    </div>
    
                                    <div className="mb-4">
                                        <input type="submit" className="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amberbg-amber-500 text-white rounded-md w-full" value="Send"/>
                                    </div>

                                    <div className="mb-4">
                                        <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-gray-800/5 hover:bg-gray-800 border-gray-800/10 hover:border-gray-800 text-gray-800 dark:text-white hover:text-white rounded-md w-full"><i className="mdi mdi-google"></i> Sign in with Google</Link>
                                    </div>
    
                                    <div className="text-center">
                                        <span className="text-slate-400 me-2">Remember your password ? </span> <Link href="/login" className="text-slate-900 dark:text-white font-bold inline-block">Sign in</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Switcher/>
        </>
    )
}