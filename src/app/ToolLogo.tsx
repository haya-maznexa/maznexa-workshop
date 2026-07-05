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

export function ToolLogo({ tool, className = "h-8" }: { tool: string; className?: string }) {
  const key = tool.toLowerCase();
  if (key.includes("power bi")) {
    return <Image src="/tools/powerbi.png" alt="Power BI" width={320} height={320} className={`${className} w-auto object-contain`} />;
  }
  if (key.includes("agency")) {
    return <Image src="/tools/agencyanalytics.png" alt="Agency Analytics" width={602} height={319} className={`${className} w-auto object-contain`} />;
  }
  if (key.includes("claude")) {
    return <Image src="/tools/claude.png" alt="Claude AI" width={2048} height={1124} className={`${className} w-auto object-contain`} />;
  }
  if (key.includes("zoho")) return <ZohoMark className={`${className} w-auto`} />;
  return null;
}
