import React from "react";

/**
 * StudioBackground
 * 
 * High-fidelity, continuous vertical SVG background matching the authoritative reference:
 * - Deep navy base (#0B1D3A)
 * - Sweeping organic golden-yellow waves (#FFD53D, #F2D400, #E2C600)
 * - Atmospheric blue gradient accents (#163A75, #102A54)
 * - Blue topographic contour lines (#2563EB, #3B82F6, #1D4ED8)
 * - Fine white dashed detailing (stroke-dasharray="6,8")
 * - Organic paint splatter clusters and ink droplets
 * - Long continuous 1440x6400 canvas spanning full document scroll
 */
export const StudioBackground: React.FC = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0"
      style={{ minHeight: "100%", height: "100%" }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 6400"
        preserveAspectRatio="xMidYMin slice"
        className="w-full h-full block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Base Navy Background Gradients */}
          <linearGradient id="bg-navy-base" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0B1D3A" />
            <stop offset="25%" stopColor="#0D2244" />
            <stop offset="50%" stopColor="#0B1D3A" />
            <stop offset="75%" stopColor="#0E2548" />
            <stop offset="100%" stopColor="#0B1D3A" />
          </linearGradient>

          {/* Golden Yellow Wave Gradients */}
          <linearGradient id="gold-wave-1" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#FFD53D" />
            <stop offset="45%" stopColor="#F2D400" />
            <stop offset="100%" stopColor="#E2C600" />
          </linearGradient>

          <linearGradient id="gold-wave-2" x1="0%" y1="20%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#FFE33F" />
            <stop offset="50%" stopColor="#F2D400" />
            <stop offset="100%" stopColor="#D4B600" />
          </linearGradient>

          <linearGradient id="gold-wave-3" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFD53D" />
            <stop offset="60%" stopColor="#F2D400" />
            <stop offset="100%" stopColor="#E2C600" />
          </linearGradient>

          {/* Ambient Blue Atmosphere Gradients */}
          <radialGradient id="hero-blue-glow" cx="80%" cy="8%" r="45%">
            <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.45" />
            <stop offset="40%" stopColor="#163A75" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0B1D3A" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="mid-blue-glow-1" cx="15%" cy="30%" r="40%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#122E5C" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0B1D3A" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="mid-blue-glow-2" cx="85%" cy="52%" r="45%">
            <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#122E5C" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0B1D3A" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="bottom-blue-glow" cx="30%" cy="85%" r="45%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#163A75" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0B1D3A" stopOpacity="0" />
          </radialGradient>

          {/* Soft Drop Shadows for Wave Depth */}
          <filter id="wave-shadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="18" stdDeviation="24" floodColor="#040B17" floodOpacity="0.6" />
          </filter>

          <filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ========================================================
            01. SOLID DEEP NAVY BASE RECTANGLE & BLUE AMBIENT GLOWS
            ======================================================== */}
        <rect width="1440" height="6400" fill="url(#bg-navy-base)" />

        {/* Ambient atmospheric glows */}
        <rect width="1440" height="6400" fill="url(#hero-blue-glow)" />
        <rect width="1440" height="6400" fill="url(#mid-blue-glow-1)" />
        <rect width="1440" height="6400" fill="url(#mid-blue-glow-2)" />
        <rect width="1440" height="6400" fill="url(#bottom-blue-glow)" />

        {/* ========================================================
            02. TOP / HERO ZONE (Y: 0 - 1300)
            - Sweeping Golden Wave from top-right into center-right
            - Blue Contour Lines & Fine White Dashed Lines
            - Organic Paint Splatter Clusters
            ======================================================== */}
        <g id="zone-hero">
          {/* Subtle under-glow wave */}
          <path
            d="M740,-80 C890,260 1140,540 1480,720 L1520,-80 Z"
            fill="#F2D400"
            fillOpacity="0.12"
          />

          {/* Primary Golden-Yellow Sweeping Wave */}
          <path
            d="M840,-80 C980,240 1200,480 1480,680 L1480,-80 Z"
            fill="url(#gold-wave-1)"
            filter="url(#wave-shadow)"
          />

          {/* Secondary organic overlapping crest */}
          <path
            d="M1020,-80 C1140,160 1300,340 1480,480 L1480,-80 Z"
            fill="#FFE33F"
            fillOpacity="0.85"
          />

          {/* Blue Topographic / Contour Lines */}
          <path
            d="M620,-80 C780,260 1020,540 1480,780"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2.5"
            strokeOpacity="0.55"
          />
          <path
            d="M560,-80 C730,290 980,590 1480,840"
            fill="none"
            stroke="#2563EB"
            strokeWidth="2"
            strokeOpacity="0.45"
          />
          <path
            d="M500,-80 C680,320 940,640 1480,900"
            fill="none"
            stroke="#1D4ED8"
            strokeWidth="1.5"
            strokeOpacity="0.35"
          />
          <path
            d="M440,-80 C630,350 900,690 1480,960"
            fill="none"
            stroke="#1E40AF"
            strokeWidth="1.5"
            strokeOpacity="0.25"
          />

          {/* Fine White Dashed Detailing */}
          <path
            d="M670,-80 C820,270 1060,560 1480,810"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeDasharray="6,8"
            strokeOpacity="0.55"
          />
          <path
            d="M780,-80 C920,250 1150,510 1480,730"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeDasharray="4,6"
            strokeOpacity="0.4"
          />

          {/* Hero Paint Splatters Cluster */}
          <g id="hero-splatters" fill="#FFD53D">
            <circle cx="810" cy="380" r="7" />
            <circle cx="828" cy="365" r="4" />
            <circle cx="802" cy="402" r="3" />
            <circle cx="836" cy="394" r="5" />
            <circle cx="785" cy="372" r="2.5" />
            <circle cx="850" cy="415" r="3.5" />
            <circle cx="862" cy="380" r="2" />
            {/* Droplet trails */}
            <circle cx="765" cy="355" r="1.5" />
            <circle cx="750" cy="340" r="1" />
            <circle cx="880" cy="435" r="2.5" />
            <circle cx="905" cy="450" r="4" />
            <circle cx="920" cy="442" r="2" />
            <circle cx="935" cy="468" r="6" />
            <circle cx="952" cy="482" r="3" />
            <circle cx="968" cy="475" r="1.5" />

            {/* Upper splatter group */}
            <circle cx="980" cy="180" r="5" />
            <circle cx="995" cy="165" r="3" />
            <circle cx="972" cy="198" r="2" />
            <circle cx="1010" cy="190" r="4.5" />
            <circle cx="1025" cy="175" r="2" />
          </g>
        </g>

        {/* ========================================================
            03. MID-UPPER / PROCESS ZONE (Y: 1300 - 2600)
            - Sweeping Golden Wave entering from left flank
            - Blue Contour Lines undulating inwards
            - Fine White Dashed Detailing
            - Organic Splatters
            ======================================================== */}
        <g id="zone-process">
          {/* Wave Under-glow */}
          <path
            d="M-80,1320 C320,1580 490,1920 -80,2420 Z"
            fill="#F2D400"
            fillOpacity="0.12"
          />

          {/* Primary Golden Wave Flank */}
          <path
            d="M-80,1420 C240,1660 390,1960 -80,2340 Z"
            fill="url(#gold-wave-2)"
            filter="url(#wave-shadow)"
          />

          {/* Secondary bright gold accent */}
          <path
            d="M-80,1550 C140,1720 250,1920 -80,2180 Z"
            fill="#FFE33F"
            fillOpacity="0.8"
          />

          {/* Blue Topographic / Contour Lines */}
          <path
            d="M-80,1260 C380,1540 560,1900 -80,2480"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2.5"
            strokeOpacity="0.5"
          />
          <path
            d="M-80,1200 C440,1500 620,1880 -80,2540"
            fill="none"
            stroke="#2563EB"
            strokeWidth="2"
            strokeOpacity="0.4"
          />
          <path
            d="M-80,1140 C500,1460 680,1860 -80,2600"
            fill="none"
            stroke="#1D4ED8"
            strokeWidth="1.5"
            strokeOpacity="0.3"
          />

          {/* Fine White Dashed Detailing */}
          <path
            d="M-80,1350 C320,1600 480,1930 -80,2390"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeDasharray="6,8"
            strokeOpacity="0.5"
          />
          <path
            d="M-80,1480 C220,1690 350,1980 -80,2290"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeDasharray="4,6"
            strokeOpacity="0.35"
          />

          {/* Process Zone Splatter Cluster */}
          <g id="process-splatters" fill="#FFD53D">
            <circle cx="340" cy="1820" r="6" />
            <circle cx="358" cy="1805" r="3.5" />
            <circle cx="332" cy="1840" r="2.5" />
            <circle cx="368" cy="1832" r="4" />
            <circle cx="385" cy="1855" r="5" />
            <circle cx="402" cy="1842" r="2" />
            <circle cx="415" cy="1870" r="3" />
            <circle cx="320" cy="1790" r="1.5" />
            <circle cx="305" cy="1775" r="2" />
            <circle cx="370" cy="1760" r="1.5" />
            <circle cx="395" cy="1795" r="2.5" />
          </g>
        </g>

        {/* ========================================================
            04. MID-LOWER / WARDROBE & CATALOG ZONE (Y: 2600 - 3900)
            - Sweeping Golden Wave across the right side
            - Flowing Contour Lines & Dashes
            - Splatters around garment showcase
            ======================================================== */}
        <g id="zone-wardrobe">
          {/* Subtle under-glow wave */}
          <path
            d="M1520,2680 C1080,2960 920,3320 1520,3780 Z"
            fill="#F2D400"
            fillOpacity="0.1"
          />

          {/* Primary Golden Wave Flank */}
          <path
            d="M1520,2780 C1160,3040 1040,3340 1520,3660 Z"
            fill="url(#gold-wave-3)"
            filter="url(#wave-shadow)"
          />

          {/* Secondary bright gold accent */}
          <path
            d="M1520,2920 C1280,3120 1180,3320 1520,3520 Z"
            fill="#FFE33F"
            fillOpacity="0.8"
          />

          {/* Blue Topographic / Contour Lines */}
          <path
            d="M1520,2620 C1020,2920 860,3300 1520,3840"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2.5"
            strokeOpacity="0.5"
          />
          <path
            d="M1520,2560 C960,2880 800,3280 1520,3900"
            fill="none"
            stroke="#2563EB"
            strokeWidth="2"
            strokeOpacity="0.4"
          />
          <path
            d="M1520,2500 C900,2840 740,3260 1520,3960"
            fill="none"
            stroke="#1D4ED8"
            strokeWidth="1.5"
            strokeOpacity="0.3"
          />

          {/* Fine White Dashed Detailing */}
          <path
            d="M1520,2720 C1120,2980 960,3340 1520,3740"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeDasharray="6,8"
            strokeOpacity="0.5"
          />
          <path
            d="M1520,2850 C1220,3070 1080,3360 1520,3600"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeDasharray="4,6"
            strokeOpacity="0.35"
          />

          {/* Wardrobe Zone Splatters */}
          <g id="wardrobe-splatters" fill="#FFD53D">
            <circle cx="1090" cy="3180" r="6" />
            <circle cx="1072" cy="3165" r="3" />
            <circle cx="1105" cy="3198" r="4" />
            <circle cx="1060" cy="3210" r="2.5" />
            <circle cx="1120" cy="3160" r="4.5" />
            <circle cx="1138" cy="3145" r="2" />
            <circle cx="1148" cy="3172" r="5" />
            <circle cx="1040" cy="3230" r="1.5" />
            <circle cx="1165" cy="3130" r="2.5" />
          </g>
        </g>

        {/* ========================================================
            05. LOWER / WORKSHOP SAMPLES & PRICING ZONE (Y: 3900 - 5200)
            - Sweeping Golden Wave from left flank into center
            - Flowing Contour Lines & White Dashes
            - Splatter Clusters
            ======================================================== */}
        <g id="zone-samples">
          {/* Subtle under-glow wave */}
          <path
            d="M-80,4020 C420,4320 580,4720 -80,5180 Z"
            fill="#F2D400"
            fillOpacity="0.1"
          />

          {/* Primary Golden Wave Flank */}
          <path
            d="M-80,4120 C320,4400 460,4740 -80,5080 Z"
            fill="url(#gold-wave-1)"
            filter="url(#wave-shadow)"
          />

          {/* Secondary bright gold accent */}
          <path
            d="M-80,4260 C210,4480 320,4720 -80,4940 Z"
            fill="#FFE33F"
            fillOpacity="0.8"
          />

          {/* Blue Topographic / Contour Lines */}
          <path
            d="M-80,3960 C480,4280 660,4700 -80,5240"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2.5"
            strokeOpacity="0.5"
          />
          <path
            d="M-80,3900 C540,4240 720,4680 -80,5300"
            fill="none"
            stroke="#2563EB"
            strokeWidth="2"
            strokeOpacity="0.4"
          />
          <path
            d="M-80,3840 C600,4200 780,4660 -80,5360"
            fill="none"
            stroke="#1D4ED8"
            strokeWidth="1.5"
            strokeOpacity="0.3"
          />

          {/* Fine White Dashed Detailing */}
          <path
            d="M-80,4060 C380,4350 520,4710 -80,5140"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeDasharray="6,8"
            strokeOpacity="0.5"
          />
          <path
            d="M-80,4190 C270,4440 390,4730 -80,5020"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeDasharray="4,6"
            strokeOpacity="0.35"
          />

          {/* Samples Zone Splatter Cluster */}
          <g id="samples-splatters" fill="#FFD53D">
            <circle cx="410" cy="4560" r="6" />
            <circle cx="428" cy="4542" r="3.5" />
            <circle cx="395" cy="4580" r="2" />
            <circle cx="442" cy="4570" r="4.5" />
            <circle cx="460" cy="4592" r="5" />
            <circle cx="478" cy="4580" r="2.5" />
            <circle cx="380" cy="4600" r="1.5" />
            <circle cx="495" cy="4615" r="3" />
          </g>
        </g>

        {/* ========================================================
            06. BOTTOM / FAQ & FINAL CTA ZONE (Y: 5200 - 6400)
            - Grand Foundation Golden Wave across bottom right & center
            - Expansive Blue Contour Lines
            - Fine White Dashed Detailing
            - Concluding Splatters
            ======================================================== */}
        <g id="zone-bottom">
          {/* Subtle under-glow wave */}
          <path
            d="M1520,5320 C1020,5620 860,6040 1520,6480 Z"
            fill="#F2D400"
            fillOpacity="0.12"
          />

          {/* Primary Golden Wave Flank */}
          <path
            d="M1520,5440 C1120,5720 980,6080 1520,6440 Z"
            fill="url(#gold-wave-2)"
            filter="url(#wave-shadow)"
          />

          {/* Secondary bright gold accent */}
          <path
            d="M1520,5600 C1240,5820 1140,6120 1520,6380 Z"
            fill="#FFE33F"
            fillOpacity="0.85"
          />

          {/* Blue Topographic / Contour Lines */}
          <path
            d="M1520,5240 C960,5560 780,6000 1520,6540"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2.5"
            strokeOpacity="0.55"
          />
          <path
            d="M1520,5180 C900,5520 720,5980 1520,6600"
            fill="none"
            stroke="#2563EB"
            strokeWidth="2"
            strokeOpacity="0.45"
          />
          <path
            d="M1520,5120 C840,5480 660,5960 1520,6660"
            fill="none"
            stroke="#1D4ED8"
            strokeWidth="1.5"
            strokeOpacity="0.3"
          />

          {/* Fine White Dashed Detailing */}
          <path
            d="M1520,5380 C1060,5660 920,6050 1520,6460"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeDasharray="6,8"
            strokeOpacity="0.55"
          />
          <path
            d="M1520,5520 C1180,5770 1050,6100 1520,6400"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeDasharray="4,6"
            strokeOpacity="0.4"
          />

          {/* Bottom Zone Splatter Cluster */}
          <g id="bottom-splatters" fill="#FFD53D">
            <circle cx="1040" cy="5880" r="7" />
            <circle cx="1022" cy="5865" r="4" />
            <circle cx="1058" cy="5898" r="5" />
            <circle cx="1010" cy="5910" r="2.5" />
            <circle cx="1075" cy="5860" r="4" />
            <circle cx="1092" cy="5845" r="2" />
            <circle cx="1105" cy="5875" r="5" />
            <circle cx="990" cy="5930" r="2" />
            <circle cx="1125" cy="5830" r="3" />
          </g>
        </g>
      </svg>
    </div>
  );
};
