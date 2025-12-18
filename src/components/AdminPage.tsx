import { useState, useEffect } from 'react';
import { AdminDashboard } from './AdminDashboard';
import { AdminLogin } from './AdminLogin';
import { toast } from 'sonner';
import { api } from '../utils/api';

export function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState('');
  const [isCheckingSession, setIsCheckingSession] = useState(true);

  useEffect(() => {
    const verifySavedSession = async () => {
      const savedToken = localStorage.getItem('adminToken');
      if (!savedToken) {
        setIsCheckingSession(false);
        return;
      }

      try {
        await api.verifyAdmin(savedToken);
        setToken(savedToken);
        setIsAuthenticated(true);
      } catch {
        localStorage.removeItem('adminToken');
      } finally {
        setIsCheckingSession(false);
      }
    };

    verifySavedSession();
  }, []);

  const handleLogin = async (password: string) => {
    try {
      await api.verifyAdmin(password);
      localStorage.setItem('adminToken', password);
      setToken(password);
      setIsAuthenticated(true);
      toast.success('Welcome back!');
      return true;
    } catch {
      toast.error('Login failed');
      return false;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setToken('');
    setIsAuthenticated(false);
    toast.success('Logged out successfully');
  };

  if (isCheckingSession) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return <AdminDashboard onLogout={handleLogout} token={token} />;
}
