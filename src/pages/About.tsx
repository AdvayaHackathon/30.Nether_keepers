
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';
import { Award, BookOpen, Brain, Target } from 'lucide-react';

const About = () => {
  const { language, t } = useLanguage();
  
  const getLanguageClass = () => {
    if (language === 'hindi') return 'font-hindi';
    if (language === 'kannada') return 'font-kannada';
    return '';
  };

  const benefits = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: 'accessibleEducation',
      description: 'accessibleEducationDesc'
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: 'skillDevelopment',
      description: 'skillDevelopmentDesc'
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: 'qualityResources',
      description: 'qualityResourcesDesc'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <h1 className={`text-3xl font-bold mb-6 text-center ${getLanguageClass()}`}>
            {t('aboutUs')}
          </h1>
          
          <section className="mb-10">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Target className="h-12 w-12 text-primary" />
                </div>
                
                <h2 className={`text-2xl font-bold mb-4 text-center ${getLanguageClass()}`}>
                  {t('ourMission')}
                </h2>
                
                <p className={`text-lg mb-4 ${getLanguageClass()}`}>
                  {t('missionStatement')}
                </p>
                
                <p className={`${getLanguageClass()}`}>
                  {t('missionDescription')}
                </p>
              </CardContent>
            </Card>
          </section>
          
          <section>
            <h2 className={`text-2xl font-bold mb-6 text-center ${getLanguageClass()}`}>
              {t('unnatiAdvantages')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4">
                      {benefit.icon}
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-2 ${getLanguageClass()}`}>
                      {t(benefit.title)}
                    </h3>
                    
                    <p className={`text-muted-foreground ${getLanguageClass()}`}>
                      {t(benefit.description)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
