import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Category } from '@/data/categories';
import * as LucideIcons from 'lucide-react';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { language, t } = useLanguage();
  
  const getLanguageClass = () => {
    if (language === 'hindi') return 'font-hindi';
    if (language === 'kannada') return 'font-kannada';
    return '';
  };

  // Create a mapping of icon names to their components
  const IconComponent = (LucideIcons as any)[category.icon];

  return (
    <a 
      href={category.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded-lg"
    >
      <Card className={`h-full ${category.color} border-2 border-transparent hover:border-primary transition-colors`}>
        <CardContent className="p-6 flex flex-col items-center text-center">
          {IconComponent && (
            <div className="w-12 h-12 mb-4 flex items-center justify-center text-primary">
              <IconComponent size={32} />
            </div>
          )}
          <h3 className={`text-xl font-bold mb-2 ${getLanguageClass()}`}>
            {t(category.translationKey)}
          </h3>
          <p className={`text-sm text-muted-foreground ${getLanguageClass()}`}>
            {t(category.descriptionKey)}
          </p>
        </CardContent>
      </Card>
    </a>
  );
};

export default CategoryCard;
