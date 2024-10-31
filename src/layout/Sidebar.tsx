import useMenuItems, { MenuItems } from "@/hooks/useMenuItems";
import MenuItem from "./MenuItem";
import { URL } from "@/constats";

export default async function Sidebar() {
  const res = await fetch(`${URL}/api/menus`);
  const menuItems = await res.json();
  return (
    <section className="h-[95vh] bg-zinc-800 min-w-72 text-white py-12">
      <div>
        {menuItems.map((item: MenuItems) => (
          <MenuItem item={item} key={item.name} />
        ))}
      </div>
    </section>
  );
}
