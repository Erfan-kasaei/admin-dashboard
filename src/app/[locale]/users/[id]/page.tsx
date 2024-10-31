import DataProperty from "@/components/property-data";
import { getTranslations } from "next-intl/server";

export default async function UserPage({
  params,
}: {
  params: { id: string; locale: string };
}) {
  const { id } = params;
  const t = await getTranslations("TableHeads");
  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((res) => res.json());
  return (
    <div className="flex gap-3 flex-wrap">
      <DataProperty property={t("id")} value={user.id} />
      <DataProperty property={t("username")} value={user.username} />
      <DataProperty property={t("name")} value={user.name} />
      <DataProperty property={t("email")} value={user.email} />
      <DataProperty property={t("phone")} value={user.phone} />
      <DataProperty property={t("website")} value={user.website} />
    </div>
  );
}

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users = await res.json();
  const locales = ["en", "de", "fa"];

  const paths: any[] = [];
  locales.forEach((locale) => {
    users.forEach((user: any) => {
      paths.push({ locale, id: user.id.toString() });
    });
  });

  return paths;
}
