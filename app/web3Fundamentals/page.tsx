"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/context/AuthContext";

export default function BootcampsPage() {
  const { role } = useAuth();
  const showButton = role === "DevRel / Head of ecosystem" || role === "Community Lead";

  // Google Drive Notes Link
  const notesLink =
    "https://drive.google.com/file/d/1mQ836Jja59XuI4lKM3XlFgQbt1hPtL7R/view?usp=drive_link";

  // Bootcamp data (add as many as you want)
  const bootcamps = [
    {
      title: "WEB3 Work Culture",
      level: "BEGINNER",
      youtubeLink: "https://youtu.be/_boLwTOycDk",
    },
    {
      title: "What is Web1?",
      level: "BEGINNER",
      youtubeLink: "https://youtu.be/XFGVUzVjsA0",
    },
    {
      title: "What is Web2?",
      level: "BEGINNER",
      youtubeLink: "https://youtu.be/vecipKp5IBY",
    },
    {
      title: "What is Web3?",
      level: "BEGINNER",
      youtubeLink: "https://youtu.be/0pp0Ou1j7mg",
    },
    {
      title: "What is Ledger?",
      level: "BEGINNER",
      youtubeLink: "https://youtu.be/HjyUXW4UMJc",
    },
    {
      title: "What is Encryption?",
      level: "BEGINNER",
      youtubeLink: "https://youtu.be/mZFx59EaSfg",
    },
    {
      title: "What is Hashing?",
      level: "BEGINNER",
      youtubeLink: "https://youtu.be/2ZGEGZv_qU8",
    },
    {
      title: "What is BlockChain?",
      level: "BEGINNER",
      youtubeLink: "https://youtu.be/4U4qLbl-W_0",
    },
    {
      title: "Prerequisites of Wallet",
      level: "BEGINNER",
      youtubeLink: "https://youtu.be/HTLXvjOhNXg",
    },
    {
      title: "Types of Wallets",
      level: "BEGINNER",
      youtubeLink: "https://youtu.be/bfyxYs1tKok",
    },
    {
      title: "Wallet Creation (Demo)",
      level: "BEGINNER",
      youtubeLink: "https://youtu.be/8z42exLGVRc",
    },
    {
      title: "MultiSig Wallet",
      level: "BEGINNER",
      youtubeLink: "https://youtu.be/nzmn8W7Q3Kg",
    },
    {
      title: "Networks in BlockChain",
      level: "BEGINNER",
      youtubeLink: "https://youtu.be/sHwk6zVWckk",
    },
    {
      title: "Network Demo",
      level: "BEGINNER",
      youtubeLink: "https://youtu.be/jg4aQeJyD7U",
    },
    {
      title: "What are DApps?",
      level: "BEGINNER",
      youtubeLink: "https://youtu.be/PdKjvoGVyqE",
    },
    {
      title: "TestNet & Mainnets",
      level: "BEGINNER",
      youtubeLink: "https://youtu.be/Sc7tPVACFNU",
    },
    {
      title: "Types of DApps",
      level: "BEGINNER",
      youtubeLink: "https://youtu.be/_jeXRN-b_Mk",
    },
    {
      title: "Types Of Blockchain",
      level: "BEGINNER",
      youtubeLink: "https://youtu.be/dRLEW3jS5mM",
    },
  ];

  // Function to extract YouTube video ID from link
  const getVideoId = (url: string) => {
    const regex =
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : "";
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="container mx-auto justify-items-center px-6 py-20">
        {/* Page Title */}
        <div className="text-center mb-20">
          <div className="w-16 h-16 mx-auto bg-green-500 rounded-full blur-xl opacity-60 animate-pulse mb-8"></div>
          <h1 className="text-2xl lg:text-4xl font-mono font-bold mb-6 tracking-wider">
            WEB3 FUNDAMENTALS - BOOTCAMPS
          </h1>

          {showButton && (
            <Button className="mb-6 mt-7 bg-green-500 hover:bg-green-400 rounded-xl h-[5vh] text-black font-mono font-bold px-8 py-3 tracking-wider">
              POST A BOOTCAMP
            </Button>
          )}
        </div>

        {/* Bootcamp Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 max-w-6xl mx-auto">
          {bootcamps.map((bootcamp, index) => {
            const videoId = getVideoId(bootcamp.youtubeLink);
            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

            return (
              <Card
                key={index}
                className="border border-gray-900 bg-black/50 backdrop-blur-sm hover:border-green-500/30 w-full transition-all group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-green-500/10 text-green-400 border border-green-500/20 font-mono text-xs tracking-wider">
                      {bootcamp.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-green-400 font-mono tracking-wider">
                    {bootcamp.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* YouTube Preview Image */}
                  <Link href={bootcamp.youtubeLink} target="_blank">
                    <div className="relative w-full h-56 rounded-xl overflow-hidden group">
                      <Image
                        src={thumbnailUrl}
                        alt={`${bootcamp.title} Thumbnail`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Play Icon Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </Link>

                  {/* Buttons */}
                  <div className="flex flex-col gap-3">
                    <Button className="w-full bg-gray-900 hover:bg-gray-800 text-green-400 border border-gray-800 hover:border-green-500/30 font-mono text-xs tracking-wider">
                      <Link href={bootcamp.youtubeLink} target="_blank">
                        Watch on YouTube
                      </Link>
                    </Button>
                    <Link href="/notes">
                    <Button className="w-full bg-green-600 hover:bg-green-500 text-black font-mono font-bold text-xs tracking-wider">
                        View Notes
                    </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
