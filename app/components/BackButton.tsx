import Link from "next/link";

export default function BackButton({ target }: { target: string }) {
  return (
    <Link href={target}>
      <button className="w-1/3 bg-gray-600 text-white py-2 mt-5 rounded hover:bg-gray-700 transition">
        Back
      </button>
    </Link>
  );
}
