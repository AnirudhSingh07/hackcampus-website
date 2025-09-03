"use client";

import Image from "next/image";

export default function NotesPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-2xl lg:text-4xl font-mono font-bold mb-8 tracking-wider text-green-400">
          Study Notes
        </h1>

        {/* Render SVG from public folder */}
        <Image
          src="/notes.svg"
          alt="Notes"
          width={1500}
          height={800}
          className="mx-auto"
        />
      </div>
    </div>
  );
}
