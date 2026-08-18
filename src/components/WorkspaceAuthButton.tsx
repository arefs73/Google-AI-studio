import React, { useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { initAuth, googleSignIn, logout, getAccessToken } from '../lib/auth';
import { LogIn, LogOut } from 'lucide-react';

export const WorkspaceAuthButton: React.FC = () => {
  const [needsAuth, setNeedsAuth] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    const unsubscribe = initAuth(
      (user, token) => {
        setUser(user);
        setToken(token);
        setNeedsAuth(false);
      },
      () => {
        setUser(null);
        setToken(null);
        setNeedsAuth(true);
      }
    );
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    setIsLoggingIn(true);
    try {
      const result = await googleSignIn();
      if (result) {
        setToken(result.accessToken);
        setUser(result.user);
        setNeedsAuth(false);
      }
    } catch (err) {
      console.error('Login failed:', err);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
    setToken(null);
    setNeedsAuth(true);
  };

  if (!needsAuth && user) {
    return (
      <button 
        onClick={handleLogout}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
        title={user.email || 'Logged in'}
      >
        <LogOut className="w-4 h-4" />
        <span className="hidden lg:inline">Sign Out</span>
      </button>
    );
  }

  return (
    <button 
      onClick={handleLogin}
      disabled={isLoggingIn}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors disabled:opacity-70"
    >
      <LogIn className="w-4 h-4" />
      <span className="hidden lg:inline">{isLoggingIn ? 'Connecting...' : 'Connect Workspace'}</span>
    </button>
  );
};
