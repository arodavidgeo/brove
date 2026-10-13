import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { SEOHead } from "../components/layout/SEOHead";
import { useCart } from "../context/CartContext";
import { CustomerDetails, OrderRecord } from "../types";

export const PaymentPage: React.FC = () => {
  const { cart, subtotal, clearCart, itemCount } = useCart();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState<CustomerDetails>({
    name: "Ashwin Kumar",
    phone: "9443941897",
    email: "ashwinkumar412002@gmail.com",
    address: "M90, TNHB colony, Stage 3, KTC Nagar",
    city: "Tirunelveli",
    state: "Tamil Nadu",
    pinCode: "627011",
    country: "India",
  });

  const [selectedMethod, setSelectedMethod] = useState<"upi" | "card" | "netbanking" | "neft">("upi");
  const [upiId, setUpiId] = useState("ashwinkumar@okaxis");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem("brove_checkout_customer");
    if (saved) {
      try {
        setCustomer(JSON.parse(saved));
      } catch (e) {
        // use default
      }
    }
  }, []);

  if (cart.length === 0) {
    navigate("/cart");
    return null;
  }

  const handlePayAndConfirm = () => {
    setIsProcessing(true);

    setTimeout(() => {
      const orderId = `BRV-${Math.floor(10000 + Math.random() * 90000)}-${new Date().getFullYear()}`;
      const record: OrderRecord = {
        orderId,
        createdAt: new Date().toISOString(),
        items: [...cart],
        customer,
        subtotal,
        deliveryFee: "FREE via ST COURIER",
        total: subtotal,
        status: "PENDING_CONFIRMATION",
        paymentMethod: "DEMO_GATEWAY",
      };

      sessionStorage.setItem("brove_last_order", JSON.stringify(record));
      clearCart();
      setIsProcessing(false);
      navigate("/order-confirmation");
    }, 700);
  };

  return (
    <>
      <SEOHead
        title="CHECKOUT PAYMENT : Select Payment Mechanism | BROVE"
        description="Final step to secure your 5-piece custom batch production run. Pre-press screen preparation begins instantly upon authorization."
        path="/checkout/payment"
      />

      <div className="w-full bg-transparent min-h-screen pt-20 text-[#2A2A24]">
        <div className="w-full max-w-[1400px] mx-auto px-margin-mobile lg:px-margin py-space-lg lg:py-space-xl">
          
          {/* Top Breadcrumb & Step Navigation */}
          <div className="flex flex-col gap-space-md mb-space-lg">
            <div className="flex items-center gap-space-xs text-[#66645A] font-mono text-xs uppercase tracking-wider">
              <Link to="/checkout" className="hover:text-text-primary transition-colors flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                Return to Customer Information
              </Link>
              <span>/</span>
              <span className="text-[#2A2A24] font-bold">Checkout Step 03</span>
            </div>

            {/* Stepper Card */}
            <div className="bg-[#FAF8F0] p-space-md rounded shadow-xs w-full border border-[#E6E2D3]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md items-center">
                {/* Step 1 */}
                <div className="flex items-center gap-space-xs">
                  <div className="w-6 h-6 rounded-full bg-[#FFFFFF] text-[#2A2A24] border border-[#E6E2D3] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#66645A]">Step 01</p>
                    <p className="font-mono text-xs uppercase text-[#2A2A24] truncate font-bold">Cart & Batches</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-center gap-space-xs">
                  <div className="w-6 h-6 rounded-full bg-[#FFFFFF] text-[#2A2A24] border border-[#E6E2D3] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#66645A]">Step 02</p>
                    <p className="font-mono text-xs uppercase text-[#2A2A24] truncate font-bold">Dispatch Specs</p>
                  </div>
                </div>

                {/* Step 3 (Active) */}
                <div className="flex items-center gap-space-xs">
                  <div className="w-6 h-6 rounded-full bg-primary-container text-text-primary font-bold flex items-center justify-center shrink-0 shadow-xs">
                    <span className="font-mono text-xs">03</span>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-[#5A680C] font-bold">Active Stage</p>
                    </div>
                    <p className="font-headline text-lg uppercase text-[#2A2A24] truncate">Authorisation</p>
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
                CHECKOUT PAYMENT
              </h1>
              <p className="text-xs text-text-muted mt-space-xs">
                Final step to secure your 5-piece custom batch production run. Pre-press screen preparation begins instantly upon authorization.
              </p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            
            {/* Left Column (7 Cols): Payment Authorisation Mechanism */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              {/* Total Payable Industrial Banner */}
              <div className="bg-[#FAF8F0] text-[#2A2A24] p-space-md lg:p-space-lg rounded shadow-xs relative overflow-hidden border-2 border-[#E6E2D3]">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-sm relative z-10">
                  <div>
                    <span className="bg-primary-container text-text-primary px-space-xs py-0.5 rounded font-mono text-[10px] uppercase tracking-widest font-bold">
                      SECURED LOCK-IN
                    </span>
                    <p className="font-mono text-xs uppercase tracking-wider text-[#66645A] mt-space-xs">
                      Total Payable Amount
                    </p>
                    <p className="font-headline text-5xl sm:text-6xl text-[#2A2A24] leading-none tracking-normal mt-1">
                      ₹{subtotal.toLocaleString("en-IN")}
                    </p>
                  </div>
                  <div className="text-left sm:text-right max-w-xs">
                    <p className="text-xs text-[#66645A]">
                      Includes all applicable GST (5%), batch film separations, and ST Courier dispatch across India.
                    </p>
                    <p className="font-mono text-[10px] text-[#5A680C] uppercase tracking-wider mt-1 font-bold">
                      ZERO SURCHARGE GUARANTEE
                    </p>
                  </div>
                </div>
              </div>

              {/* Prototype Notice */}
              <div className="bg-[#FAF8F0] p-space-md rounded flex items-start gap-space-sm border border-[#E6E2D3]">
                <span className="material-symbols-outlined text-[#5A680C] text-[20px] shrink-0 mt-0.5">terminal</span>
                <div className="space-y-0.5">
                  <p className="font-headline text-sm text-[#2A2A24] uppercase tracking-wide flex items-center gap-space-xs">
                    Production Sandbox Ready
                    <span className="bg-[#FFFFFF] text-[#2A2A24] border border-[#E6E2D3] font-mono text-[9px] px-1.5 py-0.2 rounded">
                      STAGING v2.4
                    </span>
                  </p>
                  <p className="text-xs text-[#66645A]">
                    Workshop payment gateway sandbox is currently active. Any simulated payment clears into our physical production queue for proof verification.
                  </p>
                </div>
              </div>

              {/* Payment Mechanism Options Card */}
              <div className="bg-surface-white rounded p-space-md lg:p-space-lg shadow-sm border border-border-neutral">
                <div className="flex items-center justify-between pb-space-sm mb-space-md border-b border-border-neutral">
                  <div>
                    <h2 className="font-headline text-xl uppercase text-text-primary tracking-wide">
                      SELECT PAYMENT MECHANISM
                    </h2>
                    <p className="text-xs text-text-muted">
                      Encrypted merchant gateway with zero customer data retention
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-text-muted">lock</span>
                </div>

                <div className="flex flex-col gap-space-sm">
                  {/* Method 1: UPI */}
                  <div
                    onClick={() => setSelectedMethod("upi")}
                    className={`rounded transition-all border cursor-pointer ${
                      selectedMethod === "upi" ? "bg-surface-container-low border-surface-dark" : "bg-surface-paper border-border-neutral"
                    }`}
                  >
                    <div className="flex items-center justify-between p-space-md">
                      <div className="flex items-center gap-space-sm">
                        <input
                          type="radio"
                          name="payment_method"
                          checked={selectedMethod === "upi"}
                          readOnly
                          className="w-4 h-4 accent-surface-dark"
                        />
                        <div>
                          <span className="font-headline text-base uppercase text-text-primary block">
                            UPI Instant Transfer
                          </span>
                          <span className="text-xs text-text-muted block">
                            Google Pay, PhonePe, Paytm, BHIM, Any UPI ID
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-space-xs">
                        <span className="bg-primary-container text-text-primary font-mono text-[10px] uppercase px-1.5 py-0.5 rounded font-bold">
                          Fastest
                        </span>
                        <span className="material-symbols-outlined text-text-primary text-[20px]">qr_code_scanner</span>
                      </div>
                    </div>

                    {selectedMethod === "upi" && (
                      <div className="px-space-md pb-space-md pt-space-xs border-t border-border-neutral">
                        <div className="bg-surface-white p-space-md rounded border border-border-neutral">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md items-center">
                            {/* QR Mockup */}
                            <div className="flex flex-col items-center justify-center p-space-sm bg-surface-paper rounded text-center border border-border-neutral">
                              <div className="w-32 h-32 bg-surface-white p-2 rounded flex items-center justify-center shadow-sm relative">
                                <svg className="w-full h-full text-text-primary" fill="currentColor" viewBox="0 0 100 100">
                                  <path d="M0 0h30v30H0zm6 6h18v18H6zM70 0h30v30H70zm6 6h18v18H76zM0 70h30v30H0zm6 6h18v18H6zM10 10h10v10H10zm70 0h10v10H70zm-70 70h10v10H10zm36-80h8v16h-8zm16 0h8v8h-8zm-8 24h16v8h-16zm-8 8h8v16h-8zm16 8h16v8h-16zm16 0h8v8h-8zm8-16h8v16h-8zm-24 24h8v8h-8zm-8 8h16v8h-16zm24 8h8v16h-8zm-16 16h24v8h-24zm32-16h8v24h-8zm-48-8h8v8h-8zm-8 16h8v8h-8zm-8-8h8v8h-8z" />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                  <span className="bg-primary-container text-text-primary font-mono text-[9px] font-bold px-1 rounded">
                                    BROVE
                                  </span>
                                </div>
                              </div>
                              <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted mt-space-xs">
                                Scan with PhonePe / GPay
                              </p>
                              <p className="font-mono text-xs text-text-primary font-bold">Auto-detects ₹{subtotal}</p>
                            </div>

                            {/* VPA Input */}
                            <div className="flex flex-col gap-space-xs">
                              <label className="font-mono text-xs uppercase tracking-wider text-text-primary font-bold">
                                Or Enter Virtual Payment Address (UPI ID)
                              </label>
                              <div className="relative">
                                <input
                                  type="text"
                                  value={upiId}
                                  onChange={(e) => setUpiId(e.target.value)}
                                  placeholder="e.g. yourname@okhdfcbank"
                                  className="w-full h-11 px-space-sm bg-surface-paper text-text-primary font-mono text-xs rounded focus:outline-none border border-border-neutral"
                                />
                              </div>
                              <p className="text-xs text-text-muted">
                                Supports BHIM, Google Pay, PhonePe, Paytm, CRED & all banks.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Method 2: Credit / Debit Card */}
                  <div
                    onClick={() => setSelectedMethod("card")}
                    className={`rounded transition-all border cursor-pointer ${
                      selectedMethod === "card" ? "bg-surface-container-low border-surface-dark" : "bg-surface-paper border-border-neutral"
                    }`}
                  >
                    <div className="flex items-center justify-between p-space-md">
                      <div className="flex items-center gap-space-sm">
                        <input
                          type="radio"
                          name="payment_method"
                          checked={selectedMethod === "card"}
                          readOnly
                          className="w-4 h-4 accent-surface-dark"
                        />
                        <div>
                          <span className="font-headline text-base uppercase text-text-primary block">
                            Credit / Debit Card
                          </span>
                          <span className="text-xs text-text-muted block">
                            Visa, Mastercard, RuPay & Corporate Cards
                          </span>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-[22px] text-text-muted">credit_card</span>
                    </div>

                    {selectedMethod === "card" && (
                      <div className="px-space-md pb-space-md pt-space-xs border-t border-border-neutral">
                        <div className="bg-surface-white p-space-md rounded space-y-space-sm border border-border-neutral">
                          <div>
                            <label className="font-mono text-xs uppercase text-text-primary block mb-1">Card Number</label>
                            <input
                              type="text"
                              placeholder="4532 •••• •••• 8920"
                              className="w-full h-11 px-space-sm bg-surface-paper font-mono text-xs rounded focus:outline-none border border-border-neutral"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-space-md">
                            <div>
                              <label className="font-mono text-xs uppercase text-text-primary block mb-1">Expiry Date</label>
                              <input
                                type="text"
                                placeholder="MM / YY"
                                className="w-full h-11 px-space-sm bg-surface-paper font-mono text-xs rounded focus:outline-none border border-border-neutral"
                              />
                            </div>
                            <div>
                              <label className="font-mono text-xs uppercase text-text-primary block mb-1">CVV</label>
                              <input
                                type="password"
                                maxLength={4}
                                placeholder="•••"
                                className="w-full h-11 px-space-sm bg-surface-paper font-mono text-xs rounded focus:outline-none border border-border-neutral"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Method 3: Net Banking */}
                  <div
                    onClick={() => setSelectedMethod("netbanking")}
                    className={`rounded transition-all border cursor-pointer ${
                      selectedMethod === "netbanking" ? "bg-surface-container-low border-surface-dark" : "bg-surface-paper border-border-neutral"
                    }`}
                  >
                    <div className="flex items-center justify-between p-space-md">
                      <div className="flex items-center gap-space-sm">
                        <input
                          type="radio"
                          name="payment_method"
                          checked={selectedMethod === "netbanking"}
                          readOnly
                          className="w-4 h-4 accent-surface-dark"
                        />
                        <div>
                          <span className="font-headline text-base uppercase text-text-primary block">
                            Net Banking
                          </span>
                          <span className="text-xs text-text-muted block">
                            Direct routing with 50+ Indian commercial & private banks
                          </span>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-[20px] text-text-muted">account_balance</span>
                    </div>
                  </div>

                  {/* Method 4: Workshop Direct NEFT / IMPS */}
                  <div
                    onClick={() => setSelectedMethod("neft")}
                    className={`rounded transition-all border cursor-pointer ${
                      selectedMethod === "neft" ? "bg-surface-container-low border-surface-dark" : "bg-surface-paper border-border-neutral"
                    }`}
                  >
                    <div className="flex items-center justify-between p-space-md">
                      <div className="flex items-center gap-space-sm">
                        <input
                          type="radio"
                          name="payment_method"
                          checked={selectedMethod === "neft"}
                          readOnly
                          className="w-4 h-4 accent-surface-dark"
                        />
                        <div>
                          <span className="font-headline text-base uppercase text-text-primary block">
                            Workshop Direct NEFT / IMPS
                          </span>
                          <span className="text-xs text-text-muted block">
                            Recommended for College Symposiums, Student Unions & Studios
                          </span>
                        </div>
                      </div>
                      <span className="bg-surface-container-high text-text-primary font-mono text-[9px] uppercase px-1.5 py-0.5 rounded font-bold">
                        Institutional
                      </span>
                    </div>

                    {selectedMethod === "neft" && (
                      <div className="px-space-md pb-space-md pt-space-xs border-t border-border-neutral">
                        <div className="bg-surface-white p-space-md rounded space-y-space-xs text-text-primary border border-border-neutral">
                          <p className="text-xs text-text-muted">
                            Transfer directly to our workshop current account. Your batch enters the schedule as "Payment Pending", cleared upon receipt screenshot confirmation.
                          </p>
                          <div className="p-space-sm bg-surface-paper rounded font-mono text-xs space-y-1 border border-border-neutral">
                            <p><span className="font-bold">Account Name:</span> BROVE APPAREL & PRINTING</p>
                            <p><span className="font-bold">Phone / WhatsApp:</span> 9443941897</p>
                            <p><span className="font-bold">Dispatch Partner:</span> ST Courier All India</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Primary Pay Button */}
                <div className="mt-space-lg pt-space-md">
                  <button
                    type="button"
                    onClick={handlePayAndConfirm}
                    disabled={isProcessing}
                    className="w-full min-h-[52px] px-space-lg py-space-md bg-primary-container hover:bg-primary-fixed active:scale-[0.98] transition-all rounded text-text-primary font-headline text-xl uppercase tracking-wide flex items-center justify-center gap-space-sm shadow-[3px_3px_0px_#171717]"
                  >
                    <span>
                      {isProcessing ? "SECURING BATCH QUEUE..." : `PAY ₹${subtotal.toLocaleString("en-IN")} & CONFIRM BATCH`}
                    </span>
                    <span className="material-symbols-outlined text-[24px]">arrow_forward</span>
                  </button>
                  <p className="text-xs text-center text-text-muted mt-space-xs">
                    By authorizing, you agree to physical workshop print proofing & custom batch production terms.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column (5 Cols): Order Mini Summary */}
            <div className="lg:col-span-5 bg-[#FFFFFF] rounded p-space-md lg:p-space-lg shadow-xs border border-[#E6E2D3] space-y-space-md lg:sticky lg:top-24">
              <div className="flex items-center justify-between pb-space-xs border-b border-[#E6E2D3]">
                <h2 className="font-headline text-2xl uppercase tracking-wide text-[#2A2A24]">
                  BATCH SUMMARY (01)
                </h2>
                <span className="font-mono text-xs uppercase px-2 py-0.5 rounded bg-primary-container text-text-primary font-bold">
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
                      STREETWEAR RUN
                    </span>
                    <p className="font-headline text-lg uppercase text-text-primary mt-1 truncate">
                      {item.productName}
                    </p>
                    <p className="font-mono text-xs text-text-muted">
                      Method: <span className="font-bold text-text-primary">{item.printMethod.toUpperCase()}</span>
                    </p>
                    <p className="font-mono text-xs text-text-muted">
                      {item.color} • {item.size}
                    </p>
                  </div>
                </div>
              ))}

              <div className="pt-space-sm border-t border-border-neutral space-y-space-xs font-mono text-xs">
                <div className="flex justify-between items-center text-text-muted">
                  <span>Batch Items ({itemCount} Units)</span>
                  <span className="text-text-primary font-bold">₹{subtotal.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between items-center text-text-muted">
                  <span>ST Courier All-India Express</span>
                  <span className="text-primary font-bold uppercase">FREE</span>
                </div>
                <div className="flex justify-between items-center text-text-muted">
                  <span>Artwork Pre-Press Separation</span>
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

              {/* Delivery Address Confirmed Box */}
              <div className="pt-space-md bg-surface-paper p-space-sm rounded space-y-space-xs border border-border-neutral">
                <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                  DISPATCH ADDRESS CONFIRMED
                </p>
                <p className="font-headline text-base uppercase text-text-primary">
                  {customer.name} • +91 {customer.phone}
                </p>
                <p className="text-xs text-text-muted">
                  {customer.address}, {customer.city}, {customer.state} — {customer.pinCode}
                </p>
                <div className="flex items-center gap-space-xs pt-1 text-text-primary font-mono text-[10px] uppercase">
                  <span className="material-symbols-outlined text-[16px] text-primary">local_shipping</span>
                  <span>Estimated Delivery: 3–7 Business Days via ST Courier</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
