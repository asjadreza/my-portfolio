"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hi! I'm Asjad's portfolio chatbot. Ask me about projects, skills, or experience.",
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const canSend = useMemo(
    () => Boolean(input.trim()) && !loading,
    [input, loading]
  );

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text) return;

    const nextMessages = [...messages, { role: "user" as const, content: text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: text,
          chat_history: nextMessages.map((m) => ({
            role: m.role === "user" ? "human" : "ai",
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("Chat request failed");
      }

      const data = (await response.json()) as { answer?: string };
      const answer = data.answer ?? "I could not generate a reply.";

      setMessages([...nextMessages, { role: "assistant", content: answer }]);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <button
        type="button"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-500 px-4 py-3 text-white shadow-lg hover:shadow-xl transition-all"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <ChatBubbleOutlineIcon sx={{ fontSize: 18 }} />
        <span className="text-sm font-semibold">
          {isOpen ? "Close chat" : "Ask Asjad's AI"}
        </span>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-full max-w-md rounded-2xl border border-white/10 bg-[#0f172a]/90 backdrop-blur-lg shadow-2xl">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div>
              <p className="text-sm text-slate-300 font-semibold">
                Portfolio Chatbot
              </p>
              <p className="text-xs text-slate-500">
                Powered by Groq + LangChain RAG
              </p>
            </div>
            <button
              type="button"
              className="text-slate-400 hover:text-white"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
            >
              <CloseIcon sx={{ fontSize: 18 }} />
            </button>
          </div>

          <div className="max-h-[380px] overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={`${msg.role}-${index}`}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`rounded-xl px-3 py-2 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                      : "bg-white/5 text-slate-100 border border-white/5"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <div className="markdown-content">
                      <ReactMarkdown
                        components={{
                          p: ({ children }) => <p className="mb-2 last:mb-0 text-slate-100">{children}</p>,
                          ul: ({ children }) => <ul className="list-disc list-inside mb-2 space-y-1 text-slate-100">{children}</ul>,
                          ol: ({ children }) => <ol className="list-decimal list-inside mb-2 space-y-1 text-slate-100">{children}</ol>,
                          li: ({ children }) => <li className="ml-2">{children}</li>,
                          strong: ({ children }) => <strong className="font-semibold text-slate-50">{children}</strong>,
                          em: ({ children }) => <em className="italic">{children}</em>,
                          a: ({ href, children }) => (
                            <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">
                              {children}
                            </a>
                          ),
                          h1: ({ children }) => <h1 className="text-lg font-bold mb-2 text-slate-50">{children}</h1>,
                          h2: ({ children }) => <h2 className="text-base font-bold mb-2 text-slate-50">{children}</h2>,
                          h3: ({ children }) => <h3 className="text-sm font-bold mb-1 text-slate-50">{children}</h3>,
                          code: ({ children }) => (
                            <code className="bg-slate-800/50 px-1 py-0.5 rounded text-xs font-mono text-slate-200">{children}</code>
                          ),
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="rounded-xl px-3 py-2 text-sm bg-white/5 text-slate-100 border border-white/5">
                  <span className="inline-block w-2 h-2 bg-slate-400 rounded-full animate-bounce mr-1" style={{ animationDelay: "0ms" }}></span>
                  <span className="inline-block w-2 h-2 bg-slate-400 rounded-full animate-bounce mr-1" style={{ animationDelay: "150ms" }}></span>
                  <span className="inline-block w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                </div>
              </div>
            )}

            {error && (
              <p className="text-xs text-red-400 bg-red-400/10 border border-red-500/30 rounded-lg px-3 py-2">
                {error}
              </p>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-white/10 px-4 py-3">
            <div className="flex items-end gap-2">
              <textarea
                className="flex-1 rounded-xl bg-white/5 border border-white/10 text-slate-100 text-sm px-3 py-2 focus:outline-none focus:border-blue-400 resize-none"
                rows={2}
                placeholder="Ask about projects, stack, or experience..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
              />
              <button
                type="button"
                onClick={handleSend}
                disabled={!canSend}
                className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white disabled:opacity-40"
                aria-label="Send message"
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-white/60 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <SendIcon sx={{ fontSize: 18 }} />
                )}
              </button>
            </div>
            <p className="text-[11px] text-slate-500 mt-2">
              Answers are grounded in your embedded resume and projects.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

