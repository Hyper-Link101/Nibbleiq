import { useState, useEffect } from 'react';
import { AdminDashboard } from './AdminDashboard';
import { AdminLogin } from './AdminLogin';
import { toast } from 'sonner';

export function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
    // Check for existing session in localStorage
    const savedToken = localStorage.getItem('adminToken');
    if (savedToken === 'nibbleiq2024') {
      setToken(savedToken);
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (password: string) => {
    localStorage.setItem('adminToken', password);
    setToken(password);
    setIsAuthenticated(true);
    toast.success('Welcome back!');
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setToken('');
    setIsAuthenticated(false);
    toast.success('Logged out successfully');
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return <AdminDashboard onLogout={handleLogout} token={token} />;
}