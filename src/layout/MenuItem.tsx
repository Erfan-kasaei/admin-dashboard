"use client";
import { Link, usePathname } from "@/i18n/routing";
import { MenuItems } from "../hooks/useMenuItems";

export default function MenuItem({ item }: { item: MenuItems }) {
  const pathname = usePathname();
  return (
    <Link
      href={item.href}
      className={`py-3 px-8 flex justify-between items-center hover:bg-zinc-700 ${
        pathname === item.href && `border-l-[6px]`
      }`}
    >
      <div className="flex items-center gap-2">
        <span>{item.icon}</span>
        <span>{item.name}</span>
      </div>
      {!!item.notifs && (
        <div className="py-1 px-2 border border-white">{item.notifs}</div>
      )}
    </Link>
  );
}
