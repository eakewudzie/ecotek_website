"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { checkAuthCode, setAuthStatus, getAuthStatus } from "@/lib/auth";

interface AuthContextType {
    isAuthenticated: boolean;
    login: (code: string) => boolean;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Check if user is already authenticated on page load
        const authStatus = getAuthStatus();
        setIsAuthenticated(authStatus);
        setIsLoading(false);
    }, []);

    const login = (code: string): boolean => {
        if (checkAuthCode(code)) {
            setIsAuthenticated(true);
            setAuthStatus(true);
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAuthenticated(false);
        setAuthStatus(false);
        router.push("/admin");
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

// Hook for protected routes
export function useRequireAuth() {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push("/admin");
        }
    }, [isAuthenticated, isLoading, router]);

    return { isAuthenticated, isLoading };
}