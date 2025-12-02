import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { LinksFunction } from "react-router";
import "./app.css";

export const links: LinksFunction = () => [
  { rel: "icon", type: "image/svg+xml", href: "/portfolio/favicon.svg" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Danny Savinon - DevOps Engineer with 4+ years of experience in AWS, Azure, CI/CD pipelines, Infrastructure as Code, and cloud architecture. Based in South Florida." />
        <meta name="keywords" content="DevOps Engineer, AWS, Azure, Cloud Infrastructure, CI/CD, Terraform, CloudFormation, Docker, Kubernetes, GitHub Actions" />
        <meta name="author" content="Danny Savinon" />

        {/* Open Graph / Social */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Danny Savinon | DevOps Engineer" />
        <meta property="og:description" content="DevOps Engineer with 4+ years of experience in AWS, Azure, CI/CD pipelines, and cloud architecture." />
        <meta property="og:url" content="https://dannysavinon.github.io/portfolio/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Danny Savinon | DevOps Engineer" />
        <meta name="twitter:description" content="DevOps Engineer with 4+ years of experience in AWS, Azure, CI/CD pipelines, and cloud architecture." />

        <title>Danny Savinon | DevOps Engineer</title>
        <Meta />
        <Links />
      </head>
      <body className="font-[Inter]">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
