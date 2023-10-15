'use client';

import React, { FC, useMemo } from 'react';
import headers from '@/const/headers';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePathname } from 'next/navigation';

interface IProps {}

/**
 * @author
 * @function @Header
 **/

export const Header: FC<IProps> = (props) => {
    const headerArray = useMemo(() => Object.values(headers), []);

    const pathname = usePathname();
    return (
        <header className="flex justify-end gap-6 w-full py-10 text-lg font-normal">
            <Link
                className={`mr-auto ${pathname === '/' ? 'text-blue-300' : ''}`}
                href="/"
            >
                Home
            </Link>
            {headerArray.map((header) => (
                <Link
                    className={`flex gap-2 items-center text-slate-500 hover:text-blue-300 ${
                        pathname === header.link ? 'text-blue-300' : ''
                    }`}
                    key={header.id}
                    href={header.link}
                >
                    {header.icon ? (
                        <FontAwesomeIcon
                            className="w-3.5 h-3.5"
                            icon={header.icon}
                        />
                    ) : null}
                    <span>{header.title}</span>
                </Link>
            ))}
        </header>
    );
};
