import React, { FC } from 'react';
import { Header } from '@/components/Header';

interface IProps {
    children: React.ReactNode;
}

/**
 * @author
 * @function @Layout
 **/

export const Layout: FC<IProps> = ({ children }) => {
    return (
        <div className="flex-flex-col max-w-7xl mx-auto w-full h-full bg-gray-900">
            <Header />
            {children}
        </div>
    );
};
