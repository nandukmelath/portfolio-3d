const isProd = process.env.NODE_ENV === "production";
const base = isProd ? "/portfolio-3d" : "";

export function asset(path: string): string {
  if (!path.startsWith("/")) path = `/${path}`;
  return `${base}${path}`;
}
