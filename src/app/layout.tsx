"use client";

import "./globals.css";
import { useSearchParams } from "next/navigation";
import { LanguageProviderContext } from "@/contexts/Language";
import { I18nextProvider } from "react-i18next";
import i18n from "@/locales/i18n";
import { useEffect, Suspense } from "react";
import { ChakraProvider } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const LangComponent = ({ children }: { children: React.ReactNode }) => {
    const searchParams = useSearchParams();
    const language = searchParams.get("language") || "en";

    useEffect(() => {
      i18n.changeLanguage(language);
    }, [language]);

    return (
      <LanguageProviderContext.Provider value={language}>
        {children}
      </LanguageProviderContext.Provider>
    );
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="../assets/logo.svg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover"
        />
        <title>Tradoor: Trade crypto on the fastest DEX on TON</title>
      </head>

      <Suspense>
        <body>
          <ChakraProvider>
            <I18nextProvider i18n={i18n}>
              <LangComponent>{children}</LangComponent>
              {/* <LanguageProviderContext.Provider value={language}>
            <body>{children}</body>
          </LanguageProviderContext.Provider> */}
            </I18nextProvider>
          </ChakraProvider>
        </body>
      </Suspense>
    </html>
  );
}
