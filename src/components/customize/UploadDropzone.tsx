import React, { useState, useRef, useEffect } from "react";
import { UploadCloud, File, X, AlertCircle, CheckCircle2 } from "lucide-react";

interface UploadDropzoneProps {
  onArtworkSelected: (file: File | null, objectUrl: string | null) => void;
}

type DropzoneState = "IDLE" | "DRAGGING" | "SELECTED" | "ERROR";

export const UploadDropzone: React.FC<UploadDropzoneProps> = ({ onArtworkSelected }) => {
  const [state, setState] = useState<DropzoneState>("IDLE");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Clean up object URL when file changes or component unmounts
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const validateAndProcessFile = (file: File) => {
    // Max size 25MB
    const MAX_SIZE = 25 * 1024 * 1024;
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg", "image/svg+xml", "application/pdf"];

    if (!ALLOWED_TYPES.includes(file.type)) {
      setErrorMessage("Invalid file format. Please upload PNG, JPG, SVG, or PDF.");
      setState("ERROR");
      return;
    }

    if (file.size > MAX_SIZE) {
      setErrorMessage("File exceeds 25MB limit. Please upload a smaller file.");
      setState("ERROR");
      return;
    }

    // Revoke existing URL
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    const url = URL.createObjectURL(file);
    setSelectedFile(file);
    setPreviewUrl(url);
    setErrorMessage(null);
    setState("SELECTED");
    onArtworkSelected(file, url);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setState("IDLE");

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndProcessFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (state !== "DRAGGING") {
      setState("DRAGGING");
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (state === "DRAGGING") {
      setState(selectedFile ? "SELECTED" : "IDLE");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      validateAndProcessFile(e.target.files[0]);
    }
  };

  const handleRemove = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setSelectedFile(null);
    setPreviewUrl(null);
    setErrorMessage(null);
    setState("IDLE");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    onArtworkSelected(null, null);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="space-y-3">
      <label className="block text-xs font-mono font-bold text-brove-charcoal uppercase tracking-wider">
        UPLOAD YOUR DESIGN / ARTWORK
      </label>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".png,.jpg,.jpeg,.svg,.pdf"
        className="hidden"
        id="artwork-upload-input"
      />

      {state === "SELECTED" && selectedFile ? (
        <div className="bg-white border-2 border-brove-charcoal p-4 flex items-center justify-between shadow-[3px_3px_0px_0px_rgba(23,23,23,1)]">
          <div className="flex items-center gap-3 overflow-hidden">
            {previewUrl && selectedFile.type.startsWith("image/") ? (
              <img
                src={previewUrl}
                alt="Artwork Thumbnail"
                className="w-12 h-12 object-cover border border-brove-border shrink-0 bg-brove-paper"
              />
            ) : (
              <div className="w-12 h-12 bg-brove-yellow text-brove-charcoal flex items-center justify-center shrink-0 border border-brove-charcoal">
                <File className="w-6 h-6" />
              </div>
            )}
            <div className="min-w-0">
              <div className="font-bold text-sm text-brove-charcoal truncate">{selectedFile.name}</div>
              <div className="text-xs font-mono text-brove-ink flex items-center gap-2">
                <span>{formatFileSize(selectedFile.size)}</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> READY FOR PRINT
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-3 py-1 text-xs font-mono border border-brove-charcoal hover:bg-brove-paper transition-colors"
            >
              REPLACE
            </button>
            <button
              type="button"
              onClick={handleRemove}
              className="p-1 text-brove-ink hover:text-rose-600 transition-colors"
              aria-label="Remove uploaded artwork"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed p-6 text-center cursor-pointer transition-all ${
            state === "DRAGGING"
              ? "border-brove-yellow bg-brove-highlight/30 scale-[1.01]"
              : state === "ERROR"
              ? "border-rose-600 bg-rose-50"
              : "border-brove-charcoal bg-white hover:bg-brove-paper"
          }`}
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-brove-yellow text-brove-charcoal flex items-center justify-center border border-brove-charcoal shadow-[2px_2px_0px_0px_rgba(23,23,23,1)]">
              <UploadCloud className="w-6 h-6" />
            </div>
            <div>
              <span className="font-bold text-sm text-brove-charcoal underline">Click to upload</span> or drag and drop artwork
            </div>
            <div className="text-xs font-mono text-brove-ink">
              PNG, JPG, SVG, PDF up to 25MB
            </div>
          </div>
        </div>
      )}

      {state === "ERROR" && errorMessage && (
        <div className="flex items-center gap-2 text-rose-700 text-xs font-bold bg-rose-100 p-2 border border-rose-300">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};
