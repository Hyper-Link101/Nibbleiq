import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Lock } from 'lucide-react';
import logoImage from 'figma:asset/9bb62c518e31aa9f806ab4341886470dd2d122c6.png';

interface AdminLoginProps {
  onLogin: (password: string) => Promise<boolean>;
}

export function AdminLogin({ onLogin }: AdminLoginProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const ok = await onLogin(password.trim());
      if (!ok) setError('Incorrect password');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 shadow-xl">
        <div className="text-center mb-8">
          <img src={logoImage} alt="NibbleIQ" className="h-12 mx-auto mb-6" width="192" height="48" />
          <h1 className="text-2xl mb-2 text-slate-900">Admin Login</h1>
          <p className="text-slate-600">Enter your password to access the admin panel</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="password">Password</Label>
            <div className="relative mt-2">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="pl-10"
                autoComplete="current-password"
              />
            </div>
            {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
            disabled={isSubmitting || password.trim().length === 0}
          >
            {isSubmitting ? 'Checking…' : 'Login to Admin Panel'}
          </Button>
        </form>
      </Card>
    </div>
  );
}
