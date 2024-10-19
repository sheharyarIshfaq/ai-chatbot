import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { type Message as IMessage } from "ai/react";
import { BotIcon, UserIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MessagesProps {
  messages: IMessage[];
}

const Messages = ({ messages }: MessagesProps) => {
  return (
    <div className="flex flex-col gap-3">
      {messages.map((message: IMessage) => (
        <Card
          className={cn("bg-purple-50 border border-purple-400", {
            "bg-emerald-50 border border-emerald-400": message.role === "user",
          })}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              {message.role === "user" ? (
                <div className="bg-emerald-300 border-2 border-emerald-500 rounded-full p-1 w-fit">
                  <UserIcon />
                </div>
              ) : (
                <div className="bg-purple-300 border-2 border-purple-500 rounded-full p-1 w-fit">
                  <BotIcon />
                </div>
              )}

              {message.role === "user" ? "You" : "AI"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Markdown remarkPlugins={[remarkGfm]}>{message.content}</Markdown>
            {/* <p className="whitespace-pre-wrap">{message.content}</p> */}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Messages;
