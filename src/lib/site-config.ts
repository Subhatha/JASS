export const address = "Canada";
export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";
export const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "";
export const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
