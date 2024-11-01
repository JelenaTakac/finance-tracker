import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, TrendingUp } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const linkClasses = ({ isActive }) =>
        `h-full flex items-center px-3 transition-colors duration-300 ${isActive ? "bg-primary text-white" : "text-primary hover:bg-primary hover:text-white"
        }`;

    return (
        <nav className="bg-white border-b border-light">
            <div className="px-4 lg:px-8">
                <div className="flex justify-between items-center h-12 md:h-16">
                    <div className="shrink-0">
                        <NavLink to="/" className="text-2xl text-primary"><TrendingUp /></NavLink>
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center h-full">
                        <NavLink to="/" className={linkClasses}>Home</NavLink>
                        <NavLink to="/transactions" className={linkClasses}>Transactions</NavLink>
                        <NavLink to="/transactionForm" className={linkClasses}>New Transaction</NavLink>
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-primary focus:outline-none">
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-12 left-0 right-0 md:hidden z-10">
                    <ul className="bg-white shadow-lg flex flex-col items-center py-2 space-y-4 border-t border-light">
                        <li><NavLink to="/" className="text-primary hover:text-secondary" onClick={toggleMenu}>Home</NavLink></li>
                        <li><NavLink to="/transactions" className="text-primary hover:text-secondary" onClick={toggleMenu}>Transactions</NavLink></li>
                        <li><NavLink to="/transactionForm" className="text-primary hover:text-secondary" onClick={toggleMenu}>New Transaction</NavLink></li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar