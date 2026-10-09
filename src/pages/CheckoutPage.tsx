import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { SEOHead } from "../components/layout/SEOHead";
import { useCart } from "../context/CartContext";
import { CustomerDetails } from "../types";

export const CheckoutPage: React.FC = () => {
  const { cart, subtotal, itemCount } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState<CustomerDetails>(() => {
    const saved = sessionStorage.getItem("brove_checkout_customer");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // default
      }
    }
    return {
      name: "Ashwin Kumar",
      phone: "9443941897",
      email: "ashwinkumar412002@gmail.com",
      address: "M90, TNHB colony, Stage 3, KTC Nagar",
      city: "Tirunelveli",
      state: "Tamil Nadu",
      pinCode: "627011",
      country: "India",
    };
  });

  const [errors, setErrors] = useState<Partial<Record<keyof CustomerDetails, string>>>({});

  if (cart.length === 0) {
    navigate("/cart");
    return null;
  }

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof CustomerDetails, string>> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Valid 10-digit phone number is required";
    }
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Valid email address is required";
    }
    if (!form.address.trim()) newErrors.address = "Street address is required";
    if (!form.city.trim()) newErrors.city = "City is required";
    if (!form.pinCode.trim() || !/^\d{6}$/.test(form.pinCode.trim())) {
      newErrors.pinCode = "Valid 6-digit postal PIN code is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      sessionStorage.setItem("brove_checkout_customer", JSON.stringify(form));
      navigate("/checkout/payment");
    }
  };

  return (
    <>
      <SEOHead
        title="DISPATCH SPECIFICATIONS : Checkout Step 02 | BROVE"
        description="Enter recipient shipping address and order details. All deliveries dispatched through ST Courier within 3–7 days."
        path="/checkout"
      />

      <div className="w-full bg-surface-paper min-h-screen pt-20">
        <div className="w-full max-w-[1400px] mx-auto px-margin-mobile lg:px-margin py-space-lg lg:py-space-xl">
          
          {/* Breadcrumb & Stepper Bar */}
          <div className="flex flex-col gap-space-md mb-space-lg">
            <div className="flex items-center gap-space-xs text-text-muted font-mono text-xs uppercase tracking-wider">
              <Link to="/cart" className="hover:text-text-primary transition-colors flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                Return to Cart Review
              </Link>
              <span>/</span>
              <span className="text-text-primary font-bold">Checkout Step 02</span>
            </div>

            {/* Stepper Card */}
            <div className="bg-surface-white p-space-md rounded shadow-sm w-full border border-border-neutral">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md items-center">
                {/* Step 1 */}
                <div className="flex items-center gap-space-xs">
                  <div className="w-6 h-6 rounded-full bg-surface-dark text-text-on-dark flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted">Step 01</p>
                    <p className="font-mono text-xs uppercase text-text-primary truncate font-bold">Cart & Batches</p>
                  </div>
                </div>

                {/* Step 2 (Active) */}
                <div className="flex items-center gap-space-xs">
                  <div className="w-6 h-6 rounded-full bg-primary-container text-text-primary font-bold flex items-center justify-center shrink-0 shadow-[1px_1px_0px_#171717]">
                    <span className="font-mono text-xs">02</span>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-primary font-bold">Active Stage</p>
                    </div>
                    <p className="font-headline text-lg uppercase text-text-primary truncate">Dispatch Specs</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-center gap-space-xs opacity-50">
                  <div className="w-6 h-6 rounded-full bg-surface-container-high text-text-muted flex items-center justify-center shrink-0">
                    <span className="font-mono text-xs">03</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted">Step 03</p>
                    <p className="font-mono text-xs uppercase text-text-muted truncate">Authorisation</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-center gap-space-xs opacity-50">
                  <div className="w-6 h-6 rounded-full bg-surface-container-high text-text-muted flex items-center justify-center shrink-0">
                    <span className="font-mono text-xs">04</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted">Step 04</p>
                    <p className="font-mono text-xs uppercase text-text-muted truncate">Production Pass</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Headline */}
            <div className="pt-space-xs">
              <h1 className="font-headline text-4xl sm:text-5xl uppercase tracking-tight text-text-primary leading-none">
                DISPATCH SPECIFICATIONS
              </h1>
              <p className="text-xs text-text-muted mt-space-xs">
                Provide your delivery coordinates. All packages are insured and dispatched across India via ST Courier (3–7 Days).
              </p>
            </div>
          </div>

          {/* Form and Summary Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            
            {/* Left Column (7 Cols): Customer Form */}
            <div className="lg:col-span-7 bg-surface-white rounded p-space-md lg:p-space-lg shadow-sm border border-border-neutral">
              <form onSubmit={handleSubmit} className="space-y-space-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="font-mono text-xs uppercase tracking-wider text-text-primary font-bold block">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Ashwin Kumar"
                      className="w-full h-11 px-space-sm bg-surface-paper text-text-primary font-mono text-xs rounded focus:outline-none focus:bg-surface-white border border-border-neutral"
                    />
                    {errors.name && <span className="text-red-600 text-[10px] font-mono">{errors.name}</span>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="font-mono text-xs uppercase tracking-wider text-text-primary font-bold block">
                      WHATSAPP / MOBILE NO *
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="9443941897"
                      className="w-full h-11 px-space-sm bg-surface-paper text-text-primary font-mono text-xs rounded focus:outline-none focus:bg-surface-white border border-border-neutral"
                    />
                    {errors.phone && <span className="text-red-600 text-[10px] font-mono">{errors.phone}</span>}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="font-mono text-xs uppercase tracking-wider text-text-primary font-bold block">
                    EMAIL ADDRESS (FOR DIGITAL PROOF & SLA) *
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="ashwinkumar412002@gmail.com"
                    className="w-full h-11 px-space-sm bg-surface-paper text-text-primary font-mono text-xs rounded focus:outline-none focus:bg-surface-white border border-border-neutral"
                  />
                  {errors.email && <span className="text-red-600 text-[10px] font-mono">{errors.email}</span>}
                </div>

                {/* Street Address */}
                <div className="space-y-1">
                  <label className="font-mono text-xs uppercase tracking-wider text-text-primary font-bold block">
                    DELIVERY STREET ADDRESS / INSTITUTION *
                  </label>
                  <textarea
                    rows={2}
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    placeholder="No. 42, Cross Cut Road, Gandhipuram"
                    className="w-full p-space-sm bg-surface-paper text-text-primary font-mono text-xs rounded focus:outline-none focus:bg-surface-white border border-border-neutral"
                  />
                  {errors.address && <span className="text-red-600 text-[10px] font-mono">{errors.address}</span>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
                  {/* City */}
                  <div className="space-y-1">
                    <label className="font-mono text-xs uppercase tracking-wider text-text-primary font-bold block">
                      CITY *
                    </label>
                    <input
                      type="text"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      placeholder="Tirunelveli"
                      className="w-full h-11 px-space-sm bg-surface-paper text-text-primary font-mono text-xs rounded focus:outline-none focus:bg-surface-white border border-border-neutral"
                    />
                    {errors.city && <span className="text-red-600 text-[10px] font-mono">{errors.city}</span>}
                  </div>

                  {/* State */}
                  <div className="space-y-1">
                    <label className="font-mono text-xs uppercase tracking-wider text-text-primary font-bold block">
                      STATE *
                    </label>
                    <input
                      type="text"
                      value={form.state}
                      onChange={(e) => setForm({ ...form, state: e.target.value })}
                      className="w-full h-11 px-space-sm bg-surface-paper text-text-primary font-mono text-xs rounded focus:outline-none focus:bg-surface-white border border-border-neutral"
                    />
                  </div>

                  {/* Pin Code */}
                  <div className="space-y-1">
                    <label className="font-mono text-xs uppercase tracking-wider text-text-primary font-bold block">
                      PIN CODE *
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      value={form.pinCode}
                      onChange={(e) => setForm({ ...form, pinCode: e.target.value })}
                      placeholder="641004"
                      className="w-full h-11 px-space-sm bg-surface-paper text-text-primary font-mono text-xs rounded focus:outline-none focus:bg-surface-white border border-border-neutral"
                    />
                    {errors.pinCode && <span className="text-red-600 text-[10px] font-mono">{errors.pinCode}</span>}
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-space-md">
                  <button
                    type="submit"
                    className="w-full min-h-[52px] px-space-lg py-space-md bg-primary-container hover:bg-primary-fixed active:scale-[0.98] transition-all rounded text-text-primary font-headline text-xl uppercase tracking-wide flex items-center justify-center gap-space-sm shadow-[3px_3px_0px_#171717]"
                  >
                    <span>CONTINUE TO PAYMENT →</span>
                  </button>
                  <p className="text-center font-mono text-[10px] text-text-muted mt-space-xs uppercase">
                    No charges made until payment authorization on next screen
                  </p>
                </div>
              </form>
            </div>

            {/* Right Column (5 Cols): Order Mini Summary */}
            <div className="lg:col-span-5 bg-surface-white rounded p-space-md lg:p-space-lg shadow-sm border border-border-neutral space-y-space-md">
              <div className="flex items-center justify-between pb-space-xs border-b border-border-neutral">
                <h2 className="font-headline text-2xl uppercase tracking-wide text-text-primary">
                  BATCH SUMMARY
                </h2>
                <span className="font-mono text-xs uppercase px-2 py-0.5 rounded bg-surface-dark text-text-on-dark font-bold">
                  {itemCount} PIECES (MOQ MET)
                </span>
              </div>

              {cart.map((item) => (
                <div key={item.id} className="py-space-xs flex gap-space-md items-start">
                  <div className="relative w-20 h-24 bg-surface-paper rounded overflow-hidden shrink-0 border border-border-neutral">
                    <img src={item.image} alt={item.productName} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="bg-primary-container text-text-primary font-mono text-[9px] px-1 py-0.2 rounded font-bold uppercase">
                      {item.printMethod.toUpperCase()} PRINT
                    </span>
                    <p className="font-headline text-lg uppercase text-text-primary mt-1 truncate">
                      {item.productName}
                    </p>
                    <p className="font-mono text-xs text-text-muted">
                      {item.color} • {item.size}
                    </p>
                    <p className="font-mono text-xs font-bold text-text-primary mt-1">
                      {item.quantity} pcs @ ₹{item.unitPrice}/pc
                    </p>
                  </div>
                </div>
              ))}

              <div className="pt-space-sm border-t border-border-neutral space-y-space-xs font-mono text-xs">
                <div className="flex justify-between items-center text-text-muted">
                  <span>Batch Subtotal</span>
                  <span className="text-text-primary font-bold">₹{subtotal.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between items-center text-text-muted">
                  <span>ST Courier All-India</span>
                  <span className="text-primary font-bold uppercase">FREE</span>
                </div>
                <div className="flex justify-between items-center text-text-muted">
                  <span>Digital Proofing & Pre-Press</span>
                  <span className="text-primary font-bold uppercase">COMPLIMENTARY</span>
                </div>
                <div className="pt-space-sm mt-space-sm border-t border-border-neutral flex justify-between items-baseline font-sans">
                  <div>
                    <p className="font-headline text-xl uppercase text-text-primary">NET TOTAL</p>
                    <p className="font-mono text-[10px] text-text-muted">Including 5% Garment GST</p>
                  </div>
                  <span className="font-headline text-3xl text-text-primary">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
