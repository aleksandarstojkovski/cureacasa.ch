import React, { useState } from 'react';
import { Menu, X, Phone, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-primary-50">
            <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
                {/* Logo/Brand */}
                <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
                    <img src="/src/assets/logo-icon.png" alt="Logo" className="h-10 w-auto" />
                    <img src="/src/assets/logo-text.png" alt="Cure a Casa" className="h-9 w-auto" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link to="/" className="text-slate-600 hover:text-primary-700 font-medium transition-colors">Home</Link>
                    <Link to="/about" className="text-slate-600 hover:text-primary-700 font-medium transition-colors">Chi Sono</Link>
                    <Link to="/services" className="text-slate-600 hover:text-primary-700 font-medium transition-colors">Servizi</Link>
                    <Link to="/contact" className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors flex items-center gap-2 font-medium">
                        <Phone className="h-4 w-4" />
                        Contatti
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-600 hover:text-primary-700"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-b border-slate-100 absolute w-full top-16 left-0 p-4 shadow-lg flex flex-col gap-4">
                    <Link
                        to="/"
                        className="text-slate-600 hover:text-teal-700 py-2 border-b border-slate-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="text-slate-600 hover:text-teal-700 py-2 border-b border-slate-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Chi Sono
                    </Link>
                    <Link
                        to="/services"
                        className="text-slate-600 hover:text-teal-700 py-2 border-b border-slate-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Servizi
                    </Link>
                    <Link
                        to="/contact"
                        className="text-primary-700 font-medium py-2 flex items-center gap-2"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Phone className="h-4 w-4" />
                        Contatti
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;
