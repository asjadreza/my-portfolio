"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hi! I'm Asjad's portfolio chatbot. Ask me about projects, skills, or experience.",
};

// -----------------------------
// Notification audio (shared)
// -----------------------------
let audioCtxGlobal: AudioContext | null = null;
let audioBufferGlobal: AudioBuffer | null = null;
const htmlAudioGlobal = new Audio("/thumbnail/new-notification.mp3");
htmlAudioGlobal.preload = "auto";
htmlAudioGlobal.volume = 0.8;

const createAudioContextOnce = (): AudioContext | null => {
  if (audioCtxGlobal) return audioCtxGlobal;
  try {
    const Ctx = (window as any).AudioContext || (window as any).webkitAudioContext;
    if (!Ctx) return null;
    audioCtxGlobal = new Ctx();
    return audioCtxGlobal;
  } catch {
    return null;
  }
};

const initNotificationAudio = async () => {
  if (audioBufferGlobal) return;
  const ctx = createAudioContextOnce();
  if (!ctx) return;
  try {
    const res = await fetch("/thumbnail/new-notification.mp3");
    const ab = await res.arrayBuffer();
    const decoded = await ctx.decodeAudioData(ab);
    audioBufferGlobal = decoded;
  } catch {
    audioBufferGlobal = null;
  }
};

