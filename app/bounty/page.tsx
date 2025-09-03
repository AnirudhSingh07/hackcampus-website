"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function EventsPage() {
  const { role, openModal } = useAuth();
  const showButton =
    role === "DevRel / Head of ecosystem" || role === "Community Lead";
  const router = useRouter();

  const [checkedAuth, setCheckedAuth] = useState(false);

  useEffect(() => {
    // Wait for auth context to load localStorage
    const timer = setTimeout(() => {
      if (!role) {
        router.push("/");
        openModal("login");
      }
      setCheckedAuth(true);
    }, 200); // small delay to allow context to load

    return () => clearTimeout(timer);
  }, [role]);

  if (!checkedAuth && !role) {
    // Optional: simple loading screen to prevent flash
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.02)_1px,transparent_1px),
                                          linear-gradient(90deg,rgba(0,255,0,0.02)_1px,transparent_1px)] 
                      bg-[size:100px_100px] pointer-events-none">
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Page Title */}
        <div className="text-center mb-20">
          <div className="w-16 h-16 mx-auto bg-green-500 rounded-full blur-xl opacity-60 animate-pulse mb-8"></div>
          <h1 className="text-4xl lg:text-6xl font-mono font-bold mb-6 tracking-wider">BOUNTIES</h1>
          <p className="text-gray-500 font-mono text-sm tracking-wider max-w-2xl mx-auto">
            Content • Design • Development
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {showButton && (
            <Button
              onClick={() => router.push("https://forms.gle/B9qPE226aJjGRqwV8")}
              className="mb-6 bg-green-500 hover:bg-green-400 rounded-xl h-[5vh] text-black font-mono font-bold px-8 py-3 tracking-wider"
            >
              POST A BOUNTY
            </Button>
          )}

          <Card className="border border-gray-900 bg-black/50 backdrop-blur-sm hover:border-green-500/30 transition-all">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <Badge className="bg-red-500/10 text-yellow-400 border border-red-500/20 font-mono text-xs tracking-wider">
                    Completed
                  </Badge>
                  <div className="flex items-center text-xs text-gray-500 font-mono">
                    <Calendar className="w-3 h-3 mr-1" />
                    1st - 12th August, 2025
                  </div>
                </div>
                <div className="flex items-center text-xs text-gray-500 font-mono">
                  <MapPin className="w-3 h-3 mr-1" />
                  Remote
                </div>
              </div>
              <h3 className="text-2xl font-mono font-bold text-green-400 mb-4 tracking-wider">
                Twitter/X Thread Writing
              </h3>
              <p className="text-gray-400 font-mono text-sm mb-6 leading-relaxed">
                Your task is to write a Twitter/X thread about HackCampus to spread awareness and engage the community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => router.push("bounty/twitter-x-thread-writing-bounty")}
                  className="bg-green-500 hover:bg-green-400 text-black font-mono font-bold px-8 tracking-wider"
                >
                  Participate
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
