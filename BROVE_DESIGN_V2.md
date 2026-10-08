# BROVE — MASTER DESIGN.md
## Brand, UX, UI, Ecommerce, Content, Responsive and Stitch Build Specification
### Version 2.0 — Ground-up rebuild

> **Purpose**
>
> This document is the single source of truth for rebuilding the BROVE customer-facing website from scratch.
> It is intentionally more implementation-oriented than a moodboard. It defines the brand direction, information architecture, content rules, ecommerce journey, page-by-page hierarchy, interaction language, responsive behavior, accessibility, and quality gates.
>
> **Core principle:** expressive visual design outside, precise commerce UX inside.

---

# 01. PRODUCT DEFINITION

**Brand:** BROVE

**Business:** Custom apparel and T-shirt printing.

**Core proposition:** BROVE turns customer ideas, artwork, logos, text and concepts into wearable apparel through custom apparel selection, design assistance, DTF printing and embroidery.

**Brand tagline:**  
**WEAR YOUR IDENTITY.**

**Primary campaign statement:**  
**WE PRINT YOUR IDENTITY.**

BROVE is not primarily a conventional fashion catalogue. The customer is buying a blank apparel canvas plus a customization service. The site must make that distinction clear.

### Core customer journey

**DISCOVER**  
→ **CHOOSE APPAREL**  
→ **SHARE YOUR IDEA**  
→ **CHOOSE PRINT METHOD**  
→ **CUSTOMIZE**  
→ **ADD TO CART**  
→ **CHECKOUT**  
→ **PAYMENT**  
→ **ORDER CONFIRMED**

### Business journey communicated visually

**IDEA → DESIGN → PRINT → QUALITY → DELIVERY**

The website should feel like a digital version of a real BROVE printing studio.

---

# 02. BUSINESS FACTS — USE EXACTLY

These values were supplied as BROVE business content and must not be replaced with invented alternatives.

## Contact

**Phone:** 9443941897  
**WhatsApp:** 9443941897  
**Instagram handle:** brove_fabrics  
**Email:** ashwinkumar412002@gmail.com

**Location:** use the client-provided Google Maps location/link from the project assets. Do not invent a street address.

Clickable actions:
- CALL
- WHATSAPP
- INSTAGRAM
- EMAIL
- GET DIRECTIONS

## Products and starting prices

| Product | Starting price |
|---|---:|
| Regular Fit T-Shirt | ₹350 |
| Oversized T-Shirt | ₹450 |
| Oversized Acid Wash T-Shirt | ₹500 |
| Hoodie | ₹800 |
| Polo T-Shirt | ₹360 |
| Sweatshirt Full Hand | ₹500 |

Do not invent additional products.

Prices must live in a central product data structure so they can be changed later without redesigning the UI.

## Minimum order

**5 PIECES**

This must be visible where customers decide to order.

## Printing methods

**DTF PRINTING**  
Best positioned for detailed, colorful and expressive artwork.

**EMBROIDERY**  
Best positioned for logos, names, branding and tactile/premium designs.

Do not invent DPI, machine models, ink brands, wash-cycle guarantees, GSM, stitch density, or technical certifications unless supplied separately by the owner.

## Delivery

**ST COURIER**  
**3–7 DAYS**  
**ALL OVER INDIA**

Do not invent:
- free delivery
- shipping price
- same-day delivery
- guaranteed delivery dates
- tracking provider details beyond what is actually supplied

## Business positioning

BROVE serves:
- Colleges
- Department events
- Symposiums
- Clubs
- Student groups
- Companies
- Corporate teams
- Sports teams
- Gaming teams
- Events
- Festivals
- Businesses
- Uniform requirements
- Friends/groups
- Individuals

---

# 03. CONTENT INTEGRITY RULE

The previous generated site contained fabricated-looking technical specifications, statistics and contact information. The rebuild must eliminate that behavior.

### NEVER invent

- customer counts
- order counts
- awards
- certifications
- testimonials
- reviews
- machine models
- DPI
- GSM
- wash-cycle numbers
- print durability guarantees
- fake addresses
- fake delivery guarantees
- fake payment providers
- fake discounts
- fake stock levels
- fake urgency
- fake social proof
- fake client logos

If a business value is unknown, use a neutral UI placeholder such as:

`[ADD REAL BUSINESS DETAIL]`

Do not make the placeholder look like a real claim.

### Content tone

Use short, confident, human copy.

Avoid:
- “Elevate”
- “Unleash”
- “Seamless”
- “Next-Gen”
- “Revolutionary”
- “Game-changing”
- generic AI marketing language
- corporate filler

Preferred language:
- direct
- tactile
- practical
- creative
- youthful
- commercial

---

# 04. BRAND PERSONALITY

BROVE should feel:

- Bold
- Tactile
- Editorial
- Industrial
- Premium
- Youthful
- Creative
- Confident
- Practical
- Commercial

### Critical distinction

The old design drifted into “fictional industrial textile laboratory.”

Do NOT repeat that.

BROVE is a **real custom apparel studio with a strong visual identity**.

