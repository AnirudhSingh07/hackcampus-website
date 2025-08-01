"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

export default function EventsPage() {
  const { role, token } = useAuth();
  const showButton =
    role === "DevRel / Head of ecosystem" || role === "Community Lead";

  const [threadLink, setThreadLink] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submittedLinks, setSubmittedLinks] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch previously submitted threads
  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const res = await fetch("/api/threads");
        if (!res.ok) throw new Error("Failed to fetch threads");
        const data = await res.json();
        setSubmittedLinks(data.map((thread: any) => thread.link));
      } catch (error) {
        console.error("Error fetching threads:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchThreads();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!threadLink || submitted) return;

    try {
      const res = await fetch("/api/threads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify({ link: threadLink }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Submission failed");
        return;
      }

      // Update state to show new submission
      setSubmittedLinks([threadLink, ...submittedLinks]);
      setSubmitted(true);
      setThreadLink("");
    } catch (error) {
      console.error("Error submitting thread:", error);
      alert("Failed to submit thread. Try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Page Title */}
        <div className="text-center mb-20">
          <div className="w-20 h-20 mx-auto bg-green-500 rounded-full blur-xl opacity-60 animate-pulse mb-8"></div>
          <h1 className="text-5xl lg:text-7xl font-mono font-bold mb-6 tracking-wider">
            Twitter/X Thread Writing
          </h1>
          <p className="text-gray-400 font-mono text-lg tracking-wide max-w-3xl mx-auto">
            HackCampus Bounty #1
          </p>
        </div>

        {/* More Details Link */}
        <div className="text-center mb-12">
          <p className="text-gray-300 mb-4 font-mono text-lg">
            For more details, check out the complete bounty document:
          </p>
          <a
            href="https://docs.google.com/document/d/12vEsUhCkrBff8rqQfF18ceSf9QpmrY9ApsA9L76xpZU/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 underline font-mono text-xl hover:text-green-300 transition-colors"
          >
            📄 View Bounty Details
          </a>
        </div>

        {/* Prize Pool */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-mono text-green-500 font-bold mb-6">
            Prize Pool: $30
          </h2>
          <ul className="font-mono text-gray-300 text-xl space-y-3">
            <li>🥇 1st Prize: $15</li>
            <li>🥈 2nd Prize: $10</li>
            <li>🥉 3rd Prize: $5</li>
          </ul>
        </div>

        {/* Thread Submission Form */}
        <div className="max-w-2xl mx-auto bg-gray-900 p-10 rounded-2xl border-2 border-green-500 shadow-2xl">
          {!submitted ? (
            <>
              <h3 className="text-green-500 font-mono mb-6 text-2xl text-center">
                Submit Your Twitter/X Thread
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                <input
                  type="url"
                  placeholder="Enter your thread link"
                  value={threadLink}
                  onChange={(e) => setThreadLink(e.target.value)}
                  className="p-4 text-lg bg-black border-2 border-green-500 rounded-xl text-green-400 placeholder-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
                <Button
                  type="submit"
                  className="bg-green-500 text-black text-lg py-3 rounded-xl hover:bg-green-400 transition-colors"
                  disabled={submitted}
                >
                  🚀 Submit Thread
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center space-y-4">
              <p className="text-green-400 font-mono text-xl">
                ✅ Thread submitted successfully! You can submit only once.
              </p>
            </div>
          )}

          {/* Submitted Links Section */}
          {!loading && submittedLinks.length > 0 && (
            <div className="mt-10">
              <h4 className="text-green-400 font-mono text-xl mb-4 text-center">
                Previously Submitted Threads
              </h4>
              <ul className="space-y-3">
                {submittedLinks.map((link, index) => (
                  <li key={index} className="text-white text-lg truncate">
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-500 underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
