"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Settings } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="font-bold text-2xl text-primary">Ecotek</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                        Home
                    </Link>
                    <Link href="/portfolio" className="text-sm font-medium transition-colors hover:text-primary">
                        Portfolio
                    </Link>
                    <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
                        Services
                    </Link>
                    <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                        About
                    </Link>
                    <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
                        Contact
                    </Link>
                    <Link href="/admin" className="text-sm font-medium transition-colors hover:text-primary flex items-center">
                        <Settings className="h-4 w-4 mr-1" />
                        Admin
                    </Link>
                    {/* <Button asChild>
                        <Link href="/portfolio">
                            View Work
                        </Link>
                    </Button> */}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t bg-background">
                    <nav className="container py-4 space-y-4">
                        <Link
                            href="/"
                            className="block text-sm font-medium transition-colors hover:text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/portfolio"
                            className="block text-sm font-medium transition-colors hover:text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Portfolio
                        </Link>
                        <Link
                            href="/services"
                            className="block text-sm font-medium transition-colors hover:text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Services
                        </Link>
                        <Link
                            href="/about"
                            className="block text-sm font-medium transition-colors hover:text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="block text-sm font-medium transition-colors hover:text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        <Link
                            href="/admin"
                            className="block text-sm font-medium transition-colors hover:text-primary flex items-center"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <Settings className="h-4 w-4 mr-1" />
                            Admin
                        </Link>
                        <Button asChild className="w-full">
                            <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)}>
                                View Work
                            </Link>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
} 