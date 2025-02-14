import { Button, CircularProgress, TextField } from "@mui/material";
import { useState } from "react";
import { useChat } from "../composables/ollama/useChat";

export default function Chat() {
  const [chatInput, setChatInput] = useState<string>("");
  const [messages, setMessages] = useState<string>("");

  const chatMutation = useChat();

  const handleChat = () => {
    setMessages("");

    chatMutation.mutate({
      input: chatInput,
      onMessage: (chunk) => {
        setMessages((prev) => prev + chunk.response);
      },
    });
  };
  return (
    <>
      <TextField
        label="Chat"
        variant="outlined"
        value={chatInput}
        onChange={(e) => setChatInput(e.target.value)}
        sx={{ m: 1 }}
      />
      <TextField value={messages} multiline hidden={!messages} />

      <Button onClick={handleChat} sx={{ m: 1 }} variant="contained">
        {chatMutation.isPending ? <CircularProgress sx={{ m: 1 }} /> : "Chat"}
      </Button>
    </>
  );
}