Industrial details are seasoning, not the meal.

Do not fill the interface with fake machine telemetry, calibration numbers, technical readouts, laboratory labels, serial numbers, or fictional manufacturing jargon.

---

# 05. VISUAL NORTH STAR

The visual reference is the supplied BROVE reference board/assets.

Use it for:
- composition
- typography character
- yellow/charcoal/paper palette
- paint marks
- apparel imagery
- workshop imagery
- editorial rhythm
- tactile texture

Do not copy the reference as one giant image.

Translate the visual language into real responsive components.

---

# 06. COLOR SYSTEM

## BROVE Yellow
`#F2D400`

Primary accent.

Use for:
- primary CTA
- active states
- selected controls
- price emphasis
- progress indicators
- checkmarks
- important labels
- paint strokes
- brand graphics

Yellow should be controlled. It is an accent, not a page background everywhere.

## Studio Paper
`#F5F2E9`

Primary light canvas.

Use for:
- wardrobe
- product details
- customization
- cart
- checkout
- process
- about
- contact

## White
`#FFFFFF`

Use for:
- product surfaces
- form fields
- clean cards
- image panels
- checkout surfaces

## Deep Charcoal
`#171717`

Use for:
- hero
- header
- footer
- dark editorial sections
- confirmation
- workshop image frames

## Secondary ink
`#2A2A2A`

Use for:
- secondary dark surfaces
- borders
- subtle dark cards

## Muted ink
`#6F6B62`

Use for:
- supporting copy
- metadata
- helper text

## Border
Use a warm, low-contrast neutral border rather than bright gray.

### Forbidden palette behavior

Never introduce:
- purple/blue neon
- rainbow gradients
- glowing borders
- cyberpunk colors
- excessive multi-color accents
- pure `#000000` as the main background

---

# 07. TYPOGRAPHY

Typography should feel editorial and physical.

### Display font

Use a bold condensed/editorial display face with strong personality.

Suitable direction:
- Anton
- Bebas Neue
- Oswald
- Archivo Narrow
- another similarly strong condensed display font available in the build environment

Do not use Inter as the primary brand/display font.

### Body font

Use a clean grotesk/sans-serif that remains highly readable.

Suitable direction:
- Manrope
- DM Sans
- Plus Jakarta Sans
- similar modern sans-serif

### Typography rules

- Huge display type only for hero/editorial statements.
- Body text must remain comfortable to read.
- Use `clamp()` for major headlines.
- Avoid paragraphs wider than approximately 65–75 characters.
- Use uppercase sparingly for labels, navigation and short statements.
- Prices should be visually dominant in commerce contexts.
- Never sacrifice readability for graffiti styling.

---

# 08. LAYOUT SYSTEM

### Maximum content width

`1400px`

### Standard page padding

Desktop:
`32–48px`

Tablet:
`24–32px`

Mobile:
`16–20px`

### Grid

Prefer:
- 12-column desktop editorial grid
- 6-column tablet where useful
- 4-column/2-column mobile patterns depending on content

### Asymmetry

Use:
- 60/40 splits
- 55/45 splits
- image + offset text
- full-width image + paper panel
- large product + supporting products
- zig-zag editorial sections
- cropped photography
- oversized type blocks

But asymmetry must never make controls confusing.

---

# 09. TEXTURE AND GRAPHIC LANGUAGE

Use a restrained physical-print vocabulary:

- paper grain
- subtle noise
- dry-brush marks
- BROVE yellow paint strokes
- controlled ink splatter
- black/white brush marks
- textile texture
- workshop photography
- thin editorial rules

### Rules

Decorative graphics:
- frame content
- emphasize transitions
- support hierarchy

They must never:
- cover text
- cover prices
- cover inputs
- reduce contrast
- interfere with tap targets
- create fake complexity

Avoid constant splatter. Let quiet areas exist.

---

# 10. IMAGE DIRECTION

Prefer authentic-looking:
- T-shirts
- hoodies
- polos
- sweatshirts
- apparel on hangers
- printed garments
- embroidery closeups
- fabric details
- printing process
- design workstation
- packaging
- workshop environment
- people wearing finished apparel when real assets are available

### Product photography

Products must remain legible.

Use:
- clean studio shots
- paper backgrounds
- dark workshop backgrounds
- wooden hanger details
- fabric closeups
- controlled directional light

Avoid:
- random stock-photo aesthetics
- unrealistic floating garments
- extreme lens distortion
- busy backgrounds behind controls
- AI-looking hands or faces
- images that contradict actual products

If real assets are unavailable, use tasteful neutral placeholders rather than pretending an invented image is an actual BROVE job.

---

# 11. PUBLIC SITE INFORMATION ARCHITECTURE

## Primary public pages

