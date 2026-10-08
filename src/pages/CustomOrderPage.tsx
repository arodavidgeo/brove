import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SEOHead } from "../components/layout/SEOHead";
import { BUSINESS_FACTS } from "../data/brove-content";
import { PRODUCTS } from "../data/products";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Upload,
  X,
  MessageCircle,
  FileText,
  Calendar,
  Layers,
  Users,
  ExternalLink,
  Copy,
  Check,
  Mail,
  Loader2
} from "lucide-react";
import { WorkshopTicker } from "../components/layout/WorkshopTicker";

export const CustomOrderPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialProductId = searchParams.get("product");
  const initialQty = parseInt(searchParams.get("qty") || "") || 20;

  const defaultApparel =
    PRODUCTS.find((p) => p.id === initialProductId)?.name || PRODUCTS[1].name; // default Oversized T-Shirt

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    apparelType: defaultApparel,
    quantity: initialQty,
    sizeRequirements: "Mix of M, L, XL",
    printingMethod: "DTF Printing",
    designStatus: "Have ready artwork",
    eventPurpose: "College / Department Event",
    requiredDate: "",
    additionalNotes: "",
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [filePreviewUrl, setFilePreviewUrl] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "success" | "fallback">("idle");
  const [uploadedDirectUrl, setUploadedDirectUrl] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialProductId) {
      const match = PRODUCTS.find((p) => p.id === initialProductId);
      if (match) {
        setFormData((prev) => ({ ...prev, apparelType: match.name }));
      }
    }
  }, [initialProductId]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFile(file);
      if (file.type.startsWith("image/")) {
        setFilePreviewUrl(URL.createObjectURL(file));
      } else {
        setFilePreviewUrl(null);
      }

      // Automatically upload file to cloud so BROVE receives a direct downloadable link on WhatsApp
      setUploadStatus("uploading");
      try {
        const formDataPayload = new FormData();
        formDataPayload.append("file", file);
        const res = await fetch("https://tmpfiles.org/api/v1/upload", {
          method: "POST",
          body: formDataPayload,
        });

        if (!res.ok) throw new Error("Upload HTTP error");
        const json = await res.json();
        let directUrl = json?.data?.url || "";
        if (directUrl.includes("tmpfiles.org/") && !directUrl.includes("tmpfiles.org/dl/")) {
          directUrl = directUrl.replace("tmpfiles.org/", "tmpfiles.org/dl/");
        }

        if (directUrl) {
          setUploadedDirectUrl(directUrl);
          setUploadStatus("success");
        } else {
          setUploadStatus("fallback");
        }
      } catch (err) {
        console.warn("Artwork upload error, continuing with chat attachment fallback:", err);
        setUploadStatus("fallback");
      }
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    setUploadedDirectUrl(null);
    setUploadStatus("idle");
    if (filePreviewUrl) {
      URL.revokeObjectURL(filePreviewUrl);
      setFilePreviewUrl(null);
    }
  };

  const handleCopyLink = () => {
    if (uploadedDirectUrl) {
      navigator.clipboard.writeText(uploadedDirectUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const buildWhatsAppMessage = () => {
    const designDetail = uploadedDirectUrl
      ? `${formData.designStatus}
*Uploaded Artwork Link:* ${uploadedDirectUrl}
*File Name:* ${uploadedFile?.name || "Uploaded File"}`
      : uploadedFile
      ? `${formData.designStatus} (File: ${uploadedFile.name} — will attach in chat)`
      : formData.designStatus;

    const text = `*BROVE CUSTOM ORDER ENQUIRY*

*Name:* ${formData.name || "Not provided"}
*Phone:* ${formData.phone || "Not provided"}
*Email:* ${formData.email || "Not provided"}
*Delivery City / State:* ${formData.city || "Not provided"}
*Apparel Type:* ${formData.apparelType}
*Quantity:* ${formData.quantity} pieces
*Size Requirements:* ${formData.sizeRequirements}
*Printing Method:* ${formData.printingMethod}
*Event / Purpose:* ${formData.eventPurpose}
*Required By Date:* ${formData.requiredDate || "Flexible"}
*Design Status:* ${designDetail}
*Additional Requirements:* ${formData.additionalNotes || "None"}`;

    return encodeURIComponent(text);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsAppUrl = `https://wa.me/91${BUSINESS_FACTS.contact.whatsapp}?text=${buildWhatsAppMessage()}`;

  const emailSubject = encodeURIComponent(
    `Custom Order Requirement - ${formData.name} (${formData.quantity} pcs ${formData.apparelType})`
  );
  const emailBody = encodeURIComponent(
    `Hello BROVE,\n\nHere are my order details:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nApparel: ${formData.apparelType}\nQuantity: ${formData.quantity}\nSizes: ${formData.sizeRequirements}\nMethod: ${formData.printingMethod}\nCity: ${formData.city}\nRequired Date: ${formData.requiredDate}\n${uploadedDirectUrl ? `Artwork Link: ${uploadedDirectUrl}\n` : ""}\nAdditional Notes: ${formData.additionalNotes}\n\n(Artwork file attached to this email)`
  );
  const mailToUrl = `mailto:${BUSINESS_FACTS.contact.email}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <>
      <SEOHead
        title="SUBMIT CUSTOM ORDER REQUIREMENT : BROVE Custom Apparel"
        description="Submit your custom apparel requirement for college symposiums, department events, clubs, teams, companies, and group orders. Direct WhatsApp connection with BROVE."
        path="/custom-order"
      />

      <div className="w-full bg-surface-paper py-8 md:py-16 pt-24">
        
        {/* Ticker banner */}
        <WorkshopTicker className="mb-8" />

        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 bg-primary-container text-text-primary px-3 py-1 font-mono text-xs font-bold border border-text-primary shadow-[2px_2px_0px_#171717]">
              <span>CUSTOMER REQUIREMENT SYSTEM</span>
            </div>
            <h1 className="font-headline text-5xl sm:text-7xl uppercase text-text-primary tracking-tight leading-none">
              TELL US WHAT YOU NEED.
            </h1>
            <p className="font-body text-sm sm:text-base text-text-muted leading-relaxed">
              No conventional cart or online payment needed. Fill in your apparel requirement below and send it directly to BROVE. We review your specifications and get in touch with proofs and exact pricing.
            </p>
          </div>

          {submitted ? (
            /* AFTER SUBMISSION SCREEN (HONEST ENQUIRY CONFIRMATION) */
            <div className="bg-white border-4 border-text-primary p-6 sm:p-10 text-center space-y-8 shadow-[8px_8px_0px_#171717] rounded">
              <div className="w-16 h-16 bg-primary-container text-text-primary mx-auto flex items-center justify-center border-2 border-text-primary rounded-full shadow-[3px_3px_0px_#171717]">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2 max-w-xl mx-auto">
                <span className="font-mono text-xs uppercase tracking-widest text-text-muted font-bold block">
                  REQUIREMENT PREPARED
                </span>
                <h2 className="font-headline text-3xl sm:text-5xl uppercase text-text-primary leading-tight">
                  YOUR REQUIREMENT IS READY TO SEND.
                </h2>
                <p className="font-body text-sm sm:text-base text-text-muted leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>! Your order requirement for <strong>{formData.quantity} pieces of {formData.apparelType}</strong> has been formatted. Click below to send it straight to BROVE on WhatsApp.
                </p>
              </div>

              {/* Requirement Summary Box */}
              <div className="bg-surface-paper border border-border-neutral rounded p-6 text-left max-w-lg mx-auto font-mono text-xs space-y-2.5 text-text-primary">
                <div className="flex justify-between border-b border-border-neutral pb-2 font-bold uppercase">
                  <span>SPECIFICATION</span>
                  <span>DETAILS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Apparel:</span>
                  <span className="font-bold">{formData.apparelType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Quantity:</span>
                  <span className="font-bold">{formData.quantity} Pieces</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Sizes:</span>
                  <span>{formData.sizeRequirements}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Method:</span>
                  <span>{formData.printingMethod}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">City / State:</span>
                  <span>{formData.city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Contact:</span>
                  <span>{formData.phone}</span>
                </div>

                {/* Uploaded Artwork Section */}
                {uploadedFile && (
                  <div className="pt-2 border-t border-border-neutral space-y-2">
                    <div className="flex justify-between items-center text-primary-DEFAULT font-bold">
                      <span>Design File:</span>
                      <span className="truncate max-w-[200px]">{uploadedFile.name}</span>
                    </div>

                    {filePreviewUrl && (
                      <div className="flex items-center gap-3 bg-white p-2.5 rounded border border-border-neutral">
                        <img
                          src={filePreviewUrl}
                          alt="Uploaded Artwork"
                          className="w-14 h-14 object-cover rounded border border-border-neutral"
                        />
                        <div className="text-left overflow-hidden flex-1">
                          <p className="font-bold text-xs truncate">{uploadedFile.name}</p>
                          <span className="text-[10px] text-text-muted block">
                            {(uploadedFile.size / 1024).toFixed(1)} KB
                          </span>
                          {uploadedDirectUrl ? (
                            <span className="text-[10px] text-green-700 font-bold flex items-center gap-1 mt-0.5">
                              <Check className="w-3 h-3" />
                              Cloud Link Attached for BROVE
                            </span>
                          ) : (
                            <span className="text-[10px] text-amber-700">
                              Attach via WhatsApp paperclip
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {uploadedDirectUrl && (
                      <div className="flex items-center gap-2 pt-1">
                        <a
                          href={uploadedDirectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-text-primary bg-primary-container px-2.5 py-1 rounded hover:bg-white border border-text-primary transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>View Uploaded File</span>
                        </a>
                        <button
                          type="button"
                          onClick={handleCopyLink}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-text-primary bg-white px-2.5 py-1 rounded hover:bg-surface-paper border border-border-neutral transition-colors"
                        >
                          {copiedLink ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedLink ? "Link Copied!" : "Copy Link"}</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Primary Actions: WhatsApp + Email Fallback */}
              <div className="space-y-4 max-w-lg mx-auto">
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 bg-primary-container text-text-primary px-8 py-4 font-headline text-xl uppercase tracking-wider border-2 border-text-primary hover:bg-white active:scale-95 transition-all shadow-[4px_4px_0px_#171717] rounded"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>SEND TO BROVE ON WHATSAPP →</span>
                </a>

                {/* Clear Instruction for Customer */}
                <div className="bg-surface-paper border border-border-neutral p-3.5 rounded text-left font-mono text-xs text-text-muted space-y-1">
                  <p className="font-bold text-text-primary">
                    💡 How your design reaches BROVE:
                  </p>
                  <p>
                    {uploadedDirectUrl
                      ? "• Your high-resolution artwork download link is already pre-written in the WhatsApp message."
                      : "• Your requirement details are pre-written in the WhatsApp message."}
                  </p>
                  <p>
                    • You can also tap the <strong>📎 Paperclip / Attachment icon</strong> in WhatsApp to share raw image or vector files directly with us.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={mailToUrl}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 font-mono text-xs uppercase tracking-wider text-text-primary bg-white border border-text-primary hover:bg-surface-paper transition-all rounded"
                  >
                    <Mail className="w-4 h-4" />
                    <span>EMAIL ARTWORK INSTEAD</span>
                  </a>
                  <Link
                    to="/wardrobe"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 font-mono text-xs uppercase tracking-wider text-text-primary border border-border-neutral hover:bg-surface-paper transition-all rounded"
                  >
                    BACK TO WARDROBE
                  </Link>
                </div>
              </div>

              <p className="text-xs font-mono text-text-muted max-w-md mx-auto">
                BROVE Studio Hotline: <strong>{BUSINESS_FACTS.contact.phone}</strong> (Coimbatore, Tamil Nadu).
              </p>
            </div>
          ) : (
            /* REQUIREMENT INPUT FORM */
            <div className="bg-white border-2 border-text-primary p-6 sm:p-10 space-y-8 shadow-[6px_6px_0px_#171717] rounded">
              {/* Trust Header */}
              <div className="bg-surface-paper border border-border-neutral p-4 font-mono text-xs flex flex-wrap items-center justify-between gap-3">
                <div className="font-bold text-text-primary flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary-container fill-primary-container stroke-text-primary" />
                  <span>{BUSINESS_FACTS.moqText}</span>
                </div>
                <div className="text-text-muted">
                  DISPATCH VIA ST COURIER (3–7 DAYS) ALL OVER INDIA
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* 1. Apparel Selection */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 font-mono text-xs font-bold text-text-primary uppercase tracking-wider">
                    <Layers className="w-4 h-4 text-primary-container" />
                    <span>1. CHOOSE APPAREL TYPE *</span>
                  </label>
                  <select
                    value={formData.apparelType}
                    onChange={(e) => setFormData({ ...formData, apparelType: e.target.value })}
                    className="w-full bg-surface-paper border-2 border-text-primary p-3.5 font-body text-sm font-bold text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-container"
                  >
                    {PRODUCTS.map((prod) => (
                      <option key={prod.id} value={prod.name}>
                        {prod.name} — {prod.price ? `₹${prod.price}` : "Custom Pricing"} ({prod.category})
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2. Quantity & Size Requirements */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block font-mono text-xs font-bold text-text-primary uppercase tracking-wider">
                      2. QUANTITY (PIECES, MIN 5) *
                    </label>
                    <input
                      type="number"
                      min={5}
                      required
                      value={formData.quantity}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          quantity: Math.max(1, parseInt(e.target.value) || 5),
                        })
                      }
                      className="w-full bg-surface-paper border-2 border-text-primary p-3.5 font-mono text-base font-bold text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-container"
                    />
                    <span className="text-[11px] font-mono text-text-muted block">
                      Bulk orders supported (e.g. 20, 50, 100+ pcs)
                    </span>
                  </div>

                  <div className="space-y-2">
                    <label className="block font-mono text-xs font-bold text-text-primary uppercase tracking-wider">
                      3. SIZE REQUIREMENTS *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.sizeRequirements}
                      onChange={(e) => setFormData({ ...formData, sizeRequirements: e.target.value })}
                      placeholder="e.g. 5 M, 10 L, 5 XL (or Mix sizes)"
                      className="w-full bg-surface-paper border-2 border-text-primary p-3.5 font-body text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-container"
                    />
                    <span className="text-[11px] font-mono text-text-muted block">
                      Mix sizes freely (S to 2XL) in your batch
                    </span>
                  </div>
                </div>

                {/* 3. Printing Method & Event Purpose */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block font-mono text-xs font-bold text-text-primary uppercase tracking-wider">
                      4. PRINTING / DECORATION METHOD *
                    </label>
                    <select
                      value={formData.printingMethod}
                      onChange={(e) => setFormData({ ...formData, printingMethod: e.target.value })}
                      className="w-full bg-surface-paper border-2 border-text-primary p-3.5 font-body text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-container"
                    >
                      <option value="DTF Printing">DTF Printing (Vibrant, Colorful & Detailed)</option>
                      <option value="Embroidery">Embroidery (Tactile Thread Finish for Logos)</option>
                      <option value="Not sure - BROVE can recommend">Not sure — BROVE can recommend</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 font-mono text-xs font-bold text-text-primary uppercase tracking-wider">
                      <Users className="w-3.5 h-3.5" />
                      <span>5. EVENT / PURPOSE *</span>
                    </label>
                    <select
                      value={formData.eventPurpose}
                      onChange={(e) => setFormData({ ...formData, eventPurpose: e.target.value })}
                      className="w-full bg-surface-paper border-2 border-text-primary p-3.5 font-body text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-container"
                    >
                      <option value="College / Department Event">College / Department Event</option>
                      <option value="College Symposium / Fest">College Symposium / Fest</option>
                      <option value="Club / Student Group">Club / Student Group</option>
                      <option value="Company / Corporate Uniforms">Company / Corporate Uniforms</option>
                      <option value="Sports / Gaming Team">Sports / Gaming Team</option>
                      <option value="Personal Group Order">Personal Group Order</option>
                      <option value="Other">Other Custom Purpose</option>
                    </select>
                  </div>
                </div>

                {/* 4. Design Upload & Transmission Status */}
                <div className="space-y-3 pt-2 border-t border-border-neutral">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <label className="font-mono text-xs font-bold text-text-primary uppercase tracking-wider">
                      6. DESIGN / ARTWORK (OPTIONAL)
                    </label>
                    <select
                      value={formData.designStatus}
                      onChange={(e) => setFormData({ ...formData, designStatus: e.target.value })}
                      className="bg-surface-paper border border-border-neutral p-1.5 font-mono text-xs text-text-primary rounded"
                    >
                      <option value="Have ready artwork">Have ready artwork</option>
                      <option value="Have rough sketch / reference">Have rough sketch / reference</option>
                      <option value="Need BROVE design help">Need BROVE design help</option>
                    </select>
                  </div>

                  {/* Upload Box */}
                  <div className="border-2 border-dashed border-border-neutral rounded p-6 bg-surface-paper text-center space-y-3 hover:border-text-primary transition-colors">
                    {uploadedFile ? (
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded border border-border-neutral">
                        <div className="flex items-center gap-3 overflow-hidden text-left">
                          {filePreviewUrl ? (
                            <img
                              src={filePreviewUrl}
                              alt="Uploaded Design Preview"
                              className="w-14 h-14 object-cover rounded border border-border-neutral shrink-0"
                            />
                          ) : (
                            <FileText className="w-10 h-10 text-primary-container shrink-0" />
                          )}
                          <div className="overflow-hidden">
                            <p className="font-mono text-xs font-bold text-text-primary truncate">
                              {uploadedFile.name}
                            </p>
                            <span className="font-mono text-[10px] text-text-muted block">
                              {(uploadedFile.size / 1024).toFixed(1)} KB
                            </span>

                            {/* Cloud link upload state indicator */}
                            {uploadStatus === "uploading" && (
                              <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted mt-1">
                                <Loader2 className="w-3 h-3 animate-spin text-primary-container" />
                                <span>Generating direct WhatsApp link...</span>
                              </div>
                            )}

                            {uploadStatus === "success" && (
                              <div className="flex items-center gap-1 text-xs font-mono text-green-700 font-bold mt-1">
                                <Check className="w-3.5 h-3.5" />
                                <span>Ready to send directly in WhatsApp message!</span>
                              </div>
                            )}

                            {uploadStatus === "fallback" && (
                              <div className="text-xs font-mono text-amber-700 mt-1">
                                <span>File registered (Attach via WhatsApp chat)</span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                          {uploadedDirectUrl && (
                            <a
                              href={uploadedDirectUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-mono text-text-primary underline hover:text-primary-DEFAULT"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              <span>View file</span>
                            </a>
                          )}
                          <button
                            type="button"
                            onClick={handleRemoveFile}
                            className="inline-flex items-center gap-1 text-xs font-mono text-red-600 hover:text-red-800 transition-colors"
                          >
                            <X className="w-4 h-4" />
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <label className="cursor-pointer block space-y-2">
                        <Upload className="w-8 h-8 mx-auto text-text-muted" />
                        <span className="font-headline text-base uppercase text-text-primary block">
                          CLICK TO ATTACH DESIGN OR REFERENCE
                        </span>
                        <span className="font-mono text-xs text-text-muted block">
                          PNG, JPG, PDF, SVG, AI up to 25MB (Will be linked directly in your WhatsApp enquiry)
                        </span>
                        <input
                          type="file"
                          accept="image/*,.pdf,.ai,.psd,.svg"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                </div>

                {/* 5. Required Date & Notes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 font-mono text-xs font-bold text-text-primary uppercase tracking-wider">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>7. REQUIRED DELIVERY DATE</span>
                    </label>
                    <input
                      type="date"
                      value={formData.requiredDate}
                      onChange={(e) => setFormData({ ...formData, requiredDate: e.target.value })}
                      className="w-full bg-surface-paper border-2 border-text-primary p-3 font-mono text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-container"
                    />
                    <span className="text-[11px] font-mono text-text-muted block">
                      ST Courier turnaround is typically 3–7 working days
                    </span>
                  </div>

                  <div className="space-y-2">
                    <label className="block font-mono text-xs font-bold text-text-primary uppercase tracking-wider">
                      8. ADDITIONAL REQUIREMENTS / NOTES
                    </label>
                    <input
                      type="text"
                      value={formData.additionalNotes}
                      onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                      placeholder="e.g. Chest print size, sleeve text, color shades..."
                      className="w-full bg-surface-paper border-2 border-text-primary p-3 font-body text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-container"
                    />
                  </div>
                </div>

                {/* 6. Contact Information */}
                <div className="space-y-4 pt-4 border-t-2 border-text-primary">
                  <span className="font-headline text-xl uppercase text-text-primary block">
                    CONTACT &amp; DELIVERY DETAILS
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="block font-mono text-xs font-bold text-text-primary uppercase">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ashwin Kumar"
                        className="w-full bg-surface-paper border-2 border-text-primary p-3 font-body text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-container"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block font-mono text-xs font-bold text-text-primary uppercase">
                        PHONE / WHATSAPP NUMBER *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="9443941897"
                        className="w-full bg-surface-paper border-2 border-text-primary p-3 font-mono text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-container"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block font-mono text-xs font-bold text-text-primary uppercase">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ashwinkumar412002@gmail.com"
                        className="w-full bg-surface-paper border-2 border-text-primary p-3 font-body text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-container"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block font-mono text-xs font-bold text-text-primary uppercase">
                        DELIVERY CITY / STATE *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Coimbatore, Tamil Nadu"
                        className="w-full bg-surface-paper border-2 border-text-primary p-3 font-body text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-container"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-6 border-t-2 border-text-primary">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 bg-primary-container text-text-primary py-4 px-8 font-headline text-2xl uppercase tracking-wider border-2 border-text-primary hover:bg-white active:scale-95 transition-all shadow-[4px_4px_0px_#171717]"
                  >
                    <span>SUBMIT YOUR REQUIREMENT →</span>
                    <ArrowRight className="w-6 h-6" />
                  </button>
                  <p className="text-center font-mono text-xs text-text-muted mt-3">
                    No online payment required. Your requirement and artwork link will be prepared for instant WhatsApp dispatch to BROVE.
                  </p>
                </div>
              </form>
            </div>
          )}

        </div>
      </div>
    </>
  );
};
