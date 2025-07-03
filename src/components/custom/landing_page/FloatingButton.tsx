import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, MessageCircleQuestionMark } from "lucide-react";
import ChatModal from "./ChatModal";

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-white border-2 border-gray-800 hover:bg-yellow-500 shadow-2xl hover:shadow-3xl transition-all duration-300 z-40 hover:scale-110 group"
          size="icon"
        >
          <MessageCircleQuestionMark size={40} className="text-black group-hover:scale-110 transition-transform duration-200" />
        </Button>
      )}
      
      <ChatModal open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
};

export default FloatingButton;
