import { FC, ReactNode } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

interface ILayout {
    children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
    return (
        <div>
            {/* Left Sidebar */}
            <Sidebar />

            {/* Body */}
            <Navbar />
            {children}
            <Footer />
            {/* Body */}
        </div>
    );
};

export default Layout;
