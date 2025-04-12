import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Languages, Check } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const LanguageToggle = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme } = useTheme();

  // Define text color class for better contrast in both modes
  const textColorClass = "text-gray-900 dark:text-gray-100";

  return (
    <div className="flex flex-col items-center mb-6">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Languages size={20} className="text-primary" />
        <span className={`text-sm font-medium ${textColorClass}`}>
          {t('selectLanguage')}
        </span>
      </div>
      <div className="flex flex-wrap gap-3 justify-center">
        <Button 
          variant={language === 'english' ? 'default' : 'outline'} 
          size="sm" 
          onClick={() => setLanguage('english')}
          className={`min-w-[90px] relative ${language !== 'english' ? 'bg-background/80 backdrop-blur-sm hover:bg-background/90' : ''}`}
        >
          {language === 'english' && (
            <Check size={14} className="absolute right-2" />
          )}
          {t('english')}
        </Button>
        <Button 
          variant={language === 'hindi' ? 'default' : 'outline'} 
          size="sm" 
          onClick={() => setLanguage('hindi')}
          className={`min-w-[90px] relative ${language === 'hindi' ? 'font-hindi' : ''} ${language !== 'hindi' ? 'bg-background/80 backdrop-blur-sm hover:bg-background/90' : ''}`}
        >
          {language === 'hindi' && (
            <Check size={14} className="absolute right-2" />
          )}
          {t('hindi')}
        </Button>
        <Button 
          variant={language === 'kannada' ? 'default' : 'outline'} 
          size="sm" 
          onClick={() => setLanguage('kannada')}
          className={`min-w-[90px] relative ${language === 'kannada' ? 'font-kannada' : ''} ${language !== 'kannada' ? 'bg-background/80 backdrop-blur-sm hover:bg-background/90' : ''}`}
        >
          {language === 'kannada' && (
            <Check size={14} className="absolute right-2" />
          )}
          {t('kannada')}
        </Button>
      </div>
    </div>
  );
};

export default LanguageToggle;