1. `/` — Home
2. `/wardrobe` — Wardrobe / product catalogue
3. `/product/:id` — Product detail
4. `/customize/:id` — Customization studio
5. `/cart` — Cart
6. `/checkout` — Checkout information
7. `/checkout/payment` — Payment
8. `/order-confirmation` — Confirmation
9. `/printing` — DTF & embroidery
10. `/process` — Our process
11. `/pricing` — Pricing
12. `/why-brove` — Why BROVE
13. `/our-work` — Gallery / work
14. `/who-can-order` — Audience/use cases
15. `/about` — About
16. `/contact` — Contact / start order
17. `/faq` — FAQ
18. `/custom-order` — Custom order brief

### Important

Not every page must appear in the primary header.

The header should remain simple.

Recommended primary navigation:
**HOME / WARDROBE / PRINTING / PROCESS / ABOUT / CONTACT**

Primary action:
**START CUSTOMIZING →**

Cart is always visible.

Secondary pages are discoverable through contextual links and footer navigation.

---

# 12. ADMIN BOUNDARY

The public customer website must NOT expose:
- Admin
- Dashboard
- Staff Login
- Management Login
- Supabase
- Database
- CMS
- internal tools

Admin is a separate private product/application.

If an admin application is built later, it may manage:
- products
- prices
- product images
- inventory
- orders
- customer/order information
- payment/order status
- delivery status
- enquiries

It must not visually or navigationally interfere with the public customer website.

No customer account is required for normal checkout.

---

# 13. GLOBAL HEADER

## Desktop

Dark charcoal header.

Left:
BROVE logo/wordmark.

Center:
- HOME
- WARDROBE
- PRINTING
- PROCESS
- ABOUT
- CONTACT

Right:
- CART icon + count
- START CUSTOMIZING →

### Behavior

- sticky after initial hero when appropriate
- compact on scroll
- active page indicator in BROVE Yellow
- no giant navigation bar
- no admin link
- no customer login

## Mobile

Left:
BROVE

Right:
Cart
Menu

Menu opens as a full-height charcoal panel.

Menu:
- Home
- Wardrobe
- Printing
- Process
- About
- Contact
- FAQ

Bottom:
**START CUSTOMIZING →**

No public login.

---

# 14. HOME PAGE

The homepage must sell the idea first, then the process, then the commerce path.

## Hero

Dark charcoal.

Large visual:
BROVE apparel/product image or authentic workshop/product composition.

Headline:

**WE PRINT  
YOUR  
IDENTITY.**

Supporting copy:

Custom apparel built around your idea, your group, your brand or your style.

Primary CTA:
**START CUSTOMIZING →**

Secondary CTA:
**VIEW WARDROBE →**

Small utility statement:
**MINIMUM ORDER: 5 PIECES**

Do not center the hero like a generic SaaS landing page.

Prefer editorial split composition:
- type on one side
- product image on the other
- controlled paint mark crossing the composition

## Value strip

Three/four concise facts:
- CUSTOM APPAREL
- DTF + EMBROIDERY
- MINIMUM 5 PIECES
- ALL INDIA DELIVERY

Do not turn this into fake statistics.

## Process preview

Heading:
**FROM IDEA TO APPAREL.**

Five steps:
01 YOUR IDEA
02 WE DESIGN
03 WE PRINT
04 QUALITY CHECK
05 DELIVERED

Each step gets a real image or neutral visual placeholder.

CTA:
**SEE OUR PROCESS →**

## Printing section

Split:
DTF vs EMBROIDERY.

DTF:
**VIBRANT. DETAILED. CUSTOM.**

Embroidery:
**TEXTURE YOU CAN FEEL.**

CTA:
**COMPARE PRINTING METHODS →**

## Why BROVE

Use 4–5 actual reasons:
- Premium custom apparel
- DTF printing
- Embroidery
- Low MOQ: 5 pieces
- Quality-focused finishing

Do not fabricate metrics.

## Product spotlight

Feature:
**OVERSIZED T-SHIRT — ₹450**

Use actual product data.

CTA:
**CUSTOMIZE THIS →**

## Who can order

Editorial audience grid:
COLLEGES
COMPANIES
TEAMS
EVENTS
BUSINESSES
INDIVIDUALS

Use varied compositions, not six identical cards.

## About preview

Short story:
BROVE turns ideas into wearable apparel with a focus on quality, creativity, comfort and affordability.

CTA:
**ABOUT BROVE →**

## Contact / final CTA

Dark section.

Headline:
**LET'S PRINT  
SOMETHING REAL.**

Supporting:
Have a design in mind? Let’s make it apparel.

CTA:
**START ORDER →**

## Footer

Large BROVE wordmark.

Tagline:
**WEAR YOUR IDENTITY.**

Links:
Home
Wardrobe
Printing
Process
Pricing
About
Contact
FAQ

Contact:
9443941897
brove_fabrics
ashwinkumar412002@gmail.com

Delivery:
ST COURIER
3–7 DAYS
ALL OVER INDIA

Minimum order:
5 PIECES

---

# 15. WARDROBE PAGE

Purpose: product discovery.

Light Studio Paper background.

Heading:
**THE WARDROBE**

Supporting:
Choose your canvas. Then make it yours.

Controls:
- Search
- category filter
- sort
- optional availability state

Product data:

