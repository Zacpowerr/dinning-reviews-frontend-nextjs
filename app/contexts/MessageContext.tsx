"use client";

import React, { createContext, useState, useCallback } from "react";

type MessageType = "success" | "error" | "warning" | "info";

interface MessageContextProps {
  message: string;
  type: MessageType;
  visible: boolean;
  showMessage: (msg: string, type?: MessageType, duration?: number) => void;
  hideMessage: () => void;
}

export const MessageContext = createContext<MessageContextProps>({
  message: "",
  type: "info",
  visible: false,
  showMessage: () => {},
  hideMessage: () => {},
});

export const MessageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [message, setMessage] = useState("");
  const [type, setType] = useState<MessageType>("info");
  const [visible, setVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const hideMessage = useCallback(() => {
    setVisible(false);
    setMessage("");
    if (timeoutId) clearTimeout(timeoutId);
  }, [timeoutId]);

  const showMessage = useCallback(
    (msg: string, msgType: MessageType = "info", duration = 3000) => {
      setMessage(msg);
      setType(msgType);
      setVisible(true);
      if (timeoutId) clearTimeout(timeoutId);
      const id = setTimeout(() => {
        setVisible(false);
        setMessage("");
      }, duration);
      setTimeoutId(id);
    },
    [timeoutId]
  );

  return (
    <MessageContext.Provider
      value={{ message, type, visible, showMessage, hideMessage }}
    >
      {children}
    </MessageContext.Provider>
  );
};
