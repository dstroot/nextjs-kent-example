import "../styles/globals.css";
// import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      {/* <Script id="dark-mode" strategy="beforeInteractive">
        {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)){" "}
        {document.documentElement.classList.add("dark")} else{" "}
        {document.documentElement.classList.remove("dark")}`}
      </Script> */}
      <body className="px-16 transition duration-500 bg-white lg:px-24 dark:bg-gray-900">
        {children}
      </body>
    </html>
  );
}
