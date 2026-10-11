type Variant = "sensor" | "dishwasher";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 320 180"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect width="320" height="180" fill="#eef1f8" />
      <rect
        x="0.5"
        y="0.5"
        width="319"
        height="179"
        fill="none"
        stroke="rgba(13,20,36,0.12)"
      />
      {children}
    </svg>
  );
}

function SensorIllustration() {
  return (
    <Frame>
      {/* dust particles */}
      <g fill="rgba(71,80,105,0.55)">
        {[
          [40, 40],
          [58, 60],
          [30, 75],
          [70, 30],
          [50, 95],
          [85, 55],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="1.6" />
        ))}
      </g>
      {/* IR beam */}
      <line
        x1="110"
        y1="90"
        x2="260"
        y2="90"
        stroke="#4338ca"
        strokeWidth="1.5"
        strokeDasharray="5 5"
      />
      {/* emitter */}
      <rect x="98" y="76" width="18" height="28" rx="2" fill="none" stroke="#0f766e" strokeWidth="1.5" />
      {/* receiver */}
      <rect x="256" y="76" width="18" height="28" rx="2" fill="none" stroke="#0f766e" strokeWidth="1.5" />
      {/* waveform readout */}
      <polyline
        points="130,140 150,140 158,120 170,150 182,132 196,140 320,140"
        fill="none"
        stroke="#4338ca"
        strokeWidth="1.5"
      />
      <text x="20" y="20" fontFamily="var(--font-jetbrains)" fontSize="9" fill="#646d8a">
        IR / PHOTO SENSOR
      </text>
    </Frame>
  );
}

function DishwasherIllustration() {
  return (
    <Frame>
      <circle cx="160" cy="95" r="55" fill="none" stroke="#0f766e" strokeWidth="1.5" />
      <circle cx="160" cy="95" r="38" fill="none" stroke="rgba(13,20,36,0.18)" strokeWidth="1" />
      {/* spray arm */}
      <g stroke="#4338ca" strokeWidth="1.5">
        <line x1="160" y1="95" x2="205" y2="95" />
        <line x1="160" y1="95" x2="132" y2="60" />
        <line x1="160" y1="95" x2="132" y2="130" />
      </g>
      <circle cx="160" cy="95" r="4" fill="#4338ca" />
      {/* dispenser */}
      <rect x="245" y="70" width="26" height="50" rx="3" fill="none" stroke="#0f766e" strokeWidth="1.5" />
      <line x1="245" y1="95" x2="271" y2="95" stroke="rgba(13,20,36,0.18)" />
      <text x="20" y="20" fontFamily="var(--font-jetbrains)" fontSize="9" fill="#646d8a">
        LIQUID DISPENSER
      </text>
    </Frame>
  );
}

export default function ProjectIllustration({ variant }: { variant: Variant }) {
  if (variant === "sensor") return <SensorIllustration />;
  return <DishwasherIllustration />;
}
