import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div className="font-semibold text-xl text-orange-400 flex flex-col gap-10">
      <Link href="/orders">{t("ssr")}</Link>
      <Link href="/users">{t("csr")}</Link>
      <Link href="/users/3">{t("ssg")}</Link>
    </div>
  );
}
