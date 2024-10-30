import useMenuItems from "@/hooks/useMenuItems";
import MenuItem from "./MenuItem";

export default function Sidebar() {
  const { menuItems } = useMenuItems();
  return (
    <section className="h-[95vh] bg-zinc-800 min-w-72 text-white py-12">
      <div>
        {menuItems.map((item) => (
          <MenuItem item={item} />
        ))}
      </div>
    </section>
  );
}
