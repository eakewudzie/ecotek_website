import { Button } from "@/components/ui/button";
import { ArrowLeft, Settings, Users, FileText, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function AdminDashboardPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
            {/* Header */}
            <div className="border-b bg-white dark:bg-slate-950">
                <div className="container px-4 md:px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Button variant="ghost" asChild>
                                <Link href="/" className="flex items-center space-x-2">
                                    <ArrowLeft className="h-4 w-4" />
                                    <span>Back to Site</span>
                                </Link>
                            </Button>
                            <div className="h-6 w-px bg-gray-300 dark:bg-gray-700" />
                            <h1 className="text-xl font-semibold">Admin Dashboard</h1>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-500">Admin</span>
                            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                                <span className="text-primary-foreground font-bold text-sm">A</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container px-4 md:px-6 py-8">
                <div className="grid gap-6">
                    {/* Welcome Section */}
                    <div className="bg-white dark:bg-slate-950 rounded-lg border p-6">
                        <h2 className="text-xl font-semibold mb-4">Welcome to Admin Dashboard</h2>
                        <p className="text-lg">Hello World! This is the admin dashboard.</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                            This is where you&apos;ll manage your construction projects and website content.
                        </p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <div className="bg-white dark:bg-slate-950 rounded-lg border p-6">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-sm font-medium">Total Projects</h3>
                                <FileText className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <div className="text-2xl font-bold">6</div>
                            <p className="text-xs text-muted-foreground">
                                Active construction projects
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-950 rounded-lg border p-6">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-sm font-medium">Categories</h3>
                                <BarChart3 className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <div className="text-2xl font-bold">5</div>
                            <p className="text-xs text-muted-foreground">
                                Different project types
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-950 rounded-lg border p-6">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-sm font-medium">Team Members</h3>
                                <Users className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <div className="text-2xl font-bold">12</div>
                            <p className="text-xs text-muted-foreground">
                                Construction professionals
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-950 rounded-lg border p-6">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-sm font-medium">Settings</h3>
                                <Settings className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <div className="text-2xl font-bold">-</div>
                            <p className="text-xs text-muted-foreground">
                                Configuration options
                            </p>
                        </div>
                    </div>

                    {/* Placeholder for future features */}
                    <div className="bg-white dark:bg-slate-950 rounded-lg border p-6">
                        <h2 className="text-xl font-semibold mb-4">Coming Soon</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Project management, content editing, and analytics features will be added here.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
} 