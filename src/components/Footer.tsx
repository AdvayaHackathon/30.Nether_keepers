import { useLanguage } from '@/context/LanguageContext';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  const { language, t } = useLanguage();
  
  const getLanguageClass = () => {
    if (language === 'hindi') return 'font-hindi';
    if (language === 'kannada') return 'font-kannada';
    return '';
  };

  return (
    <footer className="w-full py-6 px-4 mt-8 border-t">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-left">
            <p className={`text-sm text-muted-foreground ${getLanguageClass()}`}>
              {t('footerText')}
            </p>
          </div>
          <div className="text-right">
            <h3 className={`text-sm font-semibold mb-2 ${getLanguageClass()} text-gray-900 dark:text-gray-100`}>
              {t('contactUs')}
            </h3>
            <div className="flex flex-col md:items-end">
              <a href="mailto:contact@unnatilearning.org" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span className={getLanguageClass()}>contact@unnatilearning.org</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span className={getLanguageClass()}>+91 9876543210</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
