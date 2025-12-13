import { useState } from 'react';
import { supabase } from '../utils/supabase/client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Loader2, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

export function AdminTroubleshoot() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [email, setEmail] = useState('Hello@nibbleiq.com');
  const [password, setPassword] = useState('Nibble@Blog25');

  // 1. Test Login
  const testLogin = async () => {
    setLoading(true);
    setResult(null);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;
      
      setResult({ type: 'success', message: 'Login Successful! Credentials are correct.' });
      toast.success('Login successful');
    } catch (error: any) {
      setResult({ type: 'error', message: `Login Failed: ${error.message}` });
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // 2. Create User (if missing)
  const createUser = async () => {
    setLoading(true);
    setResult(null);
    try {
      const projectId = 'rahxssemxrtoxcieqkcv';
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-94a4ef79/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to create user');
      }

      setResult({ type: 'success', message: 'User created successfully.' });
      toast.success('User created');
    } catch (error: any) {
      setResult({ type: 'error', message: `Creation Failed: ${error.message}` });
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // 3. Force Reset Password (if exists but broken)
  const resetUser = async () => {
    setLoading(true);
    setResult(null);
    try {
      const projectId = 'rahxssemxrtoxcieqkcv';
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-94a4ef79/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to reset password');
      }

      setResult({ type: 'success', message: 'Password reset & Email confirmed successfully.' });
      toast.success('User reset successful');
    } catch (error: any) {
      setResult({ type: 'error', message: `Reset Failed: ${error.message}` });
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <Card className="w-full max-w-lg shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl">Admin Access Troubleshooter</CardTitle>
          <CardDescription>
            Use this tool to diagnose and fix login issues.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <div className="grid gap-4 p-4 border rounded-lg bg-slate-50">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <Input value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>

          <Tabs defaultValue="test" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="test">1. Test Login</TabsTrigger>
              <TabsTrigger value="create">2. Create User</TabsTrigger>
              <TabsTrigger value="reset">3. Fix/Reset</TabsTrigger>
            </TabsList>
            
            <TabsContent value="test" className="space-y-4 mt-4">
              <p className="text-sm text-slate-500">
                Attempt to log in directly with these credentials.
              </p>
              <Button onClick={testLogin} disabled={loading} className="w-full">
                {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                Test Login Now
              </Button>
            </TabsContent>

            <TabsContent value="create" className="space-y-4 mt-4">
              <p className="text-sm text-slate-500">
                If the user does not exist yet, create it.
              </p>
              <Button onClick={createUser} disabled={loading} className="w-full" variant="secondary">
                {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                Create Admin User
              </Button>
            </TabsContent>

            <TabsContent value="reset" className="space-y-4 mt-4">
              <p className="text-sm text-slate-500">
                If the user exists but you cannot login, this will FORCE reset the password and confirm the email.
              </p>
              <Button onClick={resetUser} disabled={loading} className="w-full" variant="destructive">
                {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                Force Reset Password
              </Button>
            </TabsContent>
          </Tabs>

          {result && (
            <div className={`p-4 rounded-md flex items-start gap-3 ${
              result.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
            }`}>
              {result.type === 'success' ? (
                <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 shrink-0 mt-0.5" />
              )}
              <div className="space-y-1">
                <p className="font-medium">{result.type === 'success' ? 'Success' : 'Error'}</p>
                <p className="text-sm">{result.message}</p>
              </div>
            </div>
          )}

          {result?.type === 'success' && result.message.includes('Success') && (
            <Button asChild className="w-full mt-2" variant="outline">
              <a href="/admin">Go to Login Page</a>
            </Button>
          )}

        </CardContent>
      </Card>
    </div>
  );
}
