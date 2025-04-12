
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { PhoneCall, Mail, MapPin } from 'lucide-react';

// Sample tutor data
const tutors = [
  {
    id: 1,
    name: 'Rahul Sharma',
    expertise: ['Mathematics', 'Physics'],
    location: 'Delhi',
    contact: '+91-9876543210',
    email: 'rahul.sharma@example.com',
    available: true
  },
  {
    id: 2,
    name: 'Priya Patel',
    expertise: ['English', 'History'],
    location: 'Mumbai',
    contact: '+91-9876543211',
    email: 'priya.patel@example.com',
    available: true
  },
  {
    id: 3,
    name: 'Ankit Kumar',
    expertise: ['Computer Science', 'Mathematics'],
    location: 'Bangalore',
    contact: '+91-9876543212',
    email: 'ankit.kumar@example.com',
    available: true
  },
  {
    id: 4,
    name: 'Deepa Reddy',
    expertise: ['Biology', 'Chemistry'],
    location: 'Hyderabad',
    contact: '+91-9876543213',
    email: 'deepa.reddy@example.com',
    available: true
  },
  {
    id: 5,
    name: 'Raj Malhotra',
    expertise: ['Geography', 'Social Studies'],
    location: 'Chennai',
    contact: '+91-9876543214',
    email: 'raj.malhotra@example.com',
    available: false
  },
  {
    id: 6,
    name: 'Meena Iyer',
    expertise: ['Science', 'Environmental Studies'],
    location: 'Pune',
    contact: '+91-9876543215',
    email: 'meena.iyer@example.com',
    available: true
  }
];

const Tutors = () => {
  const { language, t } = useLanguage();
  
  const getLanguageClass = () => {
    if (language === 'hindi') return 'font-hindi';
    if (language === 'kannada') return 'font-kannada';
    return '';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <h1 className={`text-3xl font-bold mb-6 text-center ${getLanguageClass()}`}>
            {t('tutorsNearMe')}
          </h1>
          
          <div className="mb-8">
            <h2 className={`text-xl font-medium mb-4 ${getLanguageClass()}`}>
              {t('helplineNumber')}
            </h2>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <PhoneCall className="mr-2 h-5 w-5 text-primary" />
                  <span className={`font-medium ${getLanguageClass()}`}>
                    {t('educationalHelpline')}: 1800-XXX-XXXX
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutors.map((tutor) => (
              <Card key={tutor.id} className={tutor.available ? '' : 'opacity-60'}>
                <CardHeader>
                  <CardTitle className={getLanguageClass()}>
                    {tutor.name}
                    {!tutor.available && (
                      <span className="ml-2 text-sm text-muted-foreground">
                        ({t('unavailable')})
                      </span>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className={`text-sm font-medium text-muted-foreground ${getLanguageClass()}`}>
                      {t('expertise')}
                    </h3>
                    <p className={getLanguageClass()}>
                      {tutor.expertise.join(', ')}
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-1 text-muted-foreground" />
                    <span className={getLanguageClass()}>
                      {tutor.location}
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <PhoneCall className="h-4 w-4 mt-1 text-muted-foreground" />
                    <span>{tutor.contact}</span>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Mail className="h-4 w-4 mt-1 text-muted-foreground" />
                    <span>{tutor.email}</span>
                  </div>
                  
                  <Button 
                    disabled={!tutor.available} 
                    className={`w-full ${getLanguageClass()}`}
                  >
                    {t('contactTutor')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Tutors;
