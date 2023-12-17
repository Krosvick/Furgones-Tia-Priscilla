"use client";

import { Navbar } from "~/app/_components/Navbar";
import { Sidebar } from "~/app/_components/Sidebar";
import { useState } from "react";
import Link from "next/link";

interface AdminLayoutProps {
    children: React.ReactNode;
}

export default function AdminLayout(props: AdminLayoutProps) {
    const drawerButton = (
        <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost drawer-button rounded-btn lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512">
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
            </svg>
        </label>
    );

    return (
        <main className="bg-gradient-to-r from-violet-600 to-indigo-600">
            <Navbar 
                title="Administración"
                showAuthInfo={true}
                className="bg-gray-100"
            />
            <Sidebar 
                sidebarItems={[
                    <Link href="/admin">Inicio</Link>,
                    <Link href="/admin/Apoderados">Apoderados</Link>,
                    <Link href="/admin/Furgones">Furgones</Link>,

                ]}
                sidebarButton={drawerButton}
            >
                {props.children}
            </Sidebar>
        </main>
    );
}