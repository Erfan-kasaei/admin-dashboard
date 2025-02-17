import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div className="font-semibold text-xl text-zinc-100 flex flex-col gap-10">
      <Link href="/orders" className="bg-zinc-50/30 w-fit p-3 rounded-3xl">
        {t("ssr")}
      </Link>
      <Link href="/users" className="bg-zinc-50/30 w-fit p-3 rounded-3xl">
        {t("csr")}
      </Link>
      <Link href="/users/3" className="bg-zinc-50/30 w-fit p-3 rounded-3xl">
        {t("ssg")}
      </Link>
    </div>
  );
}
