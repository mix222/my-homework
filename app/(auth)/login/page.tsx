"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-lg bg-white p-8 shadow-md"
      >
        <h1 className="mb-6 text-center text-2xl font-bold">ເຂົ້າສູ່ລະບົບ</h1>

        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium">ອີເມວ</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded border p-2"
            placeholder="admin@example.com"
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium">ລະຫັດຜ່ານ</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded border p-2"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700"
        >
          ເຂົ້າສູ່ລະບົບ
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          ຍັງບໍ່ມີບັນຊີ?{" "}
          <Link
            href="/register"
            className="font-medium text-blue-600 hover:underline"
          >
            ສະໝັກສະມາຊິກ (ລົງທະບຽນ)
          </Link>
        </p>
      </form>
    </div>
  );
}