const playNotification = async () => {
  try {
    const ctx = audioCtxGlobal || createAudioContextOnce();
    if (ctx && audioBufferGlobal) {
      if (ctx.state === "suspended") {
        try {
          await ctx.resume();
        } catch {}
      }
      const src = ctx.createBufferSource();
      src.buffer = audioBufferGlobal as AudioBuffer;
      src.connect(ctx.destination);
      src.start(0);
      src.onended = () => {
        try {
          src.disconnect();
        } catch {}
      };
      return;
    }

    // fallback to HTMLAudioElement
    try {
      htmlAudioGlobal.currentTime = 0;
      await htmlAudioGlobal.play();
    } catch {
      // retry once shortly after
      setTimeout(() => {
        htmlAudioGlobal.play().catch(() => {});
      }, 150);
    }
  } catch {}
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [hasNewMessage, setHasNewMessage] = useState(false);
  // const originalTitle = useRef<string>("");
  const originalTitleRef = useRef<string>("");

  const canSend = useMemo(
    () => Boolean(input.trim()) && !loading,
    [input, loading]
  );

  // Theme class constants (keeps class strings stable across renders)
  const userBubbleCls = "bg-gray-100 text-slate-900 border border-gray-200";
  const assistantBubbleCls = "bg-gray-800 text-white border border-gray-800";

  // Memoize Markdown renderers to avoid recreating functions each render
  const markdownComponents = useMemo(() => ({
    p: ({ children }: any) => (
      <p className="mb-2 last:mb-0 text-white">{children}</p>
    ),
    ul: ({ children }: any) => (
      <ul className="list-disc list-inside mb-2 space-y-1 text-white">{children}</ul>
    ),
    ol: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-2 space-y-1 text-white">{children}</ol>
    ),
    li: ({ children }: any) => <li className="ml-2">{children}</li>,
    strong: ({ children }: any) => (
      <strong className="font-semibold text-white">{children}</strong>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
    a: ({ href, children }: any) => (
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-300 underline hover:text-blue-200">
        {children}
      </a>
    ),
    h1: ({ children }: any) => <h1 className="text-lg font-bold mb-2 text-white">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-base font-bold mb-2 text-white">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-sm font-bold mb-1 text-white">{children}</h3>,
    code: ({ children }: any) => (
      <code className="bg-slate-700 px-1 py-0.5 rounded text-xs font-mono text-slate-200">{children}</code>
    ),
  }), []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text) return;

    const nextMessages = [
      ...messages,
      { role: "user" as const, content: text },
    ];
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

      const updated = [...nextMessages, { role: "assistant" as const, content: answer }];
      setMessages(updated);
      // play notification when bot replies
      try {
        await initNotificationAudio();
        playNotification();
      } catch {}
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

  // optimized open-with-message helper
  const openWithMessage = (msg: string) => {
    // open the chatbot
    setIsOpen(true);

    // queue the message send in next frame (fast + no lag)
    requestAnimationFrame(() => {
      setInput(msg);
      handleSend();
    });
  };

  return (
    <>
      {!isOpen && (
        <AutoMessageBubble
          onSelectMessage={openWithMessage}
          onBubbleShow={() => setHasNewMessage(true)}
          onBubbleHide={() => setHasNewMessage(false)}
          originalTitleRef={originalTitleRef}
        />
      )}

      <div className="fixed bottom-6 right-6 z-40 flex items-center">
        <div className="flex flex-col">
          <Image
            src="/thumbnail/we-are-here.svg"
            alt="We Are Here"
            width={150}
            height={150}
            className="h-15 w-25 mr-2 select-none pointer-events-none relative top-[50px] left-8"
          />

          <button
            type="button"
            onClick={() => {
              setIsOpen((prev) => !prev);
              setHasNewMessage(false);
              document.title = originalTitleRef.current;
            }}
            className="h-12 w-12 relative top-[13px] left-17 rounded-full flex items-center justify-center shadow-lg transition-colors"
          >
            <Image
              src="/thumbnail/chat-bot.png"
              alt="Chat-bot"
              width={150}
              height={150}
            />

            {hasNewMessage && !isOpen && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] h-4 w-4 flex items-center justify-center rounded-full shadow-lg animate-pulse">
                1
              </span>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 left-4 right-4 sm:right-6 sm:left-auto z-40 mx-auto w-auto max-w-sm md:max-w-sm rounded-3xl bg-white shadow-2xl">
          <div className="flex items-center justify-between px-4 py-3 border-t border-gray-700 bg-gray-800 text-white rounded-t-2xl">
            <div>
              <p className="text-sm font-semibold">
                Portfolio Chatbot
              </p>
              <p className="text-xs text-gray-300">
                Powered by Groq + LangChain RAG
              </p>
            </div>
            <button
              type="button"
              className="text-white/90 hover:text-white"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
            >
              <CloseIcon sx={{ fontSize: 18 }} />
            </button>
          </div>

          <div className="max-h-[380px] md:max-h-[520px] overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={`${msg.role}-${index}`}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`rounded-xl px-3 py-2 text-sm leading-relaxed ${
                    msg.role === "user" ? userBubbleCls : assistantBubbleCls
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <div className="markdown-content">
                      <ReactMarkdown components={markdownComponents}>{msg.content}</ReactMarkdown>
                    </div>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="rounded-xl px-3 py-2 text-sm bg-gray-100 text-slate-900 border border-gray-200">
                  <span
                    className="inline-block w-2 h-2 bg-slate-400 rounded-full animate-bounce mr-1"
                    style={{ animationDelay: "0ms" }}
                  ></span>
                  <span
                    className="inline-block w-2 h-2 bg-slate-400 rounded-full animate-bounce mr-1"
                    style={{ animationDelay: "150ms" }}
                  ></span>
                  <span
                    className="inline-block w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></span>
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

          <div className="border-t border-gray-100 px-4 py-3">
            <div className="flex items-end gap-2">
              <textarea
                className="flex-1 rounded-xl bg-gray-50 border border-gray-200 text-slate-900 text-sm px-3 py-2 focus:outline-none focus:border-blue-400 resize-none"
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
                className="h-10 w-10 flex items-center justify-center rounded-full bg-linear-to-r from-purple-500 to-blue-500 text-white disabled:opacity-40"
                aria-label="Send message"
              >
                
                  <SendIcon sx={{ fontSize: 18 }} />
                
              </button>
            </div>
            <p className="text-[11px] text-slate-600 mt-2">
              Answers are grounded in your embedded resume and projects.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

function AutoMessageBubble({
  onSelectMessage,
  onBubbleShow,
  onBubbleHide,
  originalTitleRef,
}: {
  onSelectMessage: (msg: string) => void;
  onBubbleShow: () => void;
  onBubbleHide: () => void;
  originalTitleRef: React.MutableRefObject<string>;
}) {
  const [visible, setVisible] = useState(false);
  const MESSAGE = "Hi! How can we help?";

  useEffect(() => {
    let initialTimeout: ReturnType<typeof setTimeout> | null = null;
    let timeout1: ReturnType<typeof setTimeout> | null = null;
    let timeout2: ReturnType<typeof setTimeout> | null = null;

    // Decode audio early (best-effort)
    initNotificationAudio();

    const unlockHandler = async () => {
      if (audioCtxGlobal && audioCtxGlobal.state === "suspended") {
        try {
          await audioCtxGlobal.resume();
        } catch {}
      }

      try {
        await htmlAudioGlobal.play();
        htmlAudioGlobal.pause();
        htmlAudioGlobal.currentTime = 0;
      } catch {}
    };

    window.addEventListener("pointerdown", unlockHandler, { once: true });
    window.addEventListener("touchstart", unlockHandler, { once: true });
    window.addEventListener("click", unlockHandler, { once: true });

    const loop = () => {
      setVisible(true);
      onBubbleShow();

      // Save original title once
      if (!originalTitleRef.current) {
        originalTitleRef.current = document.title;
      }

      // Update title
      document.title = "1 New Message";

      // Play shared notification
      playNotification();

      timeout1 = setTimeout(() => {
        setVisible(false);
        onBubbleHide(); // notify parent → hide notification dot
        document.title = originalTitleRef.current;

        // schedule next loop
        timeout2 = setTimeout(loop, 10000);
      }, 10000);
    };

    // Delay first show by 3 seconds
    initialTimeout = setTimeout(loop, 3000);

    return () => {
      if (initialTimeout) clearTimeout(initialTimeout);
      if (timeout1) clearTimeout(timeout1);
      if (timeout2) clearTimeout(timeout2);
      window.removeEventListener("pointerdown", unlockHandler);
      window.removeEventListener("touchstart", unlockHandler);
      window.removeEventListener("click", unlockHandler);
      // Restore original title on unmount
      if (originalTitleRef.current) {
        document.title = originalTitleRef.current;
      }
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      onClick={() => {
        onSelectMessage(MESSAGE);
        onBubbleHide();
        document.title = originalTitleRef.current; // restore
      }}
      className="fixed bottom-30 right-5 bg-white text-black text-sm px-4 py-2 rounded-xl shadow-lg cursor-pointer animate-fadeIn hover:bg-gray-100 z-50"
    >
      {MESSAGE}
    </div>
  );
}

