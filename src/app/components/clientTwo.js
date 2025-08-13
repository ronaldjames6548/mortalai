import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdStar } from '../assets/icons/vander';

export default function ClientsTwo() {
  return (
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
              {[...Array(10)].map((_, index) => (
                <div className="slide h-auto md:w-[360px] w-72 m-2" key={index}>
                  <ul className="space-y-4">
                    <li className="rounded-lg shadow dark:shadow-gray-800 p-6 border-b-4 border-amber-400">
                      <div className="flex items-center pb-6 border-b border-gray-200 dark:border-gray-800">
                        <Image src={`/images/client/0${(index % 8) + 1}.jpg`} width={64} height={64} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt="" />
                        <div className="ps-4">
                          <Link href="" className="text-lg hover:text-amber-400 duration-500 ease-in-out">{["Thomas Israel", "Barbara McIntosh", "Carl Oliver", "Jill Webb", "Barbara McIntosh", "Janisha Doll", "Thomas Israel", "Barbara McIntosh"][index % 8]}</Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>
                      <div className="mt-6">
                        <p className="text-slate-400">{["I didn't know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!", "There are so many things I had to do with my old software that I just don't do at all with Mortail.Ai. Suspicious but I can't say I don't love it.", "The best part about Mortail.Ai is every time I pay my employees, my bank balance doesn't go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.", "I am trying to get a hold of someone in support, I'm in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.", "I used to have to remit tax to the EU and with Mortail.Ai I somehow don't have to do that anymore. Nervous to travel there now though.", "This is the fourth email I've sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.", "I didn't know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!", "There are so many things I had to do with my old software that I just don't do at all with Mortail.Ai. Suspicious but I can't say I don't love it."][index % 8]}</p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <li className="inline" key={i}><MdStar /></li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}