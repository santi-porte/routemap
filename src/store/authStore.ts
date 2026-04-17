import { create } from 'zustand';
import type { AuthUser } from '@/types/auth';

type AuthState = {
  user: AuthUser | null;
  setUser: (user: AuthUser | null) => void;
};

// Zustand auth store scaffold.
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
