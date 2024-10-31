import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Sidebar from "@/layout/Sidebar";
import "./globals.css";
import Header from "@/layout/Header";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className="p-4 h-screen overflow-hidden"
        dir={locale === "fa" ? "rtl" : "ltr"}
      >
        <NextIntlClientProvider messages={messages}>
          <main className="flex gap-5 h-full overflow-hidden">
            <Sidebar />
            <div className="w-full overflow-auto no-scrollbar">
              <Header />
              {children}
            </div>
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
