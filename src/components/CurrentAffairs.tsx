
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const CurrentAffairs = () => {
  const { language, t } = useLanguage();
  const [headlines, setHeadlines] = useState<string[]>([
    "New education policy focuses on skill development",
    "Government launches rural internet connectivity drive",
    "Digital literacy program to reach 10,000 villages",
    "Free coding courses for rural students announced",
    "New scholarships for girls in STEM fields"
  ]);
  
  const getLanguageClass = () => {
    if (language === 'hindi') return 'font-hindi';
    if (language === 'kannada') return 'font-kannada';
    return '';
  };

  // Simple animation effect for news ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlines((prev) => {
        const first = prev[0];
        const rest = prev.slice(1);
        return [...rest, first];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="w-full mb-8 bg-violet-400 border-black-200">
      <CardHeader className="pb-2">
        <CardTitle className={`flex items-center justify-center text-xl ${getLanguageClass()}`}>
          <Newspaper className="mr-2 h-5 w-5" />
          {t('currentAffairs')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-hidden h-24">
          <div className={`text-center py-4 ${getLanguageClass()}`}>
            <p className="font-medium">{headlines[0]}</p>
          </div>
        </div>
        <div className="mt-2 text-center">
          <Button 
            variant="outline" 
            size="sm"
            className={getLanguageClass()}
            onClick={() => window.open('https://www.inshorts.com/en/read', '_blank')}
          >
            {language === 'english' ? 'Read More' : 
             language === 'hindi' ? 'और पढ़ें' : 'ಇನ್ನಷ್ಟು ಓದಿ'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentAffairs;
