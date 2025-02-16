import { useTranslations } from "next-intl";
import { HiOutlineClipboardList } from "react-icons/hi";

export interface MenuItems {
  name: string;
  href: string;
  notifs: number;
  icon: React.ReactNode;
}

export default function useMenuItems() {
  const t = useTranslations("Menu");
  const menuItems: MenuItems[] = [
    {
      name: t("overview"),
      href: "/",
      notifs: 0,
      icon: <HiOutlineClipboardList className="size-6" />,
    },
    {
      name: t("artworks"),
      href: "/artworks",
      notifs: 0,
      icon: <HiOutlineClipboardList className="size-6" />,
    },
    {
      name: t("orders"),
      href: "/orders",
      notifs: 7,
      icon: <HiOutlineClipboardList className="size-6" />,
    },
    {
      name: t("users"),
      href: "/users",
      notifs: 0,
      icon: <HiOutlineClipboardList className="size-6" />,
    },
    {
      name: t("products"),
      href: "/products",
      notifs: 0,
      icon: <HiOutlineClipboardList className="size-6" />,
    },
    {
      name: t("coustomers"),
      href: "/customers",
      notifs: 6,
      icon: <HiOutlineClipboardList className="size-6" />,
    },
    {
      name: t("seller"),
      href: "/seller",
      notifs: 0,
      icon: <HiOutlineClipboardList className="size-6" />,
    },
    {
      name: t("contract"),
      href: "/contract",
      notifs: 0,
      icon: <HiOutlineClipboardList className="size-6" />,
    },
    {
      name: t("setting"),
      href: "/setting",
      notifs: 0,
      icon: <HiOutlineClipboardList className="size-6" />,
    },
  ];
  return { menuItems };
}
