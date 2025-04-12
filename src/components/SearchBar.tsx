import { useLanguage } from "@/context/LanguageContext";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useToast } from "@/components/ui/use-toast";
import categories from "@/data/categories";

const SearchBar = () => {
  const { language, t } = useLanguage();
  const { theme } = useTheme();
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();
  
  const getLanguageClass = () => {
    if (language === 'hindi') return 'font-hindi';
    if (language === 'kannada') return 'font-kannada';
    return '';
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) {
      toast({
        title: t('search'),
        description: "Please enter a search term",
        variant: "destructive"
      });
      return;
    }
    
    // Search through categories
    const results = categories.filter(cat => 
      t(cat.translationKey).toLowerCase().includes(query.toLowerCase()) ||
      t(cat.descriptionKey).toLowerCase().includes(query.toLowerCase())
    );
    
    setSearchResults(results);
    setShowResults(true);
    
    // Log search for analytics
    console.log("Searching for:", query, "Found:", results.length, "results");
    
    if (results.length === 0) {
      toast({
        title: t('search'),
        description: "No results found for your search",
        variant: "default" 
      });
    } else {
      toast({
        title: t('search'),
        description: `Found ${results.length} results`,
        variant: "default"
      });
    }
  };
  
  // Close results when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setShowResults(false);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Define text color based on theme for better contrast
  const textColorClass = "text-gray-900 dark:text-gray-100";
  const inputBgClass = "bg-white dark:bg-gray-800";

  return (
    <div className="w-full max-w-md mx-auto mb-6 relative" onClick={e => e.stopPropagation()}>
      <form onSubmit={handleSearch} className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
        <Input
          type="search"
          placeholder={t('search')}
          className={`pl-9 ${getLanguageClass()} ${textColorClass} ${inputBgClass} placeholder:text-gray-500 dark:placeholder:text-gray-400`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      
      {showResults && searchResults.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700">
          <ul className="py-1">
            {searchResults.map((result) => (
              <li key={result.id}>
                <a 
                  href={result.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${textColorClass}`}
                >
                  <div className="font-medium">{t(result.translationKey)}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{t(result.descriptionKey)}</div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
