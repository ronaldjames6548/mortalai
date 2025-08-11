import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ClientsTwo(){
    return(
        <>
         <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What Our Users Say</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Artificial intelligence makes it fast easy to create content for your blog, social media, website, and more!</p>
                </div>
            </div>

            <div className="container-fluid relative overflow-hidden">
                <div className="grid grid-cols-1 mt-6">
                    <div className="slider relative overflow-hidden m-auto mb-4 before:content-[''] before:absolute before:top-0 before:start-0 before:z-2 after:content-[''] after:absolute after:top-0 after:end-0 after:z-2">
                        <div className="slide-track flex items-center">
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/01.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Thomas Israel</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I didnt know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/02.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">There are so many things I had to do with my old software that I just dont do at all with Mortail.Ai. Suspicious but I cant say I dont love it.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/03.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Carl Oliver</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">The best part about Mortail.Ai is every time I pay my employees, my bank balance doesnt go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/04.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Jill Webb</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I am trying to get a hold of someone in support,im in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/05.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I used to have to remit tax to the EU and with Mortail.Ai I somehow dont have to do that anymore. Nervous to travel there now though.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/06.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Janisha Doll</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">This is the fourth email ive sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/07.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Thomas Israel</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I didnt know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/08.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">There are so many things I had to do with my old software that I just dont do at all with Mortail.Ai. Suspicious but I cant say I dont love it.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/01.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Carl Oliver</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">The best part about Mortail.Ai is every time I pay my employees, my bank balance doesnt go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/02.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Jill Webb</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I am trying to get a hold of someone in support,im in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/03.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I used to have to remit tax to the EU and with Mortail.Ai I somehow dont have to do that anymore. Nervous to travel there now though.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/02.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Janisha Doll</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">This is the fourth email ive sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/05.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Thomas Israel</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I didnt know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/06.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">There are so many things I had to do with my old software that I just dont do at all with Mortail.Ai. Suspicious but I cant say I dont love it.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/07.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Carl Oliver</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">The best part about Mortail.Ai is every time I pay my employees, my bank balance doesnt go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/08.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Jill Webb</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I am trying to get a hold of someone in support,im in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/01.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I used to have to remit tax to the EU and with Mortail.Ai I somehow dont have to do that anymore. Nervous to travel there now though.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/02.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Janisha Doll</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">This is the fourth email ive sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/03.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Thomas Israel</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I didnt know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/02.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">There are so many things I had to do with my old software that I just dont do at all with Mortail.Ai. Suspicious but I cant say I dont love it.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/05.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Carl Oliver</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">The best part about Mortail.Ai is every time I pay my employees, my bank balance doesnt go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/06.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Jill Webb</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I am trying to get a hold of someone in support,im in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/07.jpg " width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I used to have to remit tax to the EU and with Mortail.Ai I somehow dont have to do that anymore. Nervous to travel there now though.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/08.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Janisha Doll</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">This is the fourth email ive sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/01.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Thomas Israel</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I didnt know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/02.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">There are so many things I had to do with my old software that I just dont do at all with Mortail.Ai. Suspicious but I cant say I dont love it.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/03.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Carl Oliver</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">The best part about Mortail.Ai is every time I pay my employees, my bank balance doesnt go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/02.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Jill Webb</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I am trying to get a hold of someone in support,im in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/05.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I used to have to remit tax to the EU and with Mortail.Ai I somehow dont have to do that anymore. Nervous to travel there now though.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/06.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Janisha Doll</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">This is the fourth email ive sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/07.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Thomas Israel</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I didnt know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/08.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">There are so many things I had to do with my old software that I just dont do at all with Mortail.Ai. Suspicious but I cant say I dont love it.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/01.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Carl Oliver</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">The best part about Mortail.Ai is every time I pay my employees, my bank balance doesnt go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/02.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Jill Webb</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I am trying to get a hold of someone in support,im in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="slide h-auto md:w-[360px] w-72 m-2">
                                <ul className="space-y-4">
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/03.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Barbara McIntosh</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">I used to have to remit tax to the EU and with Mortail.Ai I somehow dont have to do that anymore. Nervous to travel there now though.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
            
                                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                                        <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                                            <Image src="/images/client/02.jpg" width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""/>
            
                                            <div className="ps-4">
                                                <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">Janisha Doll</Link>
                                                <p className="text-slate-400">User</p>
                                            </div>
                                        </div>
            
                                        <div className="mt-6">
                                            <p className="text-slate-400">This is the fourth email ive sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-2">
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                                <li className="inline"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}