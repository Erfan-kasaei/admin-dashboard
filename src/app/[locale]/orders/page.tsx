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
        <h2 className="text-4xl text-zinc-100 font-semibold">{t("title")}</h2>
        <div className="flex gap-4">
          <Button className="flex items-center gap-2 bg-zinc-50 rounded-lg text-zinc-800 hover:!bg-zinc-400 px-5">
            <span>
              <HiOutlineClipboardList className="size-6" />
            </span>
            <span>{t("export")}</span>
          </Button>
          <Button className="flex items-center gap-2 bg-zinc-50 rounded-lg text-zinc-800 hover:!bg-zinc-400 px-5">
            <span>
              <HiOutlineClipboardList className="size-6" />
            </span>
            <span>{t("export")}</span>
          </Button>
        </div>
      </div>
      <OrdersCarts />
      <OrdersTable data={data} />
    </div>
  );
}
