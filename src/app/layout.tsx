import type { Metadata } from "next";
import Script from "next/script";
import "../../styles/main.scss";

export const metadata: Metadata = {
  title: "Anushka JOshi",
  description:
    "Hey, I'm Himanshu Kashyap a Software Developer from Dehradun, Uttarakhand. Here's my portfolio where you can see all my projects, blogs, and achievements.",
  authors: [{ name: "Anushka Joshi", url: "https://www.Anushka.com/" }],
  creator: "Anushka Joshi",
  publisher: "Anushka Joshi",
  keywords: [
  "Anushka Joshi",
  "Anushka Joshi portfolio",
  "Anushka Joshi developer",
  "AI ML developer Anushka Joshi",
  "Anushka Joshi projects",
  "software engineer Anushka",
  "full-stack developer Anushka",
  "React developer from Indore",
  "Next.js portfolio developer",
  "women in tech",
  "Python developer",
  "AI/ML engineer India",
  "OpenVINO developer",
  "TensorFlow developer",
  "frontend engineer",
  "Dehradun software engineer",
  "female developer portfolio",
  "portfolio of AI/ML projects",
  "personal website for developers",
  "best developer portfolios",
  "Anushka resume projects",
  "Gradio Python TTS",
  "Streamlit resume extractor",
  "AI-powered chatbot projects",
  "LPU alumni",
  "Indore",
  "full stack AI developer"
],

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/favicon.ico" },
  alternates: {
    canonical: "https://www.Anushka.com/",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />
      <Script id="google-analytics-script" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');`}
      </Script>
    </html>
  );
}
