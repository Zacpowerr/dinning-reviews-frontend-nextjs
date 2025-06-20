"use client";

import React, { JSX, useContext } from "react";
import { MessageContext } from "../contexts/MessageContext";

const typeStyles: Record<
  string,
  { bg: string; border: string; text: string; icon: JSX.Element }
> = {
  success: {
    bg: "bg-green-100",
    border: "border-green-400",
    text: "text-green-800",
    icon: (
      <svg
        className="w-5 h-5 text-green-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  error: {
    bg: "bg-red-100",
    border: "border-red-400",
    text: "text-red-800",
    icon: (
      <svg
        className="w-5 h-5 text-red-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ),
  },
  warning: {
    bg: "bg-yellow-100",
    border: "border-yellow-400",
    text: "text-yellow-800",
    icon: (
      <svg
        className="w-5 h-5 text-yellow-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v2m0 4h.01M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z"
        />
      </svg>
    ),
  },
  info: {
    bg: "bg-blue-100",
    border: "border-blue-400",
    text: "text-blue-800",
    icon: (
      <svg
        className="w-5 h-5 text-blue-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 16h-1v-4h-1m1-4h.01"
        />
      </svg>
    ),
  },
};

const Message: React.FC = () => {
  const { message, type, visible, hideMessage } = useContext(MessageContext);

  if (!visible || !message) return null;

  const style = typeStyles[type] || typeStyles.info;

  return (
    <div
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-4 py-3 rounded border shadow-lg flex items-center gap-2 ${style.bg} ${style.border} ${style.text} min-w-[250px] max-w-xs`}
      role="alert"
    >
      {style.icon}
      <span className="flex-1">{message}</span>
      <button
        onClick={hideMessage}
        className="ml-2 text-xl font-bold focus:outline-none"
        aria-label="Close"
      >
        &times;
      </button>
    </div>
  );
};

export default Message;
