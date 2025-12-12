import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminDashboard } from './AdminDashboard';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Lock, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check for existing session
    const session = sessionStorage.getItem('nibbleiq_admin_session');
    if (session === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call for login
    setTimeout(() => {
      if (password === 'admin123') { // Simple hardcoded password for demo
        sessionStorage.setItem('nibbleiq_admin_session', 'true');
        setIsAuthenticated(true);
        toast.success('Welcome back!');
      } else {
        toast.error('Invalid password');
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('nibbleiq_admin_session');
    setIsAuthenticated(false);
    toast.success('Logged out successfully');
  };

  if (isLoading && !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <Card className="w-full max-w-md shadow-lg border-slate-200">
          <CardHeader className="text-center space-y-2">
            <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-2">
              <Lock className="w-6 h-6 text-orange-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-slate-900">Admin Login</CardTitle>
            <CardDescription>Enter your credentials to access the dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-11"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full h-11 bg-orange-600 hover:bg-orange-700 text-white font-medium"
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <AdminDashboard onLogout={handleLogout} />;
}