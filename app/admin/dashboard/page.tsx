"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger
} from "@/components/ui/sidebar";
import {
    Home,
    Plus,
    Settings,
    LogOut,
    Building2,
    FileText,
    BarChart3,
    Users,
    Eye,
    Save,
    Trash2
} from "lucide-react";
import Link from "next/link";
import { useAuth, useRequireAuth } from "@/components/auth/AuthProvider";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { sampleProjects } from "@/data/projects";
import GalleryGrid from "@/components/GalleryGrid";

export default function AdminDashboardPage() {
    return (
        <AuthProvider>
            <AdminDashboard />
        </AuthProvider>
    );
}

function AdminDashboard() {
    const { logout } = useAuth();
    const { isAuthenticated, isLoading } = useRequireAuth();
    const [activeSection, setActiveSection] = useState("dashboard");
    const [newProject, setNewProject] = useState({
        name: "",
        image: "",
        date: "",
        location: ""
    });

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-lg">Loading...</div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return null;
    }

    const handleAddProject = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Project "${newProject.name}" would be added to the system`);
        setNewProject({ name: "", image: "", date: "", location: "" });
    };

    const renderDashboard = () => (
        <div className="space-y-6">
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

            {/* Recent Activity */}
            <div className="bg-white dark:bg-slate-950 rounded-lg border p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">New project &quot;Eco Tower&quot; added to portfolio</span>
                        <span className="text-xs text-gray-500 ml-auto">2 hours ago</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                        <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Portfolio updated with new images</span>
                        <span className="text-xs text-gray-500 ml-auto">1 day ago</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                        <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm">Contact form submission received</span>
                        <span className="text-xs text-gray-500 ml-auto">3 days ago</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderAddProject = () => (
        <div className="bg-white dark:bg-slate-950 rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-6">Add New Project</h2>
            <form onSubmit={handleAddProject} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Project Name
                        </label>
                        <Input
                            id="name"
                            value={newProject.name}
                            onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                            placeholder="Modern Office Complex"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium mb-2">
                            Location
                        </label>
                        <Input
                            id="location"
                            value={newProject.location}
                            onChange={(e) => setNewProject({ ...newProject, location: e.target.value })}
                            placeholder="New York, NY"
                            required
                        />
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="image" className="block text-sm font-medium mb-2">
                            Image URL
                        </label>
                        <Input
                            id="image"
                            type="url"
                            value={newProject.image}
                            onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                            placeholder="https://images.unsplash.com/..."
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium mb-2">
                            Completion Date
                        </label>
                        <Input
                            id="date"
                            type="date"
                            value={newProject.date}
                            onChange={(e) => setNewProject({ ...newProject, date: e.target.value })}
                            required
                        />
                    </div>
                </div>

                <div className="flex gap-4">
                    <Button type="submit" className="flex-1">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Project
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setNewProject({ name: "", image: "", date: "", location: "" })}>
                        Clear Form
                    </Button>
                </div>
            </form>
        </div>
    );

    const renderViewProjects = () => (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">All Projects</h2>
                <Button onClick={() => setActiveSection("add-project")}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Project
                </Button>
            </div>
            <div className="bg-white dark:bg-slate-950 rounded-lg border p-6">
                <GalleryGrid projects={sampleProjects} />
            </div>
        </div>
    );

    const renderSettings = () => (
        <div className="space-y-6">
            <div className="bg-white dark:bg-slate-950 rounded-lg border p-6">
                <h2 className="text-xl font-semibold mb-6">General Settings</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">Company Name</label>
                        <Input defaultValue="Ecotek Construction" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Contact Email</label>
                        <Input defaultValue="admin@ecotek.com" type="email" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Phone Number</label>
                        <Input defaultValue="+1 (555) 123-4567" />
                    </div>
                    <div className="flex gap-4">
                        <Button>
                            <Save className="h-4 w-4 mr-2" />
                            Save Changes
                        </Button>
                        <Button variant="outline">
                            Reset to Default
                        </Button>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-950 rounded-lg border p-6">
                <h2 className="text-xl font-semibold mb-6">Admin Settings</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">Admin Access Code</label>
                        <Input defaultValue="admin123" />
                    </div>
                    <div className="flex gap-4">
                        <Button variant="destructive">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Clear All Data
                        </Button>
                        <Button variant="outline">
                            Export Data
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <SidebarProvider>
            <div className="min-h-screen flex w-full">
                <Sidebar>
                    <SidebarHeader>
                        <div className="flex items-center space-x-2 p-4">
                            <Building2 className="h-6 w-6 text-primary" />
                            <span className="font-bold text-lg">Ecotek Admin</span>
                        </div>
                    </SidebarHeader>

                    <SidebarContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton onClick={() => setActiveSection("dashboard")}>
                                    <Home className="h-4 w-4" />
                                    <span>Dashboard</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton onClick={() => setActiveSection("view-projects")}>
                                    <Eye className="h-4 w-4" />
                                    <span>View Projects</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton onClick={() => setActiveSection("add-project")}>
                                    <Plus className="h-4 w-4" />
                                    <span>Add Project</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton onClick={() => setActiveSection("settings")}>
                                    <Settings className="h-4 w-4" />
                                    <span>Settings</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarContent>

                    <SidebarFooter>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/">
                                        <Home className="h-4 w-4" />
                                        <span>Back to Site</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton onClick={logout}>
                                    <LogOut className="h-4 w-4" />
                                    <span>Logout</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarFooter>
                </Sidebar>

                <main className="flex-1 p-6 bg-slate-50 dark:bg-slate-900">
                    <div className="mb-6 flex items-center space-x-4">
                        <SidebarTrigger />
                        <h1 className="text-2xl font-bold">
                            {activeSection === "dashboard" && "Admin Dashboard"}
                            {activeSection === "add-project" && "Add New Project"}
                            {activeSection === "view-projects" && "View All Projects"}
                            {activeSection === "settings" && "Settings"}
                        </h1>
                    </div>

                    {activeSection === "dashboard" && renderDashboard()}
                    {activeSection === "add-project" && renderAddProject()}
                    {activeSection === "view-projects" && renderViewProjects()}
                    {activeSection === "settings" && renderSettings()}
                </main>
            </div>
        </SidebarProvider>
    );
} 