1. Regular Fit T-Shirt — ₹350
2. Oversized T-Shirt — ₹450
3. Oversized Acid Wash T-Shirt — ₹500
4. Hoodie — ₹800
5. Polo T-Shirt — ₹360
6. Sweatshirt Full Hand — ₹500

### Product card

Image
Product name
Starting price
Short practical descriptor
**CUSTOMIZE →**

Cards may use different aspect ratios or editorial placement.

Do not create six identical rounded SaaS cards.

### Apparel UX requirements

Because online apparel shopping creates uncertainty around fit and sizing, product experiences should expose useful size information, use clear size buttons, and show apparel imagery clearly. Baymard's apparel research specifically highlights sufficient sizing information, clear size selection and human-model imagery as important confidence factors. citeturn0search0turn0search9

---

# 16. PRODUCT DETAIL PAGE

Purpose: answer “Is this the right apparel canvas for my order?”

Layout:
Large product gallery + sticky purchase/configuration panel.

Show:
- product name
- starting price
- product imagery
- available colors only if actually supplied
- sizes only if actually supplied
- size guide link/panel
- quantity
- MOQ reminder
- printing method
- customization CTA

Primary:
**CUSTOMIZE THIS →**

Secondary:
**ADD TO CART** only if the product can be configured sufficiently.

Do not invent sizes/colors. If the data is not available, provide a neutral configurable placeholder in the data model rather than fake options.

Use buttons for sizes rather than hiding size options in a dropdown when actual size data exists. This follows current ecommerce product-page research. citeturn0search7

---

# 17. CUSTOMIZATION STUDIO

This is the signature product interaction.

Light background.

Desktop:
left = controls
right = large live apparel preview

Mobile:
preview near the top, followed by controls, or controls first only if the preview remains clearly visible.

## Configuration order

1. Apparel
2. Upload design
3. Print method
4. Color
5. Size
6. Quantity
7. Notes
8. Price
9. Add to cart

### Upload

Large dropzone:
**DROP YOUR DESIGN HERE**

Secondary:
**CHOOSE FILE**

Accepted formats should only be stated if technically supported.

Show:
- selected file name
- replace
- remove
- upload state
- error state

Do not fake actual file processing.

### Print method

Two clear choices:
DTF
EMBROIDERY

Each has a short explanation.

### Preview

Apparel mockup with uploaded artwork positioned in a print area.

If the prototype cannot perform true image placement, implement a believable front-end preview state and clearly structure it so real upload/placement logic can be connected later.

### Quantity

Stepper:
minus
number
plus

Minimum:
5

Prevent quantity below 5.

### Price

Always visible.

Use:
**STARTING PRICE**
or
**ESTIMATED TOTAL**

Do not imply a final quote if pricing depends on design complexity.

### CTA

**ADD TO CART →**

---

# 18. CART

Light background.

Heading:
**YOUR CART**

Each row:
- product image
- product name
- selected configuration
- print method
- quantity
- unit price
- subtotal
- remove

Quantity controls must be obvious buttons.

Summary:
- subtotal
- shipping if known
- discount/coupon only if real
- total

Do not invent shipping charges.

Primary:
**CONTINUE TO CHECKOUT →**

Secondary:
**CONTINUE SHOPPING**

Empty state:
**YOUR CART IS EMPTY.**
CTA:
**EXPLORE WARDROBE →**

---

# 19. CHECKOUT

Checkout must be deliberately simpler than the marketing pages.

Use a restrained light layout.

Top progress:
**01 INFORMATION → 02 PAYMENT → 03 CONFIRMATION**

### Customer fields

- Full name
- Phone number
- Email
- Address
- City
- PIN code
- State
- Country

Mark required/optional clearly.

Explain phone requirement if appropriate.

No forced account creation.

### Order summary

Reuse the cart summary hierarchy.

### CTA

**CONTINUE TO PAYMENT →**

Current ecommerce research strongly supports making guest checkout prominent and minimizing unnecessary checkout friction. citeturn0search1turn0search8

---

# 20. PAYMENT

The payment page must look trustworthy, not decorative.

Heading:
**PAYMENT**

Show:
- final amount prominently
- order summary
- payment choices
- secure/processing reassurance only if true

Payment methods should be generated from actual backend/payment integration.

If payment integration is not connected, do not pretend that a payment provider is processing a real transaction.

For a design prototype, show clearly labeled selectable payment UI with a development/demo state.

Potential method categories only if actually supported:
- UPI
- Card
- Net Banking
- Wallet
- COD

Do not promise COD or any method unless the business supports it.

Primary:
**PAY NOW →**

---

# 21. ORDER CONFIRMATION

Dark charcoal.

Central checkmark.

Heading:
**ORDER CONFIRMED**

Show:
- Order ID
- order summary
- customer name
- delivery information
- next step

Actions:
**TRACK ORDER →**
**CONTINUE SHOPPING →**

If real tracking is not implemented, the Track Order button must not pretend that tracking works.

Visual:
- subtle yellow paint
- controlled particles
- workshop/product texture

No confetti overload.

---

# 22. PRINTING PAGE

Heading:
**FROM IDEA TO INK.**

Two major editorial sections.

## DTF PRINTING

**VIBRANT. DETAILED. CUSTOM.**

Copy:
Direct-to-Film printing gives artwork vibrant colors and detailed graphics.

Ideal for:
- Custom T-shirts
- Oversized apparel
- Hoodies
- Sweatshirts
- Event apparel
- Team apparel
- Custom graphics

Best for:
**Detailed, colorful and expressive artwork.**

## EMBROIDERY

**TEXTURE YOU CAN FEEL.**

Copy:
Embroidery gives apparel a tactile finish suited to logos, names and branding.

Ideal for:
- Polo T-shirts
- Hoodies
- Shirts
- Uniforms
- Company apparel
- Team apparel
- Logos and branding

Best for:
**Logos, names, branding and premium minimal designs.**

End with:
**NOT SURE WHICH TO CHOOSE? → CONTACT BROVE**

---

# 23. PROCESS PAGE

Heading:
**OUR PROCESS**

Five connected photographic stages.

### 01 YOUR IDEA
Bring an artwork, logo, reference, text or concept.

### 02 WE DESIGN
We prepare the idea for apparel production.

### 03 WE PRINT
Choose DTF or embroidery depending on the design.

### 04 QUALITY CHECK
The finished apparel is checked before delivery.

### 05 DELIVERED
Packed and sent through the available delivery service.

Use a visual timeline rather than five generic cards.

---

# 24. PRICING PAGE

Do not invent package tiers.

Heading:
**SIMPLE PRICING. CLEAR CHOICES.**

Use the actual starting-price list:

REGULAR FIT — ₹350  
OVERSIZED — ₹450  
OVERSIZED ACID WASH — ₹500  
POLO — ₹360  
SWEATSHIRT FULL HAND — ₹500  
HOODIE — ₹800

Prominent:
**MINIMUM ORDER: 5 PIECES**

Bulk:
**PLANNING A LARGER ORDER?**
Contact BROVE for a quotation.

CTA:
**GET BULK QUOTE →**

Do not invent bulk prices.

---

# 25. WHY BROVE PAGE

Heading:
**WHY BROVE?**

Intro:
Because custom apparel should feel personal.

Use five sections:
1. CUSTOM APPAREL
2. DTF PRINTING
3. EMBROIDERY
4. LOW MOQ
5. QUALITY FIRST

Supporting:
**MADE FOR EVERYONE**
Colleges. Companies. Teams. Events. Businesses. Friends. Individuals.

Use photography and typography instead of fake statistics.

---

# 26. OUR WORK PAGE

Heading:
**OUR WORK**

Use actual BROVE photography when supplied.

Categories:
- T-SHIRTS
- HOODIES
- POLOS
- CUSTOM PRINTS
- EMBROIDERY
- BULK ORDERS

Gallery behavior:
- subtle image scale
- restrained crop movement
- title reveal
- optional category filtering

No fake client logos.

If there are not enough real images, use a small curated set rather than filling the page with unrelated stock imagery.

---

# 27. WHO CAN ORDER

Heading:
**MADE FOR YOUR GROUP. MADE FOR YOU.**

Six audience stories:
- COLLEGES
- COMPANIES
- TEAMS
- EVENTS
- BUSINESSES
- INDIVIDUALS

Each should have:
- visual
- short use case
- CTA

Example:
**COLLEGES**
Department events, symposiums, clubs and student groups.

Avoid identical card grids.

---

# 28. ABOUT PAGE

Heading:
**ABOUT BROVE**

Main idea:
BROVE is a custom apparel printing company focused on turning ideas into wearable identity.

Sections:
### WHO WE ARE
Custom apparel built around the customer's idea.

### WHAT WE DO
Apparel selection, design assistance, DTF printing and embroidery.

### WHAT WE BELIEVE
QUALITY
CREATIVITY
COMFORT
AFFORDABILITY
ATTENTION TO DETAIL

Use real workshop imagery.

Closing:
**BROVE — WEAR YOUR IDENTITY.**

Do not invent founding year, founder biography or company history.

---

# 29. CONTACT PAGE

Heading:
**GET IN TOUCH**

Supporting:
We'd love to hear from you. For custom orders, bulk enquiries or questions, reach out.

## Quick contact

CALL  
9443941897

WHATSAPP  
9443941897

INSTAGRAM  
brove_fabrics

EMAIL  
ashwinkumar412002@gmail.com

LOCATION  
Get Directions

Use client-provided map/location asset. Do not fabricate an address.

## Start order form

Fields:
- Name
- Phone Number
- Email
- Product
- Quantity
- Printing Method
- Upload Design
- Message

Minimum:
**5 PIECES**

CTA:
**START ORDER →**

---

# 30. CUSTOM ORDER PAGE

This is a focused enquiry path for users who do not want the standard customization flow.

Heading:
**TELL US WHAT YOU HAVE IN MIND.**

