import { useState, useEffect, useRef } from "react";
import { X, MessageCircle, Send, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner@2.0.3";

interface Message {
  id: string;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
  suggestions?: string[];
}

interface VisitorData {
  name?: string;
  email?: string;
  company?: string;
}

type ConversationMode = "chat" | "collecting-info";

export function AIBotPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [conversationMode, setConversationMode] = useState<ConversationMode>("chat");
  const [infoStep, setInfoStep] = useState(0);
  const [visitorData, setVisitorData] = useState<VisitorData>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Knowledge base about NibbleIQ
  const knowledgeBase = {
    whatIsNibbleIQ: [
      "NibbleIQ is your Restaurant Intelligence Platform! 🎯",
      "We centralize all your back-office signals - think of us as the command center that brings together everything happening in your restaurants.",
      "We use predictive AI to spot issues before they hit your P&L, so you can act proactively instead of reactively."
    ],
    howItWorks: [
      "Great question! Here's how NibbleIQ works:",
      "📧 We automatically read your supplier emails and invoices - catching hidden price increases and discrepancies",
      "📊 Our AI forecasts your labor and purchasing needs based on your actual patterns",
      "⚠️ We surface operational risks and food cost issues before they become problems",
      "Everything appears in one clean dashboard, so you always know what needs attention."
    ],
    features: [
      "Here's what NibbleIQ can do for you:",
      "✅ Automatic invoice reading & price tracking",
      "✅ Labor forecasting & scheduling optimization",
      "✅ Purchase planning & inventory insights",
      "✅ Food cost variance detection",
      "✅ Operational risk alerts",
      "✅ Supplier performance tracking",
      "All designed to help you run tighter operations! 🚀"
    ],
    whoItsFor: [
      "NibbleIQ is built for restaurant operators! 👨‍🍳",
      "Whether you're managing a single location or a multi-unit group, we help you stay on top of operations.",
      "We work best for operators who are tired of spreadsheets and want one place to see everything that matters."
    ],
    integration: [
      "Getting started is super easy!",
      "We integrate with your existing systems - POS, accounting, payroll, and supplier emails.",
      "Most teams are up and running within a week. Our team handles the heavy lifting during setup. 💪"
    ],
    pricing: [
      "I'd love to chat about pricing! It varies based on your number of locations and specific needs.",
      "The best way is to book a quick call with our team - they'll walk you through options that make sense for your operation.",
      "Would you like me to connect you with someone?"
    ],
    general: [
      "I'm here to help! 😊",
      "I can answer questions about what NibbleIQ does, how it works, who it's for, and how to get started.",
      "What would you like to know?"
    ]
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Show popup after 8 seconds on first visit
  useEffect(() => {
    const hasSeenBot = localStorage.getItem("nibbleiq_bot_seen");
    const hasDismissed = sessionStorage.getItem("nibbleiq_bot_dismissed");
    
    if (!hasSeenBot && !hasDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setIsMinimized(false);
        addBotMessage(
          "Hey there! 👋 I'm here to help you learn about NibbleIQ.",
          500,
          ["What does NibbleIQ do?", "How does it work?", "Who is it for?"]
        );
        localStorage.setItem("nibbleiq_bot_seen", "true");
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, []);

  const addBotMessage = (text: string, delay = 800, suggestions?: string[]) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          text,
          sender: "bot",
          timestamp: new Date(),
          suggestions,
        },
      ]);
      setIsTyping(false);
    }, delay);
  };

  const addUserMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        text,
        sender: "user",
        timestamp: new Date(),
      },
    ]);
  };

  const detectIntent = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    // Check for demo/call/contact requests
    if (
      lowerMessage.includes("demo") ||
      lowerMessage.includes("call") ||
      lowerMessage.includes("contact") ||
      lowerMessage.includes("talk to") ||
      lowerMessage.includes("speak with") ||
      lowerMessage.includes("book") ||
      lowerMessage.includes("schedule") ||
      lowerMessage.includes("interested")
    ) {
      return "wants-demo";
    }

    // Check for what/about questions
    if (
      lowerMessage.includes("what is") ||
      lowerMessage.includes("what does") ||
      lowerMessage.includes("tell me about") ||
      lowerMessage.includes("explain")
    ) {
      return "what-is-nibbleiq";
    }

    // Check for how questions
    if (
      lowerMessage.includes("how does") ||
      lowerMessage.includes("how it works") ||
      lowerMessage.includes("how do you")
    ) {
      return "how-it-works";
    }

    // Check for features
    if (
      lowerMessage.includes("feature") ||
      lowerMessage.includes("can it") ||
      lowerMessage.includes("does it") ||
      lowerMessage.includes("what can")
    ) {
      return "features";
    }

    // Check for who/target audience
    if (
      lowerMessage.includes("who") ||
      lowerMessage.includes("for me") ||
      lowerMessage.includes("right fit")
    ) {
      return "who-its-for";
    }

    // Check for integration/setup
    if (
      lowerMessage.includes("integrate") ||
      lowerMessage.includes("setup") ||
      lowerMessage.includes("get started") ||
      lowerMessage.includes("implementation")
    ) {
      return "integration";
    }

    // Check for pricing
    if (
      lowerMessage.includes("price") ||
      lowerMessage.includes("cost") ||
      lowerMessage.includes("pricing") ||
      lowerMessage.includes("how much")
    ) {
      return "pricing";
    }

    return "general";
  };

  const getResponse = (intent: string): { messages: string[]; suggestions?: string[] } => {
    switch (intent) {
      case "what-is-nibbleiq":
        return {
          messages: knowledgeBase.whatIsNibbleIQ,
          suggestions: ["How does it work?", "What features do you have?", "Book a demo"]
        };
      case "how-it-works":
        return {
          messages: knowledgeBase.howItWorks,
          suggestions: ["Who is this for?", "How do I get started?", "Show me a demo"]
        };
      case "features":
        return {
          messages: knowledgeBase.features,
          suggestions: ["How does it work?", "I'm interested", "Tell me more"]
        };
      case "who-its-for":
        return {
          messages: knowledgeBase.whoItsFor,
          suggestions: ["What features do you have?", "How do I get started?"]
        };
      case "integration":
        return {
          messages: knowledgeBase.integration,
          suggestions: ["I'd like to learn more", "Book a call", "What does it cost?"]
        };
      case "pricing":
        return {
          messages: knowledgeBase.pricing,
          suggestions: ["Yes, connect me", "Tell me more first"]
        };
      case "wants-demo":
        return {
          messages: ["Awesome! 🎉 I'd love to connect you with our team. Let me grab a few quick details."],
          suggestions: []
        };
      default:
        return {
          messages: knowledgeBase.general,
          suggestions: ["What does NibbleIQ do?", "How does it work?", "Book a demo"]
        };
    }
  };

  const handleInfoCollection = (input: string) => {
    if (infoStep === 0) {
      // Collect name
      if (input.trim().length === 0) {
        toast.error("Please enter your name");
        return;
      }
      setVisitorData({ ...visitorData, name: input });
      addUserMessage(input);
      setInfoStep(1);
      addBotMessage(`Great to meet you, ${input}! What's your work email?`);
      setInputValue("");
    } else if (infoStep === 1) {
      // Collect email
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)) {
        toast.error("Please enter a valid email address");
        return;
      }
      setVisitorData({ ...visitorData, email: input });
      addUserMessage(input);
      setInfoStep(2);
      addBotMessage("And what's your restaurant or company name?");
      setInputValue("");
    } else if (infoStep === 2) {
      // Collect company
      if (input.trim().length === 0) {
        toast.error("Please enter your company name");
        return;
      }
      const finalData = { ...visitorData, company: input };
      setVisitorData(finalData);
      addUserMessage(input);
      
      // Save lead
      const leads = JSON.parse(localStorage.getItem("nibbleiq_bot_leads") || "[]");
      leads.push({ ...finalData, timestamp: new Date().toISOString() });
      localStorage.setItem("nibbleiq_bot_leads", JSON.stringify(leads));
      
      // Final message
      addBotMessage(
        `Perfect! Thanks ${finalData.name}. 🙌 Our team will reach out to ${finalData.email} within 24 hours to schedule a time that works for you. Looking forward to showing you what NibbleIQ can do for ${finalData.company}!`
      );
      
      toast.success("Thanks! We'll be in touch soon.", { duration: 5000 });
      
      // Reset
      setConversationMode("chat");
      setInfoStep(0);
      setInputValue("");
      
      // Auto-minimize after 5 seconds
      setTimeout(() => {
        setIsMinimized(true);
      }, 5000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userInput = inputValue.trim();

    // If we're collecting info, handle that flow
    if (conversationMode === "collecting-info") {
      handleInfoCollection(userInput);
      return;
    }

    // Otherwise, handle as a question
    addUserMessage(userInput);
    setInputValue("");

    const intent = detectIntent(userInput);
    const response = getResponse(intent);

    // If user wants a demo, switch to info collection mode
    if (intent === "wants-demo") {
      setConversationMode("collecting-info");
      setInfoStep(0);
      addBotMessage(response.messages[0], 800);
      setTimeout(() => {
        addBotMessage("What's your name?", 1600);
      }, 800);
    } else {
      // Send all response messages with delays
      response.messages.forEach((msg, index) => {
        setTimeout(() => {
          if (index === response.messages.length - 1) {
            addBotMessage(msg, 800, response.suggestions);
          } else {
            addBotMessage(msg, 800);
          }
        }, index * 1000);
      });
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    // Auto-submit after a brief delay
    setTimeout(() => {
      const form = document.getElementById("bot-form") as HTMLFormElement;
      if (form) form.requestSubmit();
    }, 100);
  };

  const toggleMinimize = () => {
    if (!isOpen) {
      setIsOpen(true);
      if (messages.length === 0) {
        addBotMessage(
          "Hey there! 👋 I'm here to help you learn about NibbleIQ.",
          300,
          ["What does NibbleIQ do?", "How does it work?", "Who is it for?"]
        );
      }
    }
    setIsMinimized(!isMinimized);
  };

  const closeBot = () => {
    setIsMinimized(true);
    sessionStorage.setItem("nibbleiq_bot_dismissed", "true");
  };

  if (!isOpen && isMinimized) {
    return (
      <button
        onClick={toggleMinimize}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full p-4 shadow-2xl shadow-orange-500/50 transition-all hover:scale-110 group"
        aria-label="Open chat"
      >
        <Sparkles className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </button>
    );
  }

  return (
    <>
      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-2xl transition-all duration-300 ${
          isMinimized ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        style={{ width: "420px", maxHeight: "650px" }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 rounded-full p-2">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">NibbleIQ Assistant</h3>
              <p className="text-xs text-orange-100">Here to help! Ask me anything</p>
            </div>
          </div>
          <button
            onClick={closeBot}
            className="hover:bg-white/20 rounded-full p-1.5 transition-colors"
            aria-label="Close chat"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-[450px] overflow-y-auto p-4 space-y-4 bg-slate-50">
          {messages.map((message) => (
            <div key={message.id}>
              <div
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 break-words ${
                    message.sender === "user"
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-br-sm"
                      : "bg-white text-slate-900 shadow-sm rounded-bl-sm"
                  }`}
                >
                  <p className="text-sm leading-relaxed break-words overflow-wrap-anywhere">{message.text}</p>
                </div>
              </div>
              
              {/* Suggestion chips */}
              {message.suggestions && message.suggestions.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3 ml-1">
                  {message.suggestions.map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="text-xs px-3 py-1.5 bg-white border border-orange-200 text-orange-600 rounded-full hover:bg-orange-50 hover:border-orange-300 transition-colors shadow-sm break-words"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white rounded-2xl px-4 py-3 shadow-sm rounded-bl-sm">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-slate-200 bg-white rounded-b-2xl">
          <form id="bot-form" onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 h-11 bg-slate-50 border-slate-200"
              disabled={isTyping}
            />
            <Button
              type="submit"
              size="sm"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white h-11 px-4"
              disabled={isTyping || !inputValue.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>

      {/* Floating Button when minimized */}
      {isMinimized && isOpen && (
        <button
          onClick={toggleMinimize}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full p-4 shadow-2xl shadow-orange-500/50 transition-all hover:scale-110 group"
          aria-label="Open chat"
        >
          <Sparkles className="h-6 w-6 group-hover:scale-110 transition-transform" />
        </button>
      )}
    </>
  );
}