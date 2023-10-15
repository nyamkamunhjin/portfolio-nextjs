'use client';

import React, { FC } from 'react';
import about from '@/const/about';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface IProps {}

const Home: FC<IProps> = (props) => {
    return (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
            <div className="flex flex-col gap-8 m-auto">
                <motion.p
                    className="text-4xl"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                delay: 0,
                                duration: 1,
                            },
                        },
                    }}
                    dangerouslySetInnerHTML={{ __html: about.hero.title }}
                ></motion.p>

                <motion.p
                    className="text-4xl text-gray-400"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                delay: 0.1,
                                duration: 1,
                            },
                        },
                    }}
                >
                    {about.hero.description}
                </motion.p>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                delay: 0.2,
                                duration: 1,
                            },
                        },
                    }}
                >
                    <Link
                        href="/contact"
                        className="w-56 text-xl bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-500"
                    >
                        Contact me 🙌
                    </Link>
                </motion.div>
            </div>
            <motion.div
                className="m-10 shadow-xl border border-gray-700 rounded-lg overflow-hidden"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            delay: 0.3,
                            duration: 1,
                        },
                    },
                }}
            >
                <Image
                    className="w-full object-cover"
                    width={1200}
                    height={1200}
                    src={about.hero.image}
                    alt="Hero Image"
                />
            </motion.div>
        </div>
    );
};

export default Home;
