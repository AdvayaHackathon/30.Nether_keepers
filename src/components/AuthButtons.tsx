import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { LogIn, UserPlus } from "lucide-react";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const AuthButtons = () => {
  const { language, t } = useLanguage();
  const { theme } = useTheme();
  const [isLogin, setIsLogin] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const getLanguageClass = () => {
    if (language === 'hindi') return 'font-hindi';
    if (language === 'kannada') return 'font-kannada';
    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      toast({
        title: isLogin ? t('login') : t('signup'),
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: isLogin ? t('login') : t('signup'),
        description: "Please enter a valid email",
        variant: "destructive"
      });
      return;
    }
    
    // Password validation for signup
    if (!isLogin) {
      if (password.length < 6) {
        toast({
          title: t('signup'),
          description: "Password must be at least 6 characters",
          variant: "destructive"
        });
        return;
      }
      
      if (password !== confirmPassword) {
        toast({
          title: t('signup'),
          description: "Passwords don't match",
          variant: "destructive"
        });
        return;
      }
    }
    
    // Success handling
    if (isLogin) {
      // In a real app, this would call an API
      console.log("Login:", email, password);
      
      // Simulate successful login
      localStorage.setItem('unnatiUser', JSON.stringify({ email }));
      
      toast({
        title: t('login'),
        description: "Login successful!",
      });
      
      setIsDialogOpen(false);
      navigate('/'); // Navigate to home page
    } else {
      // In a real app, this would call an API
      console.log("Signup:", email, password);
      
      // Simulate successful signup
      localStorage.setItem('unnatiUser', JSON.stringify({ email }));
      
      toast({
        title: t('signup'),
        description: "Account created successfully!",
      });
      
      setIsDialogOpen(false);
      navigate('/'); // Navigate to home page
    }
  };

  // Define text color classes that work in both light and dark mode
  const textColorClass = "text-gray-900 dark:text-gray-100";
  const labelClass = "text-gray-800 dark:text-gray-200";
  const inputClass = "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100";

  return (
    <div className="flex gap-2">
      <Dialog open={isDialogOpen && isLogin} onOpenChange={(open) => {
        setIsDialogOpen(open);
        if (open) setIsLogin(true);
      }}>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" onClick={() => {
            setIsLogin(true);
            setIsDialogOpen(true);
          }} className="bg-background/130 backdrop-blur-sm hover:bg-background/20">
            <LogIn className="mr-2 h-4 w-4" />
            <span className={`${getLanguageClass()} ${textColorClass}`}>{t('login')}</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className={`${getLanguageClass()} ${textColorClass}`}>
              {t('login')}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="email" className={`${getLanguageClass()} ${labelClass}`}>{t('email')}</Label>
              <Input 
                id="email" 
                type="email" 
                required 
                className={inputClass} 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className={`${getLanguageClass()} ${labelClass}`}>{t('password')}</Label>
              <Input 
                id="password" 
                type="password" 
                required 
                className={inputClass}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center pt-2">
              <Button 
                type="button" 
                variant="link" 
                onClick={() => {
                  setIsLogin(false);
                  setIsDialogOpen(false);
                  setTimeout(() => setIsDialogOpen(true), 0);
                }}
                className={`${getLanguageClass()} ${textColorClass}`}
              >
                {t('needAccount')}
              </Button>
              <Button type="submit" className={getLanguageClass()}>
                {t('login')}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={isDialogOpen && !isLogin} onOpenChange={(open) => {
        setIsDialogOpen(open);
        if (open) setIsLogin(false);
      }}>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" onClick={() => {
            setIsLogin(false);
            setIsDialogOpen(true);
          }} className="bg-background/130 backdrop-blur-sm hover:bg-background/20">
            <UserPlus className="mr-2 h-4 w-4" />
            <span className={`${getLanguageClass()} ${textColorClass}`}>{t('signup')}</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className={`${getLanguageClass()} ${textColorClass}`}>
              {t('signup')}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="email-signup" className={`${getLanguageClass()} ${labelClass}`}>{t('email')}</Label>
              <Input 
                id="email-signup" 
                type="email" 
                required 
                className={inputClass}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password-signup" className={`${getLanguageClass()} ${labelClass}`}>{t('password')}</Label>
              <Input 
                id="password-signup" 
                type="password" 
                required 
                className={inputClass}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password-signup" className={`${getLanguageClass()} ${labelClass}`}>{t('confirmPassword')}</Label>
              <Input 
                id="confirm-password-signup" 
                type="password" 
                required 
                className={inputClass}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center pt-2">
              <Button 
                type="button" 
                variant="link" 
                onClick={() => {
                  setIsLogin(true);
                  setIsDialogOpen(false);
                  setTimeout(() => setIsDialogOpen(true), 0);
                }}
                className={`${getLanguageClass()} ${textColorClass}`}
              >
                {t('haveAccount')}
              </Button>
              <Button type="submit" className={getLanguageClass()}>
                {t('signup')}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AuthButtons;
