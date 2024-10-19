"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useChat } from "ai/react";
import { SendIcon } from "lucide-react";
import Messages from "@/components/Messages";
import { useRef } from "react";

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      formRef.current?.requestSubmit();
    }
  };

  return (
    <div className="flex flex-col justify-between h-screen container py-6 gap-4">
      <div className="flex-1 h-full overflow-y-auto">
        {messages.length ? (
          <Messages messages={messages} />
        ) : (
          <div className="flex items-center justify-center h-full text-neutral-400">
            No messages yet
          </div>
        )}
      </div>
      <form ref={formRef} className="relative" onSubmit={handleSubmit}>
        <Textarea
          placeholder="Say something..."
          className="w-full resize-none min-h-24"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <Button
          className="absolute bottom-2 right-2"
          type="submit"
          variant="secondary"
        >
          <SendIcon className="size-6" />
        </Button>
      </form>
    </div>
  );
}
