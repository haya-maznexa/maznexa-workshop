import Image from "next/image";

// Zoho — classic four-colour wordmark
function ZohoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 64" className={className} role="img" aria-label="Zoho Analytics">
      <text
        x="0" y="46"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="46" fontWeight="800"
      >
        <tspan fill="#E42527">Z</tspan>
        <tspan fill="#089949">o</tspan>
        <tspan fill="#226DB4">h</tspan>
        <tspan fill="#F9B21D">o</tspan>
      </text>
      <text
        x="118" y="46"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="20" fontWeight="600" fill="#6B7280"
      >
        Analytics
      </text>
    </svg>
  );
}

// Claude — Anthropic sunburst + wordmark
function ClaudeMark({ className = "" }: { className?: string }) {
  const rays = Array.from({ length: 12 }, (_, i) => i * 30);
  return (
    <svg viewBox="0 0 200 64" className={className} role="img" aria-label="Claude AI">
      <g transform="translate(32,32)">
        {rays.map((deg) => (
          <rect
            key={deg}
            x="-2.4" y="-26" width="4.8" height="20" rx="2.4"
            fill="#D97757"
            transform={`rotate(${deg})`}
          />
        ))}
      </g>
      <text
        x="62" y="42"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="30" fontWeight="700" fill="currentColor"
      >
        Claude
      </text>
    </svg>
  );
}

export function ToolLogo({ tool, className = "h-8" }: { tool: string; className?: string }) {
  const key = tool.toLowerCase();
  if (key.includes("power bi")) {
    return <Image src="/tools/powerbi.png" alt="Power BI" width={320} height={320} className={`${className} w-auto object-contain`} />;
  }
  if (key.includes("agency")) {
    return <Image src="/tools/agencyanalytics.png" alt="Agency Analytics" width={602} height={319} className={`${className} w-auto object-contain`} />;
  }
  if (key.includes("zoho")) return <ZohoMark className={`${className} w-auto`} />;
  if (key.includes("claude")) return <ClaudeMark className={`${className} w-auto text-foreground`} />;
  return null;
}
