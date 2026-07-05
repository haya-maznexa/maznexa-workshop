import {
  FaGoogle, FaMeta, FaFacebook, FaInstagram, FaTiktok, FaSnapchat,
  FaXTwitter, FaLinkedin, FaYoutube, FaPinterest, FaWhatsapp,
  FaShopify, FaSalesforce, FaHubspot, FaFileCsv, FaDatabase, FaCartShopping,
  FaMicrosoft, FaStripe, FaMailchimp,
} from "react-icons/fa6";
import {
  Search, FileSpreadsheet, Table, Globe, Phone, Users, BookOpen,
  Headphones, Receipt, TrendingUp,
} from "lucide-react";

const MAP: Record<string, { icon: React.ElementType; color: string }> = {
  google: { icon: FaGoogle, color: "#4285F4" },
  meta: { icon: FaMeta, color: "#0866FF" },
  facebook: { icon: FaFacebook, color: "#1877F2" },
  instagram: { icon: FaInstagram, color: "#E4405F" },
  tiktok: { icon: FaTiktok, color: "#000000" },
  snapchat: { icon: FaSnapchat, color: "#E4B000" },
  x: { icon: FaXTwitter, color: "#000000" },
  linkedin: { icon: FaLinkedin, color: "#0A66C2" },
  youtube: { icon: FaYoutube, color: "#FF0000" },
  pinterest: { icon: FaPinterest, color: "#BD081C" },
  whatsapp: { icon: FaWhatsapp, color: "#25D366" },
  shopify: { icon: FaShopify, color: "#96BF48" },
  salesforce: { icon: FaSalesforce, color: "#00A1E0" },
  hubspot: { icon: FaHubspot, color: "#FF7A59" },
  cart: { icon: FaCartShopping, color: "#5053C8" },
  csv: { icon: FaFileCsv, color: "#217346" },
  excel: { icon: FileSpreadsheet, color: "#217346" },
  database: { icon: FaDatabase, color: "#5053C8" },
  sheets: { icon: Table, color: "#34A853" },
  search: { icon: Search, color: "#458CF5" },
  microsoft: { icon: FaMicrosoft, color: "#00A4EF" },
  stripe: { icon: FaStripe, color: "#635BFF" },
  mailchimp: { icon: FaMailchimp, color: "#FFE01B" },
  api: { icon: Globe, color: "#5053C8" },
  phone: { icon: Phone, color: "#5053C8" },
  crm: { icon: Users, color: "#E42527" },
  books: { icon: BookOpen, color: "#089949" },
  desk: { icon: Headphones, color: "#226DB4" },
  invoice: { icon: Receipt, color: "#2CA01C" },
  seo: { icon: TrendingUp, color: "#FF642D" },
};

export function IntegrationIcon({ icon, className = "w-4 h-4" }: { icon: string; className?: string }) {
  const def = MAP[icon] ?? { icon: Search, color: "#5053C8" };
  const Icon = def.icon;
  let color = def.color;
  if (color === "#000000") color = "hsl(var(--foreground))";
  else if (color === "#FFE01B") color = "#C9A800"; // Mailchimp yellow → readable on white
  return <Icon className={className} style={{ color }} />;
}
