import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";


const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']}); 

export const metadata = {
  title: "Tatenda Nyongo Portfolio",
  description: "Portfolio for Tatenda Nyongo - Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-9CLN8CJN8C"></Script>
          <Script id="google-analytics">
            {`
             window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-9CLN8CJN8C');
            `}
          </Script>
      </head>

      <body className={poppins.className}>{children}</body>
    </html>
  );
}
