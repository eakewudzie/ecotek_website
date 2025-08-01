"use client";

import Header from "@/components/Header";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                {children}
            </main>
        </>
    );
}