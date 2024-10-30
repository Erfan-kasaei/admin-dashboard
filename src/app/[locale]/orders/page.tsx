import { getTranslations } from "next-intl/server";
import { Button } from "rizzui";
import OrdersTable from "./OrdersTable";

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
          <Button className="rounded-none flex items-center gap-2 bg-white border border-zinc-800 text-zinc-800 hover:!bg-gray-100 px-5">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                />
              </svg>
            </span>
            <span>{t("export")}</span>
          </Button>
          <Button className="rounded-none">{t("create")}</Button>
        </div>
      </div>
      <OrdersTable data={data} />
    </div>
  );
}
