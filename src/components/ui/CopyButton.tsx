import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  className?: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  textToCopy,
  label = "Copy",
  className = "",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.warn("Failed to copy text:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      title={`Copy ${textToCopy}`}
      aria-label={`Copy ${textToCopy}`}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded font-mono text-xs font-bold uppercase transition-all duration-200 border ${
        copied
          ? "bg-primary-container text-text-primary border-primary-container"
          : "bg-[#FFFFFF] text-[#2A2A24] border-[#E6E2D3] hover:bg-[#FAF8F0] hover:border-primary-container shadow-xs"
      } ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-text-primary stroke-[3]" />
          <span>COPIED</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5 text-[#2A2A24]" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
};
