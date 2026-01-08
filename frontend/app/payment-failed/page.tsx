"use client";

import { useRouter } from "next/navigation";

export default function PaymentFailedPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-red-50 text-center">
      <h1 className="mb-4 text-3xl font-bold text-red-600">
        Payment Failed ❌
      </h1>

      <p className="text-gray-700">
        Something went wrong with your payment.
      </p>

      <p className="mt-1 text-gray-600">
        Please try again.
      </p>

      <button
        onClick={() => router.push("/payments")}
        className="mt-6 rounded-md bg-red-600 px-6 py-2 text-white transition hover:bg-red-700"
      >
        Go Back
      </button>
    </div>
  );
}
