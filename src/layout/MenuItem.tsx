"use client";
import { Link, usePathname } from "@/i18n/routing";
import useMenuItems, { MenuItems } from "../hooks/useMenuItems";
import { useLocale } from "next-intl";

export default function MenuItem({ item }: { item: MenuItems }) {
  const { menuItems } = useMenuItems();
  const activeItem = menuItems.find((li) => li.href === item.href);
  const pathname = usePathname();
  const locale = useLocale();
  return (
    <Link
      href={item.href}
      className={`py-3 px-8 flex justify-between items-center hover:bg-zinc-700 ${
        pathname === item.href && locale !== "fa"
          ? `border-l-[6px]`
          : locale === "fa" && pathname === item.href
          ? `border-r-[6px]`
          : ""
      }`}
    >
      <div className="flex items-center gap-2">
        <span>{activeItem?.icon}</span>
        <span>{item.name}</span>
      </div>
      {!!item.notifs && (
        <div className="py-1 px-2 border border-white">{item.notifs}</div>
      )}
    </Link>
  );
}
