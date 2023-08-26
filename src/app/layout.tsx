import { Sora } from "next/font/google";
import "./globals.css";
// eslint-disable-next-line import/extensions, import/no-unresolved
import Layout from "@/components/Layout";

// font settings
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div
          className={`page bg-site bg-cover bg-no-repeat text-white ${sora.variable} relative font-sora`}
        >
          <Layout>{children}</Layout>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
