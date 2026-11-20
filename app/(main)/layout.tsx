"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = "auth_token=; path=/; max-age=0";
    router.push("/login");
  };

  const isDashboardActive = pathname === "/dashboard";
  const isProductsActive = pathname.startsWith("/products");

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="flex w-64 flex-col bg-gray-900 p-6 text-white">
        <h2 className="mb-8 text-xl font-bold">ລະບົບຈັດການ</h2>

        <nav className="flex flex-1 flex-col space-y-3">
          <Link
            href="/dashboard"
            className={`flex items-center gap-2 rounded-lg px-3 py-2.5 font-medium transition ${
              isDashboardActive
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            <span>📊</span>
            <span>Dashboard</span>
          </Link>

          <Link
            href="/products"
            className={`flex items-center gap-2 rounded-lg px-3 py-2.5 font-medium transition ${
              isProductsActive
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            <span>📦</span>
            <span>Products</span>
          </Link>

          <div className="mt-auto flex flex-col space-y-2 pt-4">
            <ThemeToggle />

            <button
              type="button"
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-left font-medium text-red-400 transition hover:bg-gray-800 hover:text-red-300"
            >
              <span>🚪</span>
              <span>ອອກຈາກລະບົບ</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Content Area */}
      <main className="flex-1 bg-gray-50 p-8 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        {children}
      </main>
    </div>
  );
}