Fields:
- name
- phone
- email
- apparel
- quantity
- DTF / embroidery
- design upload
- deadline if actually needed
- message

Show:
**MINIMUM ORDER: 5 PIECES**

Direct contact actions remain visible.

---

# 31. FAQ

Keep answers short and useful.

Initial questions:
- What is the minimum order?
- What printing methods do you offer?
- Can I provide my own design?
- Which apparel can I customize?
- Do you deliver across India?
- What is the delivery time?
- How do I choose DTF vs embroidery?
- How do I place a bulk order?
- How can I contact BROVE?

Only answer with verified business information. If an answer depends on a policy not supplied, use `[BUSINESS POLICY TO CONFIRM]` rather than inventing one.

---

# 32. FOOTER

Dark charcoal.

Large:
**BROVE**

Tagline:
**WEAR YOUR IDENTITY.**

Navigation:
HOME
WARDROBE
PRINTING
PROCESS
PRICING
WHY BROVE
OUR WORK
ABOUT
CONTACT
FAQ

Products:
Regular Fit T-Shirt
Oversized T-Shirt
Oversized Acid Wash T-Shirt
Hoodie
Polo T-Shirt
Sweatshirt Full Hand

Contact:
9443941897
9443941897
brove_fabrics
ashwinkumar412002@gmail.com

Delivery:
ST COURIER
3–7 DAYS
ALL OVER INDIA

Minimum:
5 PIECES

Do not display admin links.

---

# 33. COMPONENT ARCHITECTURE

Build reusable components rather than separate visual systems.

Suggested components:

- `Header`
- `MobileMenu`
- `Footer`
- `PageHero`
- `SectionLabel`
- `EditorialSplit`
- `PaintMark`
- `ValueStrip`
- `ProcessTimeline`
- `ProcessStep`
- `ProductGrid`
- `ProductCard`
- `ProductGallery`
- `CategoryFilter`
- `SearchControl`
- `SortControl`
- `SizeSelector`
- `ColorSelector`
- `QuantityStepper`
- `UploadDropzone`
- `PrintMethodSelector`
- `ProductPreview`
- `PriceBlock`
- `CartItem`
- `OrderSummary`
- `CheckoutProgress`
- `ShippingForm`
- `PaymentSelector`
- `Confirmation`
- `Gallery`
- `ContactCards`
- `StartOrderForm`
- `FAQAccordion`
- `CTASection`

Shared commerce data must feed:
Wardrobe → Product → Customize → Cart → Checkout → Payment → Confirmation.

---

# 34. DATA MODEL

Keep business data centralized.

Example conceptual model:

```ts
type Product = {
  id: string
  name: string
  startingPrice: number
  description: string
  image: string
  availableSizes?: string[]
  availableColors?: string[]
}

type Customization = {
  productId: string
  artwork?: File
  printMethod: "dtf" | "embroidery"
  color?: string
  size?: string
  quantity: number
  notes?: string
}

type CartItem = {
  id: string
  product: Product
  customization: Customization
  unitPrice: number
  quantity: number
}
```

Do not hard-code prices separately inside multiple pages.

---

# 35. STATE DESIGN

Every major interactive surface needs:

### Default
Clean initial state.

### Hover
Subtle lift/contrast.

### Active
Small physical press.

### Focus
Strong visible keyboard focus.

### Selected
BROVE Yellow + secondary non-color indicator.

### Disabled
Clearly unavailable, but readable.

### Loading
Skeletons matching final geometry.

### Success
Specific confirmation.

### Error
Inline, specific, actionable.

Example:
“Please select a size before adding this product.”

Not:
“Something went wrong.”

---

# 36. MOTION SYSTEM

Motion should feel tactile, not like a gaming website.

Default spring:
- stiffness: 100
- damping: 20

### Page entrance

Stagger:
1. eyebrow/label
2. heading
3. paragraph
4. image
5. CTA

### Product hover

Maximum:
- translateY(-4px)
- scale(1.02)

### Buttons

Use a tiny press response.

### Cart

Quantity changes should have immediate visual feedback.

### Upload

Use:
idle → dragging → uploading → uploaded → error

### Confirmation

Checkmark draw/reveal.

### Performance

Animate:
- transform
- opacity

Avoid continuous animation of:
- top
- left
- width
- height

Respect `prefers-reduced-motion`.

---

# 37. RESPONSIVE SYSTEM

## Mobile
`<768px`

- single-column major layouts
- mobile navigation
- two-column product grid only where cards remain readable
- no page-level horizontal scrolling
- touch targets ≥44px
- clamp headlines
- stacked forms
- simplified decorative layers

## Tablet
`768–1023px`

- selective two-column compositions
- preserve editorial hierarchy
- avoid cramped 12-column desktop layouts

## Desktop
`1024–1439px`

- full editorial compositions
- generous image areas
- 12-column grid

## Wide
`1440px+`

- max content width 1400px
- no endless stretching

---

# 38. MOBILE PAGE RULES

## Mobile Home
Header → Hero → CTA → Value strip → Process → Printing → Why BROVE → Product spotlight → Who can order → About → Contact → CTA → Footer.

