import { MenuItems } from "@/hooks/useMenuItems";
import MenuItem from "./MenuItem";
import { URL } from "@/constats";
import { getLocale } from "next-intl/server";

export default async function Sidebar() {
  const locale = await getLocale();
  const res = await fetch(`${URL}/${locale}/api/menus`);
  const menuItems = await res.json();
  return (
    <section className="h-[95vh] bg-blue-dark rounded-2xl min-w-72 text-white py-12">
      <div>
        {menuItems.map((item: MenuItems) => (
          <MenuItem item={item} key={item.name} />
        ))}
      </div>
    </section>
  );
}
