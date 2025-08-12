// src/app/[locale]/blog-detail/[id]/page.js
'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useTranslations, useLocale } from 'next-intl';

// Corrected component imports
const Navbar = dynamic(() => import('../../../components/navbar'));
const Footer = dynamic(() => import('../../../components/footer'));
const Switcher = dynamic(() => import('../../../components/switcher'));

// Corrected data import (assuming src/data/data.js)
import { blogData } from '../../../data/data';

// Corrected icon imports
import { FiHeart, FiMessageCircle, FiUser, FiMail } from '../../../assets/icons/vander';
import { Share2 } from 'react-feather'; // Added react-feather import

export default function BlogDetail({ params }) {
  const t = useTranslations('blog');
  const locale = useLocale();
  const data = blogData.find((blog) => blog.id === params.id) || {
    title: t('defaultTitle'),
    content: t('defaultContent'),
    client: '/images/client/01.jpg',
    author: 'Unknown Author',
    date: 'Unknown Date',
    image: '/images/blog/default.jpg',
  };

  useEffect(() => {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }, []);

  return (
    <>
      <Navbar />
      <section className="relative md:pt-44 pt-36 bg-gradient-to-b from-amber-400/20 dark:from-amber-400/40 to-transparent">
        <div className="container relative">
          <div className="md:flex justify-center">
            <div className="lg:w-2/3 md:w-4/5">
              <Link
                href={`/${locale}/blog`}
                className="bg-amber-400 text-white text-[12px] font-semibold px-2.5 py-0.5 rounded h-5"
              >
                {t('category') || 'AI'}
              </Link>
              <h5 className="md:text-4xl text-3xl font-bold md:tracking-normal tracking-normal md:leading-normal leading-normal mt-3">
                {data.title}
              </h5>
              <p className="text-slate-400 text-lg mt-3">{t('intro') || data.content}</p>

              <div className="flex items-center mt-5">
                <Image src={data.client} width={48} height={48} className="h-12 w-12 rounded-full" alt="" />
                <div className="ms-2">
                  <h6>
                    <Link href={`/${locale}/author/${data.authorId || ''}`} className="font-medium hover:text-amber-400">
                      {data.author}
                    </Link>
                    <Link
                      href={`/${locale}/follow/${data.authorId || ''}`}
                      className="ms-1 text-green-600 font-medium"
                    >
                      <i className="mdi mdi-circle-medium"></i>
                      {t('follow') || 'Follow'}
                    </Link>
                  </h6>
                  <span className="text-slate-400 text-sm">
                    {data.date}
                    <span>
                      <i className="mdi mdi-circle-medium"></i>
                      {t('readTime') || '6 min read'}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative md:pb-24 pb-16 pt-7">
          <div className="container relative">
            <div className="md:flex justify-center">
              <div className="lg:w-2/3 md:w-4/5">
                <Image
                  src={data.image}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  className="rounded-md"
                  alt=""
                />

                <p className="text-slate-400 mt-4">{t('content1') || data.content}</p>
                <p className="text-slate-400 mt-4">{t('content2') || data.content}</p>

                <div className="relative rounded-md border-s-4 border-amber-400 px-6 py-10 mt-4">
                  <p className="text-2xl font-medium">{t('quote') || 'Its still not confirmed whether Google algorithm supports AI generated content or not'}</p>
                  <p className="text-slate-400 mt-4 text-end">{t('quoteAuthor') || '- Mortal.Ai'}</p>
                  <div className="absolute text-8xl -top-0 start-4 text-amber-500/10 dark:text-amber-500/20 -z-1">
                    <i className="mdi mdi-format-quote-open"></i>
                  </div>
                </div>
                <p className="text-slate-400 mt-4">{t('content3') || data.content}</p>

                <div className="flex justify-between py-4 border-y border-gray-100 dark:border-gray-700 mt-5">
                  <ul className="list-none">
                    <li className="inline">
                      <Link href="#" className="inline-flex items-center text-slate-400">
                        <FiHeart className="h-4 w-4 text-slate-900 dark:text-white hover:text-amber-400 me-1" />
                        {t('likes') || '233'}
                      </Link>
                    </li>
                    <li className="inline ms-2">
                      <Link href="#" className="inline-flex items-center text-slate-400">
                        <FiMessageCircle className="h-4 w-4 text-slate-900 dark:text-white hover:text-amber-400 me-1" />
                        {t('comments') || '08'}
                      </Link>
                    </li>
                  </ul>

                  <ul className="list-none">
                    <li className="inline">
                      <Link href="#" className="inline-flex items-center text-slate-400">
                        <Share2 className="h-4 w-4 text-slate-900 dark:text-white hover:text-amber-400" />
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h5 className="text-xl font-semibold">{t('commentsTitle') || 'Comments:'}</h5>

                  <div className="mt-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Image src="/images/client/02.jpg" width={44} height={44} className="h-11 w-11 rounded-full shadow" alt="" />
                        <div className="ms-3 flex-1">
                          <Link href="" className="font-semibold hover:text-amber-400 duration-500">
                            {t('comment1.author') || 'Calvin Carlo'}
                          </Link>
                          <p className="text-sm text-slate-400">{t('comment1.date') || 'August 26, 2023 at 01:25 pm'}</p>
                        </div>
                      </div>
                      <Link href="" className="text-slate-400 hover:text-amber-400 duration-500 ms-5">
                        <i className="mdi mdi-reply"></i> {t('reply') || 'Reply'}
                      </Link>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-800 mt-6">
                      <p className="text-slate-400 italic">{t('comment1.text') || 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour'}</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Image src="/images/client/03.jpg" width={44} height={44} className="h-11 w-11 rounded-full shadow" alt="" />
                        <div className="ms-3 flex-1">
                          <Link href="" className="font-semibold hover:text-amber-400 duration-500">
                            {t('comment2.author') || 'Calvin Carlo'}
                          </Link>
                          <p className="text-sm text-slate-400">{t('comment2.date') || 'August 26, 2023 at 01:25 pm'}</p>
                        </div>
                      </div>
                      <Link href="" className="text-slate-400 hover:text-amber-400 duration-500 ms-5">
                        <i className="mdi mdi-reply"></i> {t('reply') || 'Reply'}
                      </Link>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-800 mt-6">
                      <p className="text-slate-400 italic">{t('comment2.text') || 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour'}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h5 className="text-xl font-semibold">{t('leaveComment') || 'Leave A Comment:'}</h5>

                  <form className="mt-6">
                    <div className="grid lg:grid-cols-12 lg:gap-6">
                      <div className="lg:col-span-6 mb-5">
                        <div className="text-start">
                          <label htmlFor="name" className="font-semibold">
                            {t('form.name') || 'Your Name:'}
                          </label>
                          <div className="form-icon relative mt-2">
                            <FiUser className="w-4 h-4 absolute top-3 start-4" />
                            <input
                              name="name"
                              id="name"
                              type="text"
                              className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-amber-400 dark:border-gray-800 dark:focus:border-amber-400 focus:ring-0"
                              placeholder={t('form.namePlaceholder') || 'Name :'}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-6 mb-5">
                        <div className="text-start">
                          <label htmlFor="email" className="font-semibold">
                            {t('form.email') || 'Your Email:'}
                          </label>
                          <div className="form-icon relative mt-2">
                            <FiMail className="w-4 h-4 absolute top-3 start-4" />
                            <input
                              name="email"
                              id="email"
                              type="email"
                              className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-amber-400 dark:border-gray-800 dark:focus:border-amber-400 focus:ring-0"
                              placeholder={t('form.emailPlaceholder') || 'Email :'}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1">
                      <div className="mb-5">
                        <div className="text-start">
                          <label htmlFor="comments" className="font-semibold">
                            {t('form.comment') || 'Your Comment:'}
                          </label>
                          <div className="form-icon relative mt-2">
                            <FiMessageCircle className="w-4 h-4 absolute top-3 start-4" />
                            <textarea
                              name="comments"
                              id="comments"
                              className="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-amber-400 dark:border-gray-800 dark:focus:border-amber-400 focus:ring-0"
                              placeholder={t('form.commentPlaceholder') || 'Message :'}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      id="submit"
                      name="send"
                      className="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded-md w-full"
                    >
                      {t('form.submit') || 'Send Message'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <Footer />
          <Switcher />
        </>
      );
    }