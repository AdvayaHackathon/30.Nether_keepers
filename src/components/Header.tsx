
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import AuthButtons from './AuthButtons';
import SearchBar from './SearchBar';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const { language, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const getLanguageClass = () => {
    if (language === 'hindi') return 'font-hindi';
    if (language === 'kannada') return 'font-kannada';
    return '';
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/quizzes', label: 'Quizzes' },
    { to: '/tutors', label: 'Tutors' },
    { to: '/about', label: 'AboutUs' },
  ];

  return (
    <header className="w-full py-6 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-between w-full mb-4">
            <div className="flex-1 flex justify-start">
              <ThemeToggle />
            </div>
            <h1 className={`text-3xl md:text-4xl font-bold ${getLanguageClass()}`}>
              {t('siteName')}
            </h1>
            <div className="flex-1 flex justify-end">
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </Button>
              <div className="hidden md:flex">
                <AuthButtons />
              </div>
            </div>
          </div>
          
          <p className={`text-lg opacity-800 mb-4 ${getLanguageClass()}`}>
            {t('tagline')}
          </p>
          
          <SearchBar />
          
          <nav className="hidden md:block w-full mb-4">
            <ul className="flex flex-wrap justify-center gap-4">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to}
                    className={`hover:underline transition-colors ${getLanguageClass()}`}
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <LanguageToggle />
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-primary-foreground/20">
            <nav className="flex flex-col items-center space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.to}
                  to={link.to}
                  className={`text-lg ${getLanguageClass()}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t(link.label)}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex justify-center">
              <AuthButtons />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
