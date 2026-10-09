import React, { useState, useEffect } from "react";
import {
  Upload,
  X,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Mail,
  Send,
  RotateCcw,
  FileCheck
} from "lucide-react";
import { BUSINESS_FACTS } from "../../data/brove-content";
import { getStoredUTMs } from "../../hooks/useUTMTracking";

export interface RequirementFormData {
  name: string;
  phone: string;
  email: string;
  apparelType: string;
  quantity: number;
  printingMethod: string;
  eventPurpose: string;
  message: string;
  uploadedFile: File | null;
}

interface RequirementFormProps {
  initialApparel?: string;
  initialQuantity?: number;
  embedded?: boolean;
}

const APPAREL_OPTIONS = [
  "Regular Fit T-Shirt",
  "Oversized T-Shirt",
  "Oversized Acid Wash T-Shirt",
  "Polo T-Shirt",
  "Hoodie",
  "Sweatshirt Full Hand",
  "Shirts",
  "Other",
];

const PRINTING_OPTIONS = [
  "DTF Printing",
  "Embroidery",
  "Not Sure",
];

export const RequirementForm: React.FC<RequirementFormProps> = ({
  initialApparel,
  initialQuantity = 5,
  embedded = false,
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [apparelType, setApparelType] = useState(initialApparel || APPAREL_OPTIONS[1]);
  const [quantity, setQuantity] = useState<number>(initialQuantity);
  const [printingMethod, setPrintingMethod] = useState(PRINTING_OPTIONS[0]);
  const [eventPurpose, setEventPurpose] = useState("");
  const [message, setMessage] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);

  // Validation errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  useEffect(() => {
    if (initialApparel) {
      setApparelType(initialApparel);
    }
  }, [initialApparel]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFile(file);
      if (file.type.startsWith("image/")) {
        setFilePreview(URL.createObjectURL(file));
      } else {
        setFilePreview(null);
      }
    }
  };

  const handleRemoveFile = () => {
    if (filePreview) {
      URL.revokeObjectURL(filePreview);
    }
    setUploadedFile(null);
    setFilePreview(null);
  };

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    const cleanPhone = phone.trim().replace(/\D/g, "");
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (cleanPhone.length < 10) {
      newErrors.phone = "Please enter a valid phone number (at least 10 digits).";
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!apparelType) {
      newErrors.apparelType = "Please select an apparel type.";
    }

    if (!quantity || quantity < 5) {
      newErrors.quantity = "Minimum order is 5 pieces.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildRequirementText = () => {
    const utms = getStoredUTMs();
    let text = `*BROVE APPAREL REQUIREMENT ENQUIRY*

*Name:* ${name.trim()}
*Phone:* ${phone.trim()}
*Email:* ${email.trim() || "Not provided"}
*Apparel Type:* ${apparelType}
*Quantity:* ${quantity} pieces (MOQ 5)
*Printing Method:* ${printingMethod}
*Event / Purpose:* ${eventPurpose.trim() || "Not specified"}
*Requirements / Message:* ${message.trim() || "None"}
*Artwork File Attached:* ${uploadedFile ? uploadedFile.name : "Will send separately"}`;

    if (Object.keys(utms).length > 0) {
      text += `\n*Referral Info:* ${JSON.stringify(utms)}`;
    }

    return text;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    // In a real backend, this would POST to a backend API/Formspree/Supabase
    // We log the payload with UTM tracking attached
    const payload = {
      name,
      phone,
      email,
      apparelType,
      quantity,
      printingMethod,
      eventPurpose,
      message,
      fileName: uploadedFile?.name,
      utms: getStoredUTMs(),
      timestamp: new Date().toISOString(),
    };
    try {
      localStorage.setItem("last_brove_enquiry", JSON.stringify(payload));
    } catch (_) {}

    setSubmitted(true);
  };

  const handleReset = () => {
    const isDirty = Boolean(name || phone || email || message || uploadedFile);
    if (isDirty && !showResetConfirm) {
      setShowResetConfirm(true);
      return;
    }

    setName("");
    setPhone("");
    setEmail("");
    setApparelType(APPAREL_OPTIONS[1]);
    setQuantity(5);
    setPrintingMethod(PRINTING_OPTIONS[0]);
    setEventPurpose("");
    setMessage("");
    handleRemoveFile();
    setErrors({});
    setShowResetConfirm(false);
  };

  const whatsAppUrl = `https://wa.me/91${BUSINESS_FACTS.contact.whatsapp}?text=${encodeURIComponent(
    buildRequirementText()
  )}`;

  const emailUrl = `mailto:${BUSINESS_FACTS.contact.email}?subject=${encodeURIComponent(
    `Custom Order Requirement - ${name} (${quantity} pcs ${apparelType})`
  )}&body=${encodeURIComponent(buildRequirementText())}`;

  if (submitted) {
    return (
      <div className="bg-surface-white dark:bg-surface-dark border-4 border-primary-container p-6 sm:p-10 rounded shadow-[8px_8px_0px_#171717] dark:shadow-[8px_8px_0px_#F2D400] text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
        {/* Yellow Confirmation Badge Animation */}
        <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-primary-container animate-ping opacity-25"></div>
          <div className="relative w-20 h-20 rounded-full bg-primary-container text-text-primary flex items-center justify-center border-2 border-text-primary shadow-[4px_4px_0px_#171717]">
            <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
          </div>
        </div>

        <div className="space-y-2 max-w-lg mx-auto">
          <h3 className="font-headline text-3xl sm:text-5xl uppercase tracking-tight text-text-primary dark:text-text-on-dark">
            REQUIREMENT RECEIVED.
          </h3>
          <p className="font-body text-base text-text-muted dark:text-surface-container-highest">
            Your details have been recorded for BROVE. We'll review your specs and get back to you shortly.
          </p>
        </div>

        {/* Dispatch actions */}
        <div className="bg-surface-paper dark:bg-surface-dark-secondary p-4 sm:p-6 rounded border border-border-neutral dark:border-surface-dark-secondary max-w-lg mx-auto space-y-4 text-left font-mono text-xs">
          <div className="flex justify-between items-center border-b border-border-neutral pb-2 text-text-primary dark:text-text-on-dark font-bold">
            <span>SUMMARY:</span>
            <span className="text-primary-container bg-surface-dark px-2 py-0.5 rounded">
              {quantity} × {apparelType}
            </span>
          </div>
          <div className="text-text-muted dark:text-surface-container-high space-y-1">
            <p><strong>Contact:</strong> {name} ({phone})</p>
            <p><strong>Print Method:</strong> {printingMethod}</p>
            {uploadedFile && <p><strong>Artwork:</strong> {uploadedFile.name}</p>}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-primary-container text-text-primary font-headline text-sm uppercase tracking-wider rounded hover:bg-primary-fixed active:scale-95 transition-all shadow-[2px_2px_0px_#171717]"
            >
              <MessageCircle className="w-4 h-4 fill-current stroke-none" />
              <span>SEND VIA WHATSAPP →</span>
            </a>

            <a
              href={emailUrl}
              className="inline-flex items-center justify-center gap-2 py-3 px-4 bg-surface-dark text-text-on-dark dark:bg-surface-white dark:text-text-primary font-headline text-sm uppercase tracking-wider rounded hover:opacity-90 active:scale-95 transition-all border border-text-primary"
            >
              <Mail className="w-4 h-4" />
              <span>EMAIL TO BROVE</span>
            </a>
          </div>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            handleReset();
          }}
          className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-text-muted hover:text-text-primary dark:hover:text-text-on-dark pt-2 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>SUBMIT ANOTHER REQUIREMENT</span>
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`relative bg-surface-white dark:bg-surface-dark border-2 border-text-primary dark:border-primary-container p-6 sm:p-8 lg:p-10 rounded shadow-[6px_6px_0px_#171717] dark:shadow-[6px_6px_0px_#F2D400] space-y-6 ${
        embedded ? "w-full" : "max-w-3xl mx-auto"
      }`}
    >
      {/* Top Banner Tag */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-border-neutral dark:border-surface-dark-secondary pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-primary-container inline-block"></span>
          <span className="font-mono text-xs uppercase tracking-widest text-text-primary dark:text-text-on-dark font-bold">
            REQUIREMENT INTAKE
          </span>
        </div>
        <span className="font-mono text-[11px] uppercase tracking-wider bg-primary-container text-text-primary px-2.5 py-0.5 rounded font-bold">
          MINIMUM 5 PIECES
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div className="space-y-1.5">
          <label htmlFor="req-name" className="block font-mono text-xs uppercase font-bold text-text-primary dark:text-text-on-dark">
            YOUR NAME <span className="text-red-500">*</span>
          </label>
          <input
            id="req-name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
            }}
            placeholder="e.g. Ashwin Kumar"
            className={`w-full px-4 py-2.5 rounded bg-surface-paper dark:bg-surface-dark-secondary text-text-primary dark:text-text-on-dark border ${
              errors.name ? "border-red-500 ring-1 ring-red-500" : "border-border-neutral dark:border-surface-dark-secondary"
            } font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary-container`}
          />
          {errors.name && (
            <p className="font-mono text-xs text-red-500 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label htmlFor="req-phone" className="block font-mono text-xs uppercase font-bold text-text-primary dark:text-text-on-dark">
            PHONE NUMBER <span className="text-red-500">*</span>
          </label>
          <input
            id="req-phone"
            type="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
            }}
            placeholder="e.g. 9443941897"
            className={`w-full px-4 py-2.5 rounded bg-surface-paper dark:bg-surface-dark-secondary text-text-primary dark:text-text-on-dark border ${
              errors.phone ? "border-red-500 ring-1 ring-red-500" : "border-border-neutral dark:border-surface-dark-secondary"
            } font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary-container`}
          />
          {errors.phone && (
            <p className="font-mono text-xs text-red-500 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="req-email" className="block font-mono text-xs uppercase font-bold text-text-primary dark:text-text-on-dark">
            EMAIL ADDRESS <span className="text-text-muted font-normal">(OPTIONAL)</span>
          </label>
          <input
            id="req-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
            }}
            placeholder="e.g. yourname@gmail.com"
            className={`w-full px-4 py-2.5 rounded bg-surface-paper dark:bg-surface-dark-secondary text-text-primary dark:text-text-on-dark border ${
              errors.email ? "border-red-500 ring-1 ring-red-500" : "border-border-neutral dark:border-surface-dark-secondary"
            } font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary-container`}
          />
          {errors.email && (
            <p className="font-mono text-xs text-red-500 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Apparel Type */}
        <div className="space-y-1.5">
          <label htmlFor="req-apparel" className="block font-mono text-xs uppercase font-bold text-text-primary dark:text-text-on-dark">
            APPAREL TYPE <span className="text-red-500">*</span>
          </label>
          <select
            id="req-apparel"
            value={apparelType}
            onChange={(e) => {
              setApparelType(e.target.value);
              if (errors.apparelType) setErrors((prev) => ({ ...prev, apparelType: "" }));
            }}
            className="w-full px-4 py-2.5 rounded bg-surface-paper dark:bg-surface-dark-secondary text-text-primary dark:text-text-on-dark border border-border-neutral dark:border-surface-dark-secondary font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary-container"
          >
            {APPAREL_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.apparelType && (
            <p className="font-mono text-xs text-red-500 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.apparelType}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Quantity (min 5) */}
        <div className="space-y-1.5">
          <label htmlFor="req-qty" className="block font-mono text-xs uppercase font-bold text-text-primary dark:text-text-on-dark">
            QUANTITY (MINIMUM 5) <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-2">
            <input
              id="req-qty"
              type="number"
              min={5}
              value={quantity}
              onChange={(e) => {
                const val = parseInt(e.target.value, 10);
                setQuantity(isNaN(val) ? 0 : val);
                if (errors.quantity) setErrors((prev) => ({ ...prev, quantity: "" }));
              }}
              className={`w-full px-4 py-2.5 rounded bg-surface-paper dark:bg-surface-dark-secondary text-text-primary dark:text-text-on-dark border ${
                errors.quantity ? "border-red-500 ring-1 ring-red-500" : "border-border-neutral dark:border-surface-dark-secondary"
              } font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary-container`}
            />
            <div className="flex gap-1 shrink-0">
              {[5, 10, 25, 50].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => {
                    setQuantity(preset);
                    if (errors.quantity) setErrors((prev) => ({ ...prev, quantity: "" }));
                  }}
                  className={`px-2.5 py-1.5 font-mono text-xs rounded border transition-colors ${
                    quantity === preset
                      ? "bg-primary-container text-text-primary border-primary-container font-bold"
                      : "bg-surface-paper dark:bg-surface-dark-secondary text-text-primary dark:text-text-on-dark border-border-neutral dark:border-surface-dark-secondary hover:border-primary-container"
                  }`}
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>
          {errors.quantity && (
            <p className="font-mono text-xs text-red-500 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.quantity}</span>
            </p>
          )}
        </div>

        {/* Printing Method */}
        <div className="space-y-1.5">
          <label htmlFor="req-method" className="block font-mono text-xs uppercase font-bold text-text-primary dark:text-text-on-dark">
            PRINTING METHOD
          </label>
          <select
            id="req-method"
            value={printingMethod}
            onChange={(e) => setPrintingMethod(e.target.value)}
            className="w-full px-4 py-2.5 rounded bg-surface-paper dark:bg-surface-dark-secondary text-text-primary dark:text-text-on-dark border border-border-neutral dark:border-surface-dark-secondary font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary-container"
          >
            {PRINTING_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Event / Purpose */}
      <div className="space-y-1.5">
        <label htmlFor="req-event" className="block font-mono text-xs uppercase font-bold text-text-primary dark:text-text-on-dark">
          EVENT / PURPOSE <span className="text-text-muted font-normal">(COLLEGE, CLUB, BRAND, EVENT, TEAM)</span>
        </label>
        <input
          id="req-event"
          type="text"
          value={eventPurpose}
          onChange={(e) => setEventPurpose(e.target.value)}
          placeholder="e.g. Department Symposium 2026, Sports Team, Merchandise Drop"
          className="w-full px-4 py-2.5 rounded bg-surface-paper dark:bg-surface-dark-secondary text-text-primary dark:text-text-on-dark border border-border-neutral dark:border-surface-dark-secondary font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary-container"
        />
      </div>

      {/* Requirements / Notes */}
      <div className="space-y-1.5">
        <label htmlFor="req-msg" className="block font-mono text-xs uppercase font-bold text-text-primary dark:text-text-on-dark">
          MESSAGE & REQUIREMENTS <span className="text-text-muted font-normal">(SIZES, PLACEMENT, DEADLINE)</span>
        </label>
        <textarea
          id="req-msg"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your print locations (front chest, back graphic, sleeve), sizes needed (e.g. 5 M, 10 L), or delivery deadlines..."
          className="w-full px-4 py-2.5 rounded bg-surface-paper dark:bg-surface-dark-secondary text-text-primary dark:text-text-on-dark border border-border-neutral dark:border-surface-dark-secondary font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary-container"
        />
      </div>

      {/* Upload Design File */}
      <div className="space-y-1.5">
        <span className="block font-mono text-xs uppercase font-bold text-text-primary dark:text-text-on-dark">
          UPLOAD ARTWORK / REFERENCE <span className="text-text-muted font-normal">(OPTIONAL)</span>
        </span>
        
        {uploadedFile ? (
          <div className="p-4 rounded bg-surface-paper dark:bg-surface-dark-secondary border border-border-neutral dark:border-surface-dark-secondary flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 overflow-hidden">
              {filePreview ? (
                <img
                  src={filePreview}
                  alt="Artwork preview"
                  className="w-12 h-12 object-cover rounded border border-border-neutral"
                />
              ) : (
                <FileCheck className="w-8 h-8 text-primary-container shrink-0" />
              )}
              <div className="truncate text-xs font-mono">
                <p className="font-bold text-text-primary dark:text-text-on-dark truncate">{uploadedFile.name}</p>
                <p className="text-text-muted">{(uploadedFile.size / 1024).toFixed(1)} KB</p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleRemoveFile}
              className="p-1.5 rounded hover:bg-red-500/10 text-red-500 transition-colors"
              aria-label="Remove uploaded file"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <label className="border-2 border-dashed border-border-neutral dark:border-surface-dark-secondary hover:border-primary-container dark:hover:border-primary-container rounded p-6 flex flex-col items-center justify-center cursor-pointer transition-colors text-center group">
            <Upload className="w-6 h-6 text-text-muted group-hover:text-primary-container transition-colors mb-2" />
            <span className="font-mono text-xs uppercase font-bold text-text-primary dark:text-text-on-dark">
              Click to choose design file or drag and drop
            </span>
            <span className="font-body text-[11px] text-text-muted mt-0.5">
              PNG, JPG, PDF, AI, SVG, or PSD up to 50MB
            </span>
            <input
              type="file"
              onChange={handleFileChange}
              accept="image/*,.pdf,.ai,.psd,.svg"
              className="sr-only"
            />
          </label>
        )}
      </div>

      {/* Action Buttons */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="button"
          onClick={handleReset}
          className="font-mono text-xs uppercase tracking-wider text-text-muted hover:text-text-primary dark:hover:text-text-on-dark transition-colors"
        >
          CLEAR FORM
        </button>

        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary-container text-text-primary font-headline text-lg uppercase tracking-wider rounded hover:bg-primary-fixed active:scale-95 transition-all shadow-[4px_4px_0px_#171717] dark:shadow-[4px_4px_0px_#FFFFFF]"
        >
          <Send className="w-4 h-4" />
          <span>SEND YOUR REQUIREMENT →</span>
        </button>
      </div>

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-dark/70 backdrop-blur-sm animate-in fade-in"
        >
          <div className="bg-surface-white dark:bg-surface-dark p-6 rounded-lg max-w-sm w-full border-2 border-text-primary dark:border-primary-container shadow-[6px_6px_0px_#171717] space-y-4">
            <p className="font-headline text-xl uppercase text-text-primary dark:text-text-on-dark">
              CLEAR THIS REQUIREMENT?
            </p>
            <p className="font-body text-xs text-text-muted">
              Are you sure you want to reset the form? Any artwork or information you entered will be lost.
            </p>
            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowResetConfirm(false)}
                className="px-4 py-2 font-mono text-xs uppercase rounded border border-border-neutral hover:bg-surface-paper text-text-primary dark:text-text-on-dark"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowResetConfirm(false);
                  setName("");
                  setPhone("");
                  setEmail("");
                  setMessage("");
                  setEventPurpose("");
                  handleRemoveFile();
                }}
                className="px-4 py-2 font-mono text-xs uppercase rounded bg-red-500 text-white font-bold hover:bg-red-600"
              >
                Yes, Clear
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};
