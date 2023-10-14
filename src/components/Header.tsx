import React, { FC, useMemo } from 'react';
import headers from '@/const/headers';
import Link from 'next/link';

interface IProps {}

/**
 * @author
 * @function @Header
 **/

export const Header: FC<IProps> = (props) => {
    const headerArray = useMemo(() => Object.values(headers), []);

    return (
        <header className="flex justify-end gap-4 w-full border border-green-300 p-4 text-base">
            {headerArray.map((header) => (
                <Link key={header.id} href={header.link}>
                    {header.title}
                </Link>
            ))}
        </header>
    );
};
