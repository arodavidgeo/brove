import React from "react";
import { useLocation } from "react-router-dom";

/**
 * StudioBackground
 * 
 * Recreates the authoritative BROVE editorial light-color background aesthetic
 * strictly matching the reference image (BROVE_Custom_Apparel_Studio_Homepage.png):
 * 
 * 1. BASE COLOR: Warm cream / ivory (#F4F1E6). No pure white, no grey, no dark base.
 * 2. LIME-GREEN GLOW: Soft, blurred radial gradients of brand lime-green (#C5D92D)
 *    at LOW opacity (10–25%), at the top-left, mid-right, and bottom-left areas.
 * 3. PAINT BRUSH STROKES: Large, faded lime-green brush-stroke shapes along the left
 *    and right edges, partially cropped by viewport edges, as in the reference.
 * 4. BLURRED FOLIAGE: Soft, out-of-focus green leaves in the bottom-right corner
 *    (near "Get in touch") and faintly at the right edge. Heavily blurred, low opacity.
 * 5. TEXTURE: Very subtle paper grain/noise overlay (max 3–4% opacity).
 * 
 * ONE global background layer inherited by every page, z-index 0, pointer-events: none.
 */

export const StudioBackground: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0 bg-[#F4F1E6] dark:bg-[#141412] transition-colors duration-250"
      style={{ minHeight: "100%", height: "100%" }}
      aria-hidden="true"
    >
      {/* ========================================================
          GLOBAL SVG FILTERS & GRADIENT DEFINITIONS
          ======================================================== */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          {/* Subtle Paper Grain Filter (max 3% opacity) */}
          <filter id="brove-paper-grain" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.75"
              numOctaves="3"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.16   0 0 0 0 0.16   0 0 0 0 0.14   0 0 0 0.028 0"
            />
          </filter>

          {/* Heavy Gaussian Blur Filter for Out-of-Focus Foliage (Camera Bokeh) */}
          <filter id="foliage-heavy-blur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="22" result="blur" />
          </filter>

          <filter id="foliage-soft-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="15" result="blur" />
          </filter>

          {/* Soft Lime Glow Gradients */}
          <radialGradient id="lime-glow-top-left" cx="10%" cy="8%" r="48%">
            <stop offset="0%" stopColor="#C5D92D" stopOpacity="0.22" />
            <stop offset="45%" stopColor="#C5D92D" stopOpacity="0.08" />
            <stop offset="85%" stopColor="#F4F1E6" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="lime-glow-mid-right" cx="95%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#C5D92D" stopOpacity="0.20" />
            <stop offset="50%" stopColor="#C5D92D" stopOpacity="0.06" />
            <stop offset="90%" stopColor="#F4F1E6" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="lime-glow-bot-left" cx="8%" cy="82%" r="45%">
            <stop offset="0%" stopColor="#C5D92D" stopOpacity="0.18" />
            <stop offset="45%" stopColor="#C5D92D" stopOpacity="0.05" />
            <stop offset="85%" stopColor="#F4F1E6" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="foliage-ambient-glow" cx="92%" cy="92%" r="46%">
            <stop offset="0%" stopColor="#C5D92D" stopOpacity="0.16" />
            <stop offset="40%" stopColor="#4A7A36" stopOpacity="0.07" />
            <stop offset="85%" stopColor="#F4F1E6" stopOpacity="0" />
          </radialGradient>

          {/* Painterly Lime Brush Stroke Gradients */}
          <linearGradient id="brush-lime-hero-left" x1="0%" y1="10%" x2="100%" y2="90%">
            <stop offset="0%" stopColor="#C5D92D" stopOpacity="0.26" />
            <stop offset="45%" stopColor="#D2E438" stopOpacity="0.19" />
            <stop offset="80%" stopColor="#C5D92D" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#F4F1E6" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="brush-lime-hero-right" x1="100%" y1="15%" x2="0%" y2="85%">
            <stop offset="0%" stopColor="#D2E438" stopOpacity="0.22" />
            <stop offset="40%" stopColor="#C5D92D" stopOpacity="0.15" />
            <stop offset="85%" stopColor="#F4F1E6" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="brush-lime-story" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C5D92D" stopOpacity="0.24" />
            <stop offset="55%" stopColor="#D2E438" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#F4F1E6" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="brush-lime-work" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C5D92D" stopOpacity="0.22" />
            <stop offset="60%" stopColor="#D2E438" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#F4F1E6" stopOpacity="0" />
          </linearGradient>

          {/* Tropical Leaf Botanical Gradients */}
          <linearGradient id="foliage-green-grad-1" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#2E5325" />
            <stop offset="45%" stopColor="#4A7A36" />
            <stop offset="85%" stopColor="#75A642" />
          </linearGradient>

          <linearGradient id="foliage-green-grad-2" x1="0%" y1="30%" x2="100%" y2="70%">
            <stop offset="0%" stopColor="#1E3C18" />
            <stop offset="50%" stopColor="#3B672B" />
            <stop offset="90%" stopColor="#5E8F35" />
          </linearGradient>

          <linearGradient id="foliage-green-grad-3" x1="30%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#4A7A36" />
            <stop offset="55%" stopColor="#6C9E3D" />
            <stop offset="100%" stopColor="#94BF4C" />
          </linearGradient>
        </defs>
      </svg>

      {/* ========================================================
          1. WARM CREAM BASE LAYER & AMBIENT RADIAL LIME GLOWS
          ======================================================== */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none bg-[#F4F1E6] dark:bg-[#141412] transition-colors duration-250"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 10%, rgba(197, 217, 45, 0.22) 0%, rgba(197, 217, 45, 0.08) 36%, transparent 68%),
            radial-gradient(circle at 94% 42%, rgba(197, 217, 45, 0.19) 0%, rgba(197, 217, 45, 0.06) 38%, transparent 68%),
            radial-gradient(circle at 8% 82%, rgba(197, 217, 45, 0.18) 0%, rgba(197, 217, 45, 0.05) 36%, transparent 65%),
            radial-gradient(circle at 92% 92%, rgba(197, 217, 45, 0.16) 0%, rgba(74, 122, 54, 0.08) 32%, transparent 65%)
          `,
        }}
      />

      {/* ========================================================
          2. OPTIONAL SUBTLE PAPER GRAIN OVERLAY (3% Opacity)
          ======================================================== */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40 mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(rgba(42, 42, 36, 0.05) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {isHome ? (
        /* ========================================================
           HOME PAGE: FULL VECTOR BRUSH STROKES & BLURRED FOLIAGE
           Aligned with reference image sections:
           - Hero: Bold angled lime brush strokes top-left & top-right
           - Our Story: Large brush stroke mid-left
           - Our Work: Faded brush strokes mid-right
           - Our Process: Soft strokes lower-left
           - Get in touch: Faded strokes & blurred green foliage
           ======================================================== */
        <svg
          viewBox="0 0 1440 6400"
          preserveAspectRatio="xMidYMin slice"
          className="w-full h-full block pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ========================================================
              ZONE 01: HERO (Y: 0 - 1100)
              Large faded lime brush-stroke shapes along left and right
              ======================================================== */}
          <g id="home-brush-hero">
            {/* Top-Left Paint Brush Strokes (Matching Reference Hero) */}
            {/* Main angled slash stroke */}
            <path
              d="M-80,90 C40,110 140,170 230,280 C270,330 290,410 270,490 C250,560 180,610 120,630 C60,650 -20,670 -70,680 Z"
              fill="url(#brush-lime-hero-left)"
            />
            {/* Secondary diagonal bristle streak */}
            <path
              d="M-50,220 C60,250 160,320 220,430 C250,480 230,550 170,590 C90,640 10,660 -60,670 Z"
              fill="#C5D92D"
              fillOpacity="0.14"
            />
            {/* Expressive dry-brush bristle tips (Top-Left Angle) */}
            <path
              d="M-40,60 C80,80 180,140 250,230 C280,270 290,320 270,360 C230,320 160,240 60,190 C-10,150 -50,130 -50,130 Z"
              fill="#D2E438"
              fillOpacity="0.18"
            />
            <path
              d="M-60,340 C30,370 120,440 170,540 C190,580 170,620 120,650 C70,680 -10,700 -70,710 Z"
              fill="#C5D92D"
              fillOpacity="0.12"
            />
            {/* Accent thin contour edge lines */}
            <path
              d="M-30,130 C90,160 190,240 260,360 C285,410 275,480 220,535"
              fill="none"
              stroke="#C5D92D"
              strokeWidth="2.4"
              strokeOpacity="0.32"
              strokeLinecap="round"
            />
            <path
              d="M-20,250 C70,290 150,380 200,490 C220,535 200,580 150,610"
              fill="none"
              stroke="#D2E438"
              strokeWidth="1.8"
              strokeOpacity="0.25"
              strokeLinecap="round"
            />

            {/* Top-Right Paint Brush Strokes (Behind Hero Apparel on Hanger) */}
            <path
              d="M1520,40 C1410,90 1330,190 1290,320 C1260,430 1300,540 1380,630 C1430,680 1490,720 1530,740 Z"
              fill="url(#brush-lime-hero-right)"
            />
            <path
              d="M1500,160 C1410,210 1340,300 1320,410 C1300,500 1360,590 1430,650 C1480,690 1520,710 1520,710 Z"
              fill="#C5D92D"
              fillOpacity="0.14"
            />
            <path
              d="M1510,120 C1420,180 1350,280 1330,400 C1310,510 1380,620 1480,700"
              fill="none"
              stroke="#C5D92D"
              strokeWidth="2.2"
              strokeOpacity="0.28"
              strokeLinecap="round"
            />
          </g>

          {/* ========================================================
              ZONE 02: OUR STORY (Y: 1100 - 1900)
              Large faded lime brush stroke entering from left edge
              ======================================================== */}
          <g id="home-brush-story">
            <path
              d="M-70,1180 C50,1210 160,1290 220,1410 C250,1470 240,1540 190,1600 C130,1660 40,1700 -50,1720 Z"
              fill="url(#brush-lime-story)"
            />
            <path
              d="M-40,1250 C50,1290 130,1360 170,1460 C190,1520 170,1570 120,1620 C60,1660 -10,1690 -60,1700 Z"
              fill="#C5D92D"
              fillOpacity="0.12"
            />
            <path
              d="M-30,1230 C70,1270 160,1360 210,1480 C230,1535 205,1590 150,1630"
              fill="none"
              stroke="#C5D92D"
              strokeWidth="2"
              strokeOpacity="0.30"
              strokeLinecap="round"
            />
          </g>

          {/* ========================================================
              ZONE 03: OUR WORK / WARDROBE (Y: 2000 - 3200)
              Faded lime strokes partially cropped by right edge
              ======================================================== */}
          <g id="home-brush-work">
            <path
              d="M1520,2150 C1400,2210 1310,2330 1300,2470 C1290,2590 1360,2700 1460,2780 C1500,2810 1530,2830 1530,2830 Z"
              fill="url(#brush-lime-work)"
            />
            <path
              d="M1500,2230 C1410,2290 1340,2390 1340,2500 C1340,2600 1410,2690 1490,2750 Z"
              fill="#C5D92D"
              fillOpacity="0.12"
            />
            <path
              d="M1490,2200 C1390,2270 1315,2385 1320,2510 C1325,2620 1410,2720 1500,2790"
              fill="none"
              stroke="#C5D92D"
              strokeWidth="2"
              strokeOpacity="0.28"
              strokeLinecap="round"
            />

            {/* Mid-right subtle foliage fronds (out-of-focus background leaves) */}
            <g filter="url(#foliage-soft-blur)" opacity="0.18">
              <path
                d="M1460,2350 C1420,2320 1360,2330 1320,2380 C1280,2430 1290,2500 1340,2540 C1390,2570 1450,2550 1480,2500 Z"
                fill="url(#foliage-green-grad-2)"
              />
              <path
                d="M1490,2460 C1450,2440 1400,2460 1370,2500 C1340,2540 1350,2600 1400,2630 C1440,2650 1480,2630 1500,2580 Z"
                fill="url(#foliage-green-grad-1)"
              />
            </g>
          </g>

          {/* ========================================================
              ZONE 04: OUR PROCESS & TECHNIQUES (Y: 3300 - 4600)
              Faded lime strokes entering from left edge
              ======================================================== */}
          <g id="home-brush-process">
            <path
              d="M-70,3450 C60,3490 160,3580 200,3710 C230,3810 200,3910 130,3980 C70,4030 -10,4060 -70,4080 Z"
              fill="url(#brush-lime-story)"
            />
            <path
              d="M-40,3520 C50,3560 130,3630 160,3730 C180,3810 150,3890 90,3940 C30,3980 -20,4000 -60,4010 Z"
              fill="#C5D92D"
              fillOpacity="0.10"
            />
            <path
              d="M-30,3500 C70,3550 150,3640 185,3750 C205,3830 170,3910 110,3960"
              fill="none"
              stroke="#C5D92D"
              strokeWidth="1.8"
              strokeOpacity="0.24"
              strokeLinecap="round"
            />
          </g>

          {/* ========================================================
              ZONE 05: GET IN TOUCH & BOTTOM FOLIAGE (Y: 5300 - 6400)
              Soft, out-of-focus green leaves in bottom-right corner
              and large lime-green brush stroke framing the bottom
              ======================================================== */}
          <g id="home-brush-bottom">
            {/* Lower-left angled brush stroke */}
            <path
              d="M-60,5450 C70,5490 170,5590 210,5720 C240,5820 200,5930 130,6010 C60,6070 -10,6100 -70,6120 Z"
              fill="url(#brush-lime-story)"
            />
            <path
              d="M-30,5490 C80,5540 160,5640 195,5760 C215,5845 180,5935 110,5990"
              fill="none"
              stroke="#C5D92D"
              strokeWidth="2.2"
              strokeOpacity="0.30"
              strokeLinecap="round"
            />

            {/* Lower-right brush stroke behind foliage */}
            <path
              d="M1530,5400 C1400,5460 1300,5590 1280,5740 C1260,5870 1340,5990 1450,6080 C1490,6110 1530,6130 1530,6130 Z"
              fill="url(#brush-lime-work)"
            />

            {/* ====================================================
                BLURRED FOLIAGE (Bottom-Right Corner & Hoodie Area)
                Heavily blurred, out-of-focus tropical Monstera & palm
                leaves as seen in the reference homepage image
                ==================================================== */}
            <g id="bottom-foliage" filter="url(#foliage-heavy-blur)" opacity="0.32">
              {/* Large Monstera Leaf 1 (Entering from Bottom-Right) */}
              <path
                d="M1480,5750 C1400,5680 1270,5720 1210,5820 C1160,5910 1180,6040 1250,6130 C1320,6210 1440,6240 1520,6200 C1560,6170 1580,6120 1560,6040 C1540,5940 1530,5810 1480,5750 Z"
                fill="url(#foliage-green-grad-1)"
              />
              {/* Monstera Leaf Lobe Details / Cutouts */}
              <path
                d="M1360,5780 C1300,5750 1230,5800 1190,5870 C1150,5940 1160,6030 1210,6090 C1240,6070 1250,6020 1240,5970 C1230,5920 1260,5870 1310,5850 Z"
                fill="url(#foliage-green-grad-2)"
              />
              <path
                d="M1420,5880 C1360,5870 1300,5910 1260,5970 C1220,6040 1230,6130 1280,6180 C1310,6150 1320,6100 1300,6060 C1280,6010 1320,5960 1370,5940 Z"
                fill="url(#foliage-green-grad-3)"
              />

              {/* Second Overlapping Tropical Leaf (Deeper Green) */}
              <path
                d="M1520,5920 C1430,5880 1330,5940 1280,6040 C1240,6130 1260,6240 1340,6320 C1420,6380 1520,6370 1560,6310 C1580,6260 1570,6160 1550,6070 Z"
                fill="url(#foliage-green-grad-2)"
              />

              {/* Smaller Foreground Accent Leaves */}
              <path
                d="M1350,6080 C1290,6070 1240,6120 1210,6180 C1180,6240 1200,6310 1260,6350 C1310,6370 1360,6330 1370,6270 C1380,6210 1370,6140 1350,6080 Z"
                fill="url(#foliage-green-grad-1)"
              />
              <path
                d="M1440,6120 C1380,6110 1320,6160 1300,6230 C1280,6290 1310,6360 1370,6390 C1420,6400 1460,6360 1470,6300 Z"
                fill="url(#foliage-green-grad-3)"
              />
            </g>

            {/* Additional Soft Foliage Highlights (Front Blur) */}
            <g id="bottom-foliage-soft" filter="url(#foliage-soft-blur)" opacity="0.22">
              <path
                d="M1410,5960 C1340,5940 1280,6000 1250,6070 C1220,6140 1240,6220 1300,6270 C1340,6260 1350,6210 1330,6170 C1310,6120 1340,6070 1390,6050 Z"
                fill="url(#foliage-green-grad-3)"
              />
              <path
                d="M1470,6020 C1410,6010 1360,6060 1340,6120 C1320,6180 1350,6240 1400,6270 C1430,6260 1440,6210 1420,6180 C1400,6140 1430,6100 1460,6080 Z"
                fill="url(#foliage-green-grad-2)"
              />
            </g>
          </g>
        </svg>
      ) : (
        /* ========================================================
           SUBPAGES: ADAPTIVE GLOBAL BACKGROUND SYSTEM
           Consistent warm ivory aesthetic, lime glows, brush strokes,
           and blurred foliage perfectly scaled for any subpage height
           ======================================================== */
        <div className="relative w-full h-full min-h-screen">
          {/* Top Zone Vector Artwork (Subpage Hero Spans) */}
          <svg
            viewBox="0 0 1440 1100"
            preserveAspectRatio="xMidYMin slice"
            className="absolute top-0 left-0 w-full h-[1100px] block pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Top-Left Paint Brush Strokes */}
            <path
              d="M-80,90 C40,110 140,170 230,280 C270,330 290,410 270,490 C250,560 180,610 120,630 C60,650 -20,670 -70,680 Z"
              fill="url(#brush-lime-hero-left)"
            />
            <path
              d="M-50,220 C60,250 160,320 220,430 C250,480 230,550 170,590 C90,640 10,660 -60,670 Z"
              fill="#C5D92D"
              fillOpacity="0.14"
            />
            <path
              d="M-40,60 C80,80 180,140 250,230 C280,270 290,320 270,360 C230,320 160,240 60,190 C-10,150 -50,130 -50,130 Z"
              fill="#D2E438"
              fillOpacity="0.18"
            />
            <path
              d="M-30,130 C90,160 190,240 260,360 C285,410 275,480 220,535"
              fill="none"
              stroke="#C5D92D"
              strokeWidth="2.4"
              strokeOpacity="0.32"
              strokeLinecap="round"
            />

            {/* Top-Right Paint Brush Strokes */}
            <path
              d="M1520,40 C1410,90 1330,190 1290,320 C1260,430 1300,540 1380,630 C1430,680 1490,720 1530,740 Z"
              fill="url(#brush-lime-hero-right)"
            />
            <path
              d="M1500,160 C1410,210 1340,300 1320,410 C1300,500 1360,590 1430,650 C1480,690 1520,710 1520,710 Z"
              fill="#C5D92D"
              fillOpacity="0.14"
            />
            <path
              d="M1510,120 C1420,180 1350,280 1330,400 C1310,510 1380,620 1480,700"
              fill="none"
              stroke="#C5D92D"
              strokeWidth="2.2"
              strokeOpacity="0.28"
              strokeLinecap="round"
            />
          </svg>

          {/* Bottom Transition Vector Artwork (Subpage Footer Spans with Foliage) */}
          <svg
            viewBox="0 0 1440 1100"
            preserveAspectRatio="xMidYMax slice"
            className="absolute bottom-0 left-0 w-full h-[1100px] block pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Bottom-Left Paint Brush Strokes */}
            <path
              d="M-60,350 C70,390 170,490 210,620 C240,720 200,830 130,910 C60,970 -10,1000 -70,1020 Z"
              fill="url(#brush-lime-story)"
            />
            <path
              d="M-30,390 C80,440 160,540 195,660 C215,745 180,835 110,890"
              fill="none"
              stroke="#C5D92D"
              strokeWidth="2.2"
              strokeOpacity="0.30"
              strokeLinecap="round"
            />

            {/* Bottom-Right Paint Brush Strokes */}
            <path
              d="M1530,300 C1400,360 1300,490 1280,640 C1260,770 1340,890 1450,980 C1490,1010 1530,1030 1530,1030 Z"
              fill="url(#brush-lime-work)"
            />

            {/* Blurred Foliage in Bottom-Right Corner */}
            <g id="subpage-bottom-foliage" filter="url(#foliage-heavy-blur)" opacity="0.30">
              <path
                d="M1480,550 C1400,480 1270,520 1210,620 C1160,710 1180,840 1250,930 C1320,1010 1440,1040 1520,1000 C1560,970 1580,920 1560,840 C1540,740 1530,610 1480,550 Z"
                fill="url(#foliage-green-grad-1)"
              />
              <path
                d="M1520,720 C1430,680 1330,740 1280,840 C1240,930 1260,1040 1340,1120 C1420,1180 1520,1170 1560,1110 Z"
                fill="url(#foliage-green-grad-2)"
              />
              <path
                d="M1350,880 C1290,870 1240,920 1210,980 C1180,1040 1200,1110 1260,1150 C1310,1170 1360,1130 1370,1070 Z"
                fill="url(#foliage-green-grad-1)"
              />
            </g>

            <g id="subpage-bottom-foliage-soft" filter="url(#foliage-soft-blur)" opacity="0.20">
              <path
                d="M1410,760 C1340,740 1280,800 1250,870 C1220,940 1240,1020 1300,1070 C1340,1060 1350,1010 1330,970 Z"
                fill="url(#foliage-green-grad-3)"
              />
            </g>
          </svg>
        </div>
      )}
    </div>
  );
};
