import "../styles/globals.css";
import localFont from "next/font/local";
import { Providers } from "../components/Providers";
import Script from 'next/script'

// components
import { NavBar } from "../components/NavBar";
import { Footer } from "@/components/Footer";

/*
Tailwind font weights:

font-thin:	      font-weight: 100;
font-extralight:	font-weight: 200;
font-light:	      font-weight: 300;
font-normal:	    font-weight: 400;
font-medium:	    font-weight: 500;
font-semibold:	  font-weight: 600;
font-bold:	      font-weight: 700;
font-extrabold:	  font-weight: 800;
font-black:	      font-weight: 900;

When you purchase web fonts licensing, you receive a package of font files that typically include at least some of the following formats:

* Embedded OpenType (EOT): EOT is a legacy format developed by Microsoft. Older Internet Explorer versions require EOT to render your web fonts. EOT is often served uncompressed so, if you don’t require browser support of the likes of IE8 or below, then you’re better off leaving it out.

* TrueType (TTF): TTF is a font format developed by Microsoft and Apple in the 1980s. Modern TTF files are also called TrueType OpenType fonts. TTF can be useful for extending support to some older browsers, especially on mobile, if you need it.

* Web Open Font Format (WOFF): WOFF was developed in 2009 as a wrapper format for TrueType and OpenType fonts. It compresses the files and is supported by all modern browsers.

* Web Open Font Format 2 (WOFF2): WOFF2 is an update to the original WOFF format. Developed by Google, this is considered the best format of the bunch because it offers smaller file sizes and better performance for modern browsers that support it.

If you are mostly targeting users with modern browsers, you can get away with a progressive method of using @font-face that only serves WOFF and WOFF2 formats. These offer the best compression and allow you to deal with fewer files in your code.
*/

const matter = localFont({
  src: [
    { path: "../public/font/Matter-Light.woff2", weight: "300" },
    { path: "../public/font/Matter-Regular.woff2", weight: "400" },
    { path: "../public/font/Matter-Medium.woff2", weight: "500" },
    { path: "../public/font/Matter-SemiBold.woff2", weight: "600" },
    { path: "../public/font/Matter-Bold.woff2", weight: "700" },
    { path: "../public/font/Matter-Heavy.woff2", weight: "900" },
    {
      path: "../public/font/Matter-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/font/Matter-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/font/Matter-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/font/Matter-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/font/Matter-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/font/Matter-HeavyItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],

  variable: "--font-matter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${matter.variable} font-sans bg-white dark:bg-gray-900`}
      >
        <Providers>
          {/* <LazyMotion features={domAnimation}> */}
          <div className="container px-4 mx-auto md:px-8 lg:px-16">
            <div className="flex flex-col min-h-screen text-gray-700 dark:text-gray-100">
              <NavBar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </div>
          {/* </LazyMotion> */}
        </Providers>
        <Script src="https://cdn.botpress.cloud/webchat/v0/inject.js" strategy="afterInteractive"/>
        <Script src="https://mediafiles.botpress.cloud/10b57620-20b1-4ec9-aa5f-a4d5c2e252a9/webchat/config.js" strategy="lazyOnload" defer />
      </body>
    </html>
  );
}
