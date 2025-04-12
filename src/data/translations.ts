
import { Language } from '@/context/LanguageContext';

const translations: Record<string, Record<Language, string>> = {
  // Header
  'siteName': {
    english: 'Unnati Learning',
    hindi: 'उन्नति लर्निंग',
    kannada: 'ಉನ್ನತಿ ಲರ್ನಿಂಗ್'
  },
  'tagline': {
    english: 'Knowledge for everyone, everywhere',
    hindi: 'हर किसी के लिए ज्ञान, हर जगह',
    kannada: 'ಎಲ್ಲರಿಗೂ, ಎಲ್ಲೆಡೆಯೂ ಜ್ಞಾನ'
  },

  // Language Selector
  'selectLanguage': {
    english: 'Select Language',
    hindi: 'भाषा चुनें',
    kannada: 'ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ'
  },
  'english': {
    english: 'English',
    hindi: 'अंग्रेज़ी',
    kannada: 'ಇಂಗ್ಲಿಷ್'
  },
  'hindi': {
    english: 'Hindi',
    hindi: 'हिंदी',
    kannada: 'ಹಿಂದಿ'
  },
  'kannada': {
    english: 'Kannada',
    hindi: 'कन्नड़',
    kannada: 'ಕನ್ನಡ'
  },

  // Category Titles
  'earlyLearning': {
    english: 'Early Learning',
    hindi: 'प्रारंभिक शिक्षा',
    kannada: 'ಪ್ರಾರಂಭಿಕ ಕಲಿಕೆ'
  },
  'stem': {
    english: 'STEM',
    hindi: 'विज्ञान और गणित',
    kannada: 'ವಿಜ್ಞಾನ ಮತ್ತು ಗಣಿತ'
  },
  'healthHygiene': {
    english: 'Health & Hygiene',
    hindi: 'स्वास्थ्य और स्वच्छता',
    kannada: 'ಆರೋಗ್ಯ ಮತ್ತು ನೈರ್ಮಲ್ಯ'
  },
  'skillDevelopment': {
    english: 'Skill Development',
    hindi: 'कौशल विकास',
    kannada: 'ಕೌಶಲ್ಯ ಅಭಿವೃದ್ಧಿ'
  },
  'ai': {
    english: 'AI Basics',
    hindi: 'AI की मूल बातें',
    kannada: 'AI ಮೂಲಾಂಶಗಳು'
  },
  'personalityDevelopment': {
    english: 'Personality Development',
    hindi: 'व्यक्तित्व विकास',
    kannada: 'ವ್ಯಕ್ತಿತ್ವ ವಿಕಸನ'
  },
  'motivation': {
    english: 'Motivation',
    hindi: 'प्रेरणा',
    kannada: 'ಪ್ರೇರಣೆ'
  },
  'spiritualGrowth': {
    english: 'Spiritual Growth',
    hindi: 'आध्यात्मिक विकास',
    kannada: 'ಆಧ್ಯಾತ್ಮಿಕ ಬೆಳವಣಿಗೆ'
  },
  'scholarships': {
    english: 'Scholarships',
    hindi: 'छात्रवृत्ति',
    kannada: 'ವಿದ್ಯಾರ್ಥಿವೇತನ'
  },
  'currentAffairs': {
    english: 'Current Affairs',
    hindi: 'समसामयिक घटनाक्रम',
    kannada: 'ಪ್ರಸ್ತುತ ವಿದ್ಯಮಾನಗಳು'
  },

  // Category Descriptions
  'earlyLearningDesc': {
    english: 'Alphabet, Numbers, Basic Math, English, and Science',
    hindi: 'वर्णमाला, अंक, बुनियादी गणित, अंग्रेजी और विज्ञान',
    kannada: 'ಅಕ್ಷರಮಾಲೆ, ಸಂಖ್ಯೆಗಳು, ಮೂಲ ಗಣಿತ, ಇಂಗ್ಲಿಷ್ ಮತ್ತು ವಿಜ್ಞಾನ'
  },
  'stemDesc': {
    english: 'Books from basic to advanced level',
    hindi: 'बुनियादी से उन्नत स्तर तक की किताबें',
    kannada: 'ಮೂಲದಿಂದ ಉನ್ನತ ಮಟ್ಟದವರೆಗೆ ಪುಸ್ತಕಗಳು'
  },
  'healthHygieneDesc': {
    english: 'Book links on health and hygiene',
    hindi: 'स्वास्थ्य और स्वच्छता पर पुस्तक लिंक',
    kannada: 'ಆರೋಗ್ಯ ಮತ್ತು ನೈರ್ಮಲ್ಯದ ಬಗ್ಗೆ ಪುಸ್ತಕ ಲಿಂಕ್‌ಗಳು'
  },
  'skillDevelopmentDesc': {
    english: 'Free courses from NPTEL, Apna College & more',
    hindi: 'NPTEL, अपना कॉलेज और अन्य से मुफ्त कोर्स',
    kannada: 'NPTEL, ಅಪ್ನಾ ಕಾಲೇಜು ಮತ್ತು ಇತರರಿಂದ ಉಚಿತ ಕೋರ್ಸ್‌ಗಳು'
  },
  'aiDesc': {
    english: 'Beginner-friendly content on AI',
    hindi: 'AI पर शुरुआती-अनुकूल सामग्री',
    kannada: 'AI ಕುರಿತು ಪ್ರಾರಂಭಿಕರಿಗೆ ಸ್ನೇಹಿ ವಿಷಯಗಳು'
  },
  'personalityDevelopmentDesc': {
    english: 'Govt of India Digital Library',
    hindi: 'भारत सरकार का डिजिटल पुस्तकालय',
    kannada: 'ಭಾರತ ಸರ್ಕಾರದ ಡಿಜಿಟಲ್ ಲೈಬ್ರರಿ'
  },
  'motivationDesc': {
    english: 'Biographies of Abdul Kalam, MK Gandhi, Anne Frank & more',
    hindi: 'अब्दुल कलाम, महात्मा गांधी, ऐनी फ्रैंक और अन्य की जीवनियाँ',
    kannada: 'ಅಬ್ದುಲ್ ಕಲಾಮ್, ಎಂಕೆ ಗಾಂಧಿ, ಆನ್ ಫ್ರಾಂಕ್ ಮತ್ತು ಇತರರ ಜೀವನಚರಿತ್ರೆಗಳು'
  },
  'spiritualGrowthDesc': {
    english: 'Biography of BGS',
    hindi: 'BGS की जीवनी',
    kannada: 'BGS ಜೀವನಚರಿತ್ರೆ'
  },
  'scholarshipsDesc': {
    english: 'State-wise scholarship links',
    hindi: 'राज्यवार छात्रवृत्ति लिंक',
    kannada: 'ರಾಜ್ಯವಾರು ವಿದ್ಯಾರ್ಥಿವೇತನ ಲಿಂಕ್‌ಗಳು'
  },
  'currentAffairsDesc': {
    english: 'Latest news and updates',
    hindi: 'नवीनतम समाचार और अपडेट',
    kannada: 'ಇತ್ತೀಚಿನ ಸುದ್ದಿ ಮತ್ತು ಅಪ್ಡೇಟ್‌ಗಳು'
  },

  // Footer
  'footerText': {
    english: '© 2025 Unnati Learning - Knowledge for everyone, everywhere',
    hindi: '© 2025 उन्नति लर्निंग - हर किसी के लिए ज्ञान, हर जगह',
    kannada: '© 2025 ಉನ್ನತಿ ಲರ್ನಿಂಗ್ - ಎಲ್ಲರಿಗೂ, ಎಲ್ಲೆಡೆಯೂ ಜ್ಞಾನ'
  }
};

export default translations;