## Mobile Wardrobe
Compact controls → product grid → concise cards.

## Mobile Product
Gallery → title → price → configuration → CTA → details.

## Mobile Customize
Preview + upload → print method → apparel options → quantity → price → CTA.

## Mobile Cart
Item rows → summary → full-width checkout CTA.

## Mobile Checkout
Progress → form → summary → full-width CTA.

## Mobile Payment
Final amount → payment options → Pay Now.

## Mobile Confirmation
Checkmark → Order Confirmed → Order ID → next action.

## Mobile Menu
Full-height charcoal panel with clear links and one strong CTA.

---

# 39. ACCESSIBILITY

Minimum interactive target:
**44px**

Must support:
- keyboard navigation
- visible focus
- semantic buttons/links
- useful alt text
- form labels
- form error association
- reduced motion
- sufficient contrast
- state communication beyond color alone

Do not put essential text on noisy images.

Use accessible accordions and menus.

---

# 40. ECOMMERCE UX RESEARCH PRINCIPLES

The design should follow evidence-based ecommerce principles, not decorative assumptions.

Baymard's apparel research emphasizes sufficient sizing information, clear size selection and useful product imagery because users cannot physically handle apparel online. citeturn0search0turn0search9

Baymard's current product-page research recommends visible button-based variation selection and emphasizes that product pages are central to purchase decisions. citeturn0search7

Baymard's checkout research identifies guest checkout, clear required/optional fields, straightforward quantity controls and adaptive error messaging as important checkout improvements. citeturn0search1

Therefore:
- do not hide important product choices
- do not bury size information
- do not force customer accounts
- do not add unnecessary checkout fields
- do not make quantity changes difficult
- do not hide the total
- do not use vague validation errors

---

# 41. ANTI-SLOP RULES

NEVER:
- use emojis in UI
- use Inter as primary brand font
- use pure black as the main background
- use neon glows
- use purple/blue AI gradients
- use rainbow gradients
- use excessive glassmorphism
- use generic SaaS dashboard styling
- use identical three-card layouts everywhere
- use a generic centered hero
- use giant empty hero whitespace
- use fake industrial telemetry
- use fake technical labels
- use fake statistics
- use fake testimonials
- use fake reviews
- use fake customer names
- use fake client logos
- use fake certifications
- use fake delivery promises
- invent product specifications
- invent products
- invent prices
- invent addresses
- invent payment providers
- force customer login
- expose admin
- hide cart
- hide prices
- make payment look fake
- hide important controls behind animation
- use custom cursors
- use “Scroll to explore”
- use “Elevate”
- use “Seamless”
- use “Unleash”
- use “Next-Gen”
- overuse rounded cards
- cover controls with decorative graphics

---

# 42. PERFORMANCE

Prioritize:
- optimized images
- lazy loading below the fold
- responsive image sizes
- minimal layout shift
- CSS transforms
- opacity animation
- efficient font loading
- component reuse

Avoid:
- giant unoptimized background videos
- heavy continuous canvas effects
- excessive blur
- excessive filters
- layout-property animations
- decorative 3D that slows the actual shopping flow

The homepage can have richer motion, but Wardrobe, Customize, Cart, Checkout and Payment must remain fast and calm.

---

# 43. SEO / SEMANTIC STRUCTURE

Every public page should have:
- unique title
- useful meta description
- one clear H1
- logical heading hierarchy
- descriptive image alt text
- semantic navigation
- descriptive link labels

Product pages should expose:
- product name
- starting price
- meaningful description
- available options
- clear CTA

Do not write SEO filler.

---

# 44. TRUST RULES

Trust must come from clarity, not fake social proof.

Show:
- real contact details
- real products
- real process
- clear prices
- minimum order
- delivery information
- actual payment state
- clear next steps

Do not manufacture trust with:
“10,000+ happy customers”
“99.9% satisfaction”
“trusted by 500+ brands”
unless the owner supplies verified numbers.

---

# 45. EMPTY / ERROR / EDGE CASES

## Empty cart
YOUR CART IS EMPTY.
EXPLORE WARDROBE →

## No products
NO PRODUCTS FOUND.
VIEW ALL PRODUCTS →

## Upload error
“Please choose a supported file.”

Only show supported formats if the implementation truly supports them.

## Quantity error
“Minimum order is 5 pieces.”

## Missing size
“Please select a size.”

## Payment unavailable
“Payment is currently unavailable. Please try again or contact BROVE.”

Do not blame the user.

---

# 46. COMMERCE BEHAVIOR

The prototype should have a coherent client-side flow:

Wardrobe
→ product
→ customize
→ cart
→ checkout
→ payment
→ confirmation

Cart state must persist during navigation.

Quantity must update totals.

Remove must remove.

Checkout should summarize the exact selected configuration.

Confirmation should display a generated order reference only as a demo/prototype value unless a real backend generates it.

Never claim that an order has actually been paid unless a real payment integration confirms it.

---

