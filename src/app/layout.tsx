"use client";

import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/provider/Providers";
import SideBar from "@/components/SideBar";
import AdminHeader from "@/components/AdminHeader";
import { usePathname } from "next/navigation";


// export const metadata: Metadata = {
//     title: "Management Site",
//     description: "Generated by create next app",
// };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname()

    const isLogginPage = pathname === '/login'

    return (
        <html lang="en">
            <body>
                <Providers>
                    {!isLogginPage ? (
                        <div className="grid grid-cols-12 bg-gray-50">

                            <div className="col-span-2">
                                <SideBar />
                            </div>

                            <div className="col-span-10 flex flex-col">
                                <AdminHeader />
                                <div className="p-5">
                                    {children}
                                </div>
                            </div>

                        </div>
                    ) :
                        <div>
                            {children}
                        </div>
                    }
                </Providers>
            </body>
        </html>
    );
}
