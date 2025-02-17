import { useTranslations } from "next-intl";
import {
  HiOutlineClipboardList,
  HiOutlineShoppingBag,
  HiOutlineUsers,
  HiIdentification,
} from "react-icons/hi";

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
      name: t("orders"),
      href: "/orders",
      notifs: 7,
      icon: <HiOutlineShoppingBag className="size-6" />,
    },
    {
      name: t("users"),
      href: "/users",
      notifs: 0,
      icon: <HiOutlineUsers className="size-6" />,
    },
    {
      name: t("cards"),
      href: "/cards",
      notifs: 0,
      icon: <HiIdentification className="size-6" />,
    },
  ];
  return { menuItems };
}