# 47. PAYMENT IMPLEMENTATION BOUNDARY

The visual design must support real payment integration later.

Do not hard-code a fake “success” after clicking Pay Now.

Separate:
- payment selection UI
- payment initiation
- payment result
- order creation
- confirmation

If the current build has no payment backend, clearly keep it in demo mode and structure the UI so a real gateway can be connected later.

---

# 48. ADMIN / SUPABASE BOUNDARY

Supabase may be used later for:
- products
- orders
- enquiries
- pricing
- uploaded assets
- order status

But the public site must never expose database implementation details.

The public user should see:
“Order confirmed.”

They should not see:
“Supabase row inserted.”

---

# 49. FINAL VISUAL RHYTHM

The site should alternate between:

**DARK / IMAGE / LIGHT / IMAGE / DARK**

Suggested rhythm:

Home:
Dark hero → light product → dark process image → light printing → dark CTA

Wardrobe:
Light

Product:
Light with dark image frame

Customize:
Light

Cart:
Light

Checkout:
Light

Payment:
Light

Confirmation:
Dark

Printing:
Light/dark image alternation

About:
Light/dark editorial

Contact:
Light + dark CTA

Footer:
Dark

This creates a physical-print/editorial rhythm without making every section loud.

---

# 50. STITCH BUILD DIRECTIVE

When generating the website:

1. Read this entire document before generating UI.
2. Treat it as the source of truth.
3. Build the complete connected website, not just a homepage.
4. Rebuild from scratch rather than patching the old generated project.
5. Preserve the BROVE visual identity while removing fabricated industrial UI.
6. Use actual supplied business data.
7. Keep product data centralized.
8. Keep commerce state coherent.
9. Make all major CTAs lead somewhere meaningful.
10. Build desktop and mobile intentionally.
11. Use authentic-looking apparel/workshop imagery.
12. Keep decorative paint language controlled.
13. Make product selection and customization extremely clear.
14. Make checkout calm and trustworthy.
15. Keep admin completely separate.
16. Never invent unsupported business facts.
17. Never stop at static visual mockups.
18. Never turn the entire site into one repeated card grid.
19. Verify empty, loading, error and selected states.
20. Verify the complete journey before considering the build complete.

---

# 51. FINAL ACCEPTANCE CHECKLIST

## Brand
- [ ] BROVE is immediately recognizable.
- [ ] WEAR YOUR IDENTITY. is used correctly.
- [ ] WE PRINT YOUR IDENTITY. is used as a campaign statement.
- [ ] Yellow/charcoal/paper palette is consistent.
- [ ] Industrial influence is restrained.

## Commerce
- [ ] All six supplied products exist.
- [ ] Prices are exact.
- [ ] MOQ is 5.
- [ ] DTF and embroidery exist.
- [ ] Wardrobe works.
- [ ] Product detail works.
- [ ] Customization works.
- [ ] Cart works.
- [ ] Checkout works.
- [ ] Payment UI exists.
- [ ] Confirmation exists.

## Content
- [ ] No fake metrics.
- [ ] No fake reviews.
- [ ] No fake awards.
- [ ] No fake addresses.
- [ ] No fake technical specifications.
- [ ] No fake payment providers.
- [ ] No fake delivery guarantees.

## UX
- [ ] No forced login.
- [ ] Cart is always discoverable.
- [ ] Prices are visible.
- [ ] Size controls are clear when size data exists.
- [ ] Minimum order is visible.
- [ ] Errors are actionable.
- [ ] Checkout is simple.
- [ ] Payment is trustworthy.
- [ ] No dead-end CTAs.

## Responsive
- [ ] No horizontal overflow.
- [ ] Touch targets ≥44px.
- [ ] Mobile menu works.
- [ ] Mobile product grid works.
- [ ] Mobile customizer works.
- [ ] Mobile cart works.
- [ ] Mobile checkout works.
- [ ] Mobile payment works.
- [ ] Mobile confirmation works.

## Visual quality
- [ ] No AI-slop card repetition.
- [ ] No neon.
- [ ] No generic SaaS hero.
- [ ] No excessive rounded containers.
- [ ] No decorative element obscures content.
- [ ] Motion is restrained and performant.
- [ ] Typography has hierarchy.
- [ ] Photography feels like one coherent world.

---

# 52. MASTER CREATIVE STATEMENT

**BROVE IS A PRINT STUDIO, NOT A TEMPLATE.**

The customer should feel:

**I HAVE AN IDEA.**  
↓  
**I CAN CHOOSE MY APPAREL.**  
↓  
**I CAN SHOW BROVE MY DESIGN.**  
↓  
**I UNDERSTAND HOW IT WILL BE PRINTED.**  
↓  
**I KNOW WHAT IT COSTS.**  
↓  
**I CAN ORDER WITHOUT CREATING AN ACCOUNT.**  
↓  
**I KNOW WHAT HAPPENS NEXT.**

The visual language should make BROVE memorable.

The commerce system should make BROVE easy to use.

**Expressive outside. Precise inside.**

That is the rebuild.
