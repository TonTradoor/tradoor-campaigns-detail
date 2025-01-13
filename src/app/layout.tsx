"use client";

import "./globals.css";
import Nav from "@/compoents/Nav";
import { useSearchParams } from "next/navigation";
import { LanguageProviderContext } from "@/contexts/Language";
import { I18nextProvider } from "react-i18next";
import i18n from "@/locales/i18n";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const searchParams = useSearchParams();
  const language = searchParams.get("language") || "en";

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <html lang="en">
      <I18nextProvider i18n={i18n}>
        <LanguageProviderContext.Provider value={language}>
          <body>
            <Nav title={language} />
            {children}
          </body>
        </LanguageProviderContext.Provider>
      </I18nextProvider>
    </html>
  );
}
