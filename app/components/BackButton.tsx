import Link from "next/link";

export default function BackButton({ target }: { target: string }) {
  return (
    <Link href={target}>
      <button
        type="button"
        className="w-full bg-gray-600 text-white p-2 mt-5 rounded hover:bg-gray-700 transition"
      >
        Back
      </button>
    </Link>
  );
}
