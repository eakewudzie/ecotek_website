"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, ArrowRight } from "lucide-react";

export default function AdminLoginPage() {
    const [code, setCode] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        if (code === "admin123") {
            router.push("/admin/dashboard");
        } else {
            setError("Invalid login code");
        }

        setIsLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
            <div className="w-full max-w-md">
                <div className="bg-white dark:bg-slate-950 rounded-lg border p-8">
                    <div className="text-center mb-6">
                        <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary flex items-center justify-center">
                            <Lock className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <h2 className="text-2xl font-semibold">Admin Access</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                            Enter the admin login code to continue
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Input
                                type="password"
                                placeholder="Enter login code"
                                value={code}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCode(e.target.value)}
                                className="text-center text-lg tracking-widest"
                                disabled={isLoading}
                            />
                            {error && (
                                <p className="text-sm text-red-500 text-center">{error}</p>
                            )}
                        </div>
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isLoading || !code}
                        >
                            {isLoading ? (
                                "Verifying..."
                            ) : (
                                <>
                                    Access Dashboard
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </>
                            )}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
} 