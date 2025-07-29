"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="font-bold text-2xl text-primary">Ecotek</span>
                    </Link>
                </div>

                <nav className="flex items-center space-x-6">
                    <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                        Home
                    </Link>
                    <Link href="/projects" className="text-sm font-medium transition-colors hover:text-primary">
                        Projects
                    </Link>
                    <Button asChild>
                        <Link href="/projects">
                            View Portfolio
                        </Link>
                    </Button>
                </nav>
            </div>
        </header>
    );
} 