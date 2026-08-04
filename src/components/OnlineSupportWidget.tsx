import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import {
  MessageSquare,
  Send,
  X,
  Bot,
  User,
  Sparkles,
  PhoneCall,
  Loader2,
  Headphones,
  Maximize2,
  Minimize2,
  RefreshCw,
  Zap
} from 'lucide-react';

interface OnlineSupportWidgetProps {
  isOpenFloating: boolean;
  onCloseFloating: () => void;
}

const PRESET_QUESTIONS = [
  'What is the typical cost and timeline for web design?',
  'How can AI integrations help boost our business sales?',
  'Can you build cross-platform apps for iOS and Android?',
  'What does your post-launch support and warranty cover?',
  'How do I book a free technical consultation session?'
];

export const OnlineSupportWidget: React.FC<OnlineSupportWidgetProps> = ({
  isOpenFloating,
  onCloseFloating
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'bot',
      text: 'Hello! Welcome to RF Craft AI Support. I am your AI IT & Data assistant. How can I assist you with data analytics, web development, custom AI solutions, mobile apps, or technical consulting today?',
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isExpandedWidget, setIsExpandedWidget] = useState(false);

  const mainChatContainerRef = useRef<HTMLDivElement>(null);
  const floatingChatContainerRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (mainChatContainerRef.current) {
      mainChatContainerRef.current.scrollTop = mainChatContainerRef.current.scrollHeight;
    }
    if (floatingChatContainerRef.current) {
      floatingChatContainerRef.current.scrollTop = floatingChatContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: 'u_' + Date.now(),
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/support/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text.trim(),
          chatHistory: messages.map((m) => ({ sender: m.sender, text: m.text })),
        }),
      });

      const data = await response.json();

      const botReplyText =
        data.reply || data.error || 'Sorry, no response was returned. Please try again.';

      const botMsg: ChatMessage = {
        id: 'b_' + Date.now(),
        sender: 'bot',
        text: botReplyText,
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error('Support Chat Error:', err);
      const errorMsg: ChatMessage = {
        id: 'err_' + Date.now(),
        sender: 'bot',
        text: 'Connection error. You can reach our office directly at +1 (555) 019-2834 or re-send your inquiry.',
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearHistory = () => {
    setMessages([
      {
        id: 'm1',
        sender: 'bot',
        text: 'Chat history reset. How can I help you with web engineering, AI, mobile apps, or cloud IT solutions?',
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <>
      {/* 1. Dedicated Page Section for Online Support (#support) */}
      <section id="support" className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-teal-700 text-xs font-semibold uppercase tracking-widest shadow-sm">
              <Headphones className="w-4 h-4 text-teal-600" />
              <span>Instant AI Support & Consultation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              RF Craft Intelligent AI Assistant
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Ask questions regarding timelines, tech stack, data analytics, WordPress solutions, pricing estimates, and project scope. Our AI assistant is available 24/7.
            </p>
          </div>

          {/* Embedded Large Chat Interface */}
          <div className="max-w-4xl mx-auto bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-xl flex flex-col h-[580px]">
            
            {/* Header */}
            <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-teal-600" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-teal-600 border-2 border-white" />
                </div>
                <div>
                  <h3 className="text-sm font-serif font-bold text-slate-900 flex items-center gap-1.5">
                    RF Craft Support Assistant
                    <span className="text-[10px] bg-teal-50 text-teal-800 px-2 py-0.5 rounded border border-teal-200 font-mono">
                      Gemini AI
                    </span>
                  </h3>
                  <span className="text-xs text-teal-700 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-pulse" />
                    Online & Ready 24/7
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={clearHistory}
                  className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 text-xs flex items-center gap-1 border border-slate-200"
                  title="Reset Chat"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Reset</span>
                </button>
                <a
                  href="tel:+31614167492"
                  className="px-3 py-2 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 text-xs font-semibold flex items-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-teal-600" />
                  <span>Call Us: +31 6 14167492</span>
                </a>
              </div>
            </div>

            {/* Quick Suggestion Chips */}
            <div className="p-3 bg-slate-50/80 border-b border-slate-200 overflow-x-auto custom-scrollbar flex items-center gap-2">
              <span className="text-[11px] text-slate-500 font-semibold shrink-0 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                Quick Prompts:
              </span>
              {PRESET_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  disabled={isLoading}
                  className="px-3 py-1.5 rounded-full bg-white hover:bg-slate-100 text-slate-700 hover:text-teal-700 text-xs border border-slate-200 whitespace-nowrap transition-colors shadow-xs"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Message Area */}
            <div ref={mainChatContainerRef} className="flex-1 p-4 sm:p-6 overflow-y-auto custom-scrollbar space-y-4 bg-slate-50/50">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex items-start gap-3 ${
                    m.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                      m.sender === 'user'
                        ? 'bg-teal-600 text-white font-bold'
                        : 'bg-teal-50 text-teal-700 border border-teal-200'
                    }`}
                  >
                    {m.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>

                  <div
                    className={`max-w-[80%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed space-y-1 shadow-sm ${
                      m.sender === 'user'
                        ? 'bg-teal-600 text-white font-medium rounded-br-none'
                        : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none'
                    }`}
                  >
                    <p className="whitespace-pre-line text-left">{m.text}</p>
                    <span className={`text-[10px] block text-right font-mono pt-1 opacity-70 ${m.sender === 'user' ? 'text-teal-100' : 'text-slate-400'}`}>
                      {m.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-700 border border-teal-200 flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 text-xs text-teal-700 flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-teal-600" />
                    <span>Analyzing request and generating reply...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Box */}
            <div className="p-3 sm:p-4 bg-white border-t border-slate-200">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question about pricing, services, or technical stack..."
                  disabled={isLoading}
                  className="flex-1 bg-slate-50 border border-slate-200 focus:border-teal-600 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-teal-600/20 transition-all shrink-0"
                >
                  <span>Send</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Floating Persistent Widget (Bottom-Right corner) */}
      {isOpenFloating && (
        <div
          className={`fixed bottom-6 right-6 z-50 bg-white border border-slate-200/90 rounded-3xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 animate-in slide-in-from-bottom-5 ${
            isExpandedWidget
              ? 'w-[92vw] sm:w-[480px] h-[600px]'
              : 'w-[92vw] sm:w-[380px] h-[500px]'
          }`}
        >
          {/* Floating Header */}
          <div className="p-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center">
                <Bot className="w-4 h-4 text-teal-600" />
                <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-teal-600" />
              </div>
              <div>
                <h4 className="text-xs font-serif font-bold text-slate-900">RF Craft AI Support</h4>
                <span className="text-[10px] text-teal-700">Instant AI Responses</span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsExpandedWidget(!isExpandedWidget)}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/60"
                title={isExpandedWidget ? 'Minimize' : 'Maximize'}
              >
                {isExpandedWidget ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={onCloseFloating}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/60"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Floating Chat Body */}
          <div ref={floatingChatContainerRef} className="flex-1 p-3 overflow-y-auto custom-scrollbar space-y-3 bg-slate-50/50">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex items-start gap-2 ${
                  m.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                    m.sender === 'user' ? 'bg-teal-600 text-white font-bold' : 'bg-teal-50 text-teal-700 border border-teal-200'
                  }`}
                >
                  {m.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                </div>

                <div
                  className={`max-w-[85%] rounded-xl p-3 text-xs leading-relaxed space-y-1 shadow-xs ${
                    m.sender === 'user'
                      ? 'bg-teal-600 text-white font-medium rounded-br-none'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-line text-left">{m.text}</p>
                  <span className={`text-[9px] block text-right font-mono opacity-70 ${m.sender === 'user' ? 'text-teal-100' : 'text-slate-400'}`}>
                    {m.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-2.5 text-xs text-teal-700 flex items-center gap-1.5">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-teal-600" />
                  <span>Thinking...</span>
                </div>
              </div>
            )}
          </div>

          {/* Floating Form Input */}
          <div className="p-2.5 bg-white border-t border-slate-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-1.5"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                disabled={isLoading}
                className="flex-1 bg-slate-50 border border-slate-200 focus:border-teal-600 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder-slate-400 outline-none"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-2 rounded-xl bg-teal-600 text-white disabled:opacity-50 hover:bg-teal-700 font-bold shadow-sm"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
