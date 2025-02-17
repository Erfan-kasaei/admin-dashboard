import { getTranslations } from "next-intl/server";
import { HiOutlineClipboardList } from "react-icons/hi";
import { HiOutlineGlobeAlt } from "react-icons/hi2";

export default async function OrdersCarts() {
  const t = await getTranslations("Cards");
  return (
    <div className="flex justify-evenly flex-wrap items-center my-10">
      <div className="bg-blue-dark rounded-2xl text-zinc-50 py-6 px-14 flex gap-5 items-start font-semibold">
        <HiOutlineGlobeAlt className="size-6" />

        <div>
          <h5>12</h5>
          <p>{t("processing")}</p>
        </div>
      </div>
      <div className="bg-blue-dark rounded-2xl text-zinc-50 py-6 px-14 flex gap-5 items-start font-semibold">
        <span>
          <HiOutlineClipboardList className="size-6" />
        </span>
        <div>
          <h5>6</h5>
          <p>{t("shipping")}</p>
        </div>
      </div>
      <div className="bg-blue-dark rounded-2xl text-zinc-50 py-6 px-14 flex gap-5 items-start font-semibold">
        <span>
          <HiOutlineClipboardList className="size-6" />
        </span>
        <div>
          <h5>18</h5>
          <p>{t("completed")}</p>
        </div>
      </div>
      <div className="bg-blue-dark rounded-2xl text-zinc-50 py-6 px-14 flex gap-5 items-start font-semibold">
        <span>
          <HiOutlineClipboardList className="size-6" />
        </span>
        <div>
          <h5>9</h5>
          <p>{t("cancelled")}</p>
        </div>
      </div>
    </div>
  );
}
