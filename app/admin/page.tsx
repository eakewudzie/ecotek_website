"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, ArrowRight } from "lucide-react";
import { useAuth } from "@/components/auth/AuthProvider";
import { AuthProvider } from "@/components/auth/AuthProvider";

export default function AdminPage() {
    return (
        <AuthProvider>
            <AdminLoginPage />
        </AuthProvider>
    );
}

function AdminLoginPage() {
    const [code, setCode] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { login, isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            router.push("/admin/dashboard");
        }
    }, [isAuthenticated, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        if (login(code)) {
            router.push("/admin/dashboard");
        } else {
            setError("Invalid login code");
        }

        setIsLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
            <div className="w-full max-w-md">
                <div className="bg-white dark:bg-slate-950 rounded-xl border shadow-xl p-8">
                    <div className="text-center mb-8">
                        <div className="mx-auto mb-6 h-16 w-16 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                            <Lock className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <h2 className="text-3xl font-bold mb-2">Admin Access</h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Enter the admin login code to continue
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Input
                                type="password"
                                placeholder="Enter login code"
                                value={code}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCode(e.target.value)}
                                className="text-center text-lg tracking-widest h-12 border-2 focus:border-primary"
                                disabled={isLoading}
                            />
                            {error && (
                                <div className="flex items-center justify-center space-x-2 text-sm text-red-500">
                                    <div className="h-1 w-1 bg-red-500 rounded-full"></div>
                                    <span>{error}</span>
                                </div>
                            )}
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                            disabled={isLoading || !code}
                        >
                            {isLoading ? (
                                <div className="flex items-center space-x-2">
                                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    <span>Verifying...</span>
                                </div>
                            ) : (
                                <>
                                    Access Dashboard
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </>
                            )}
                        </Button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            Secure admin access for Ecotek Construction
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
} 