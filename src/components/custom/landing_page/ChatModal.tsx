import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, X } from "lucide-react";
import { useChat } from "@ai-sdk/react";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

interface ChatModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ChatModal = ({ open, onOpenChange }: ChatModalProps) => {
  const { messages: aiMessages, handleSubmit, input, setInput } = useChat({
    api: "/api/ask"
  });
  
  const handleSendMessage = async () => {
    if (!input.trim()) return; // Prevent sending empty messages
    try {
      setIsTyping(true);
      await handleSubmit();
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsTyping(false);
    }
  }
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [aiMessages]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div 
        className={`bg-white rounded-t-2xl shadow-2xl border transition-all duration-300 ease-in-out w-80 h-96 animate-fade-in-up`}
      >
        {/* Header */}
        <div className="bg-yellow-300 text-black p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Bot size={16} />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Ask Dimas AI</h3>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs opacity-90">Online</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              onClick={() => onOpenChange(false)}
              className="p-1 bg-transparent hover:bg-white/20 rounded-full text-black"
              size="icon"
            >
              <X size={14} />
            </Button>
          </div>
        </div>

        {(
          <>
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 h-64 bg-gray-50">
              {aiMessages.map((message, index) => (
                <div
                  key={`message-${index}`}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`flex items-end space-x-2 max-w-[80%] ${
                      message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}
                  >
                    {message.role === 'assistant' && (
                      <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot size={12} className="text-white" />
                      </div>
                    )}
                    <div
                      className={`px-3 py-2 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md ${
                        message.role === 'user'
                          ? 'bg-gray-700 text-white rounded-br-md'
                          : 'bg-white text-gray-800 rounded-bl-md border'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.role === 'user' ? 'text-white' : 'text-gray-500'
                      }`}>
                        {message.createdAt?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start animate-fade-in">
                  <div className="flex items-end space-x-2">
                    <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center">
                      <Bot size={12} className="text-white" />
                    </div>
                    <div className="bg-white px-3 py-2 rounded-2xl rounded-bl-md border shadow-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Input Area */}
            <div className="p-4 bg-white border-t rounded-b-2xl">
              <div>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex space-x-2"
                >
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 border-gray-200 rounded-full px-4 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                  <Button 
                    onClick={handleSendMessage} 
                    className="bg-gray-700 rounded-full w-10 h-10 p-0 transition-all duration-200 hover:scale-105"
                    size="icon"
                  >
                    <Send size={16} />
                  </Button>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatModal;