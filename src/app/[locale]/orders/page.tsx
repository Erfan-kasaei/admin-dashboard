import { getTranslations } from "next-intl/server";
import { Button } from "rizzui";
import OrdersTable from "./OrdersTable";
import OrdersCarts from "./OrdersCarts";
import { HiOutlineClipboardList } from "react-icons/hi";

export default async function page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const data = await res.json();
  const t = await getTranslations("OrdersPage");

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl text-zinc-700 font-semibold">{t("title")}</h2>
        <div className="flex gap-4">
          <Button className="rounded-none flex items-center gap-2 bg-white border border-zinc-800 text-zinc-800 hover:!bg-zinc-100 px-5">
            <span>
              <HiOutlineClipboardList className="size-6" />
            </span>
            <span>{t("export")}</span>
          </Button>
          <Button className="rounded-none">{t("create")}</Button>
        </div>
      </div>
      <OrdersCarts />
      <OrdersTable data={data} />
    </div>
  );
}
