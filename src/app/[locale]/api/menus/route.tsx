import { getTranslations } from "next-intl/server";
import { NextResponse } from "next/server";
import {
  HiOutlineClipboardList,
  HiOutlineGlobeAlt,
  HiOutlineShoppingBag,
  HiOutlineUsers,
  HiOutlineCube,
  HiOutlineUserGroup,
  HiOutlineBriefcase,
} from "react-icons/hi";

interface MenuItems {
  name: string;
  href: string;
  notifs: number;
  icon: React.ReactNode;
}

export async function GET() {
  const t = await getTranslations("Menu");

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
      icon: <HiOutlineGlobeAlt className="size-6" />,
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
      name: t("products"),
      href: "/products",
      notifs: 0,
      icon: <HiOutlineCube className="size-6" />,
    },
    {
      name: t("customers"),
      href: "/customers",
      notifs: 6,
      icon: <HiOutlineUserGroup className="size-6" />,
    },
    {
      name: t("seller"),
      href: "/seller",
      notifs: 0,
      icon: <HiOutlineBriefcase className="size-6" />,
    },
  ];

  return NextResponse.json(menuItems);
}
