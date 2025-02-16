"use client";
import Breadcrumb from "@/components/breadcrumb";
import useMenuItems from "@/hooks/useMenuItems";
import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { HiOutlineClipboardList } from "react-icons/hi";
import { Select } from "rizzui";

export default function Header() {
  const pathname = usePathname();
  const paths = pathname.split("/");
  const router = useRouter();
  const locale = useLocale();
  const { menuItems } = useMenuItems();
  const options = [
    {
      label: "English",
      value: "en",
    },
    {
      label: "فارسی",
      value: "fa",
    },
  ];
  return (
    <div className="w-full flex justify-between items-center mt-5 mb-10">
      <div>
        <Breadcrumb
          separator="/"
          separatorVariant="default"
          className="flex-wrap"
        >
          <span>
            <HiOutlineClipboardList className="size-6" />
          </span>
          {paths.map((path) =>
            menuItems.find((item) => item.href === path) ? (
              <div key={path}>
                {menuItems.find((item) => item.href === path)?.href}
              </div>
            ) : path ? (
              <span key={path}>{path}</span>
            ) : null
          )}
        </Breadcrumb>
      </div>
      <div className="flex items-center gap-5 *:cursor-pointer">
        <span>
        <HiOutlineClipboardList className="size-6" />
        </span>
        <span>
        <HiOutlineClipboardList className="size-6" />
        </span>
        <span>
        <HiOutlineClipboardList className="size-6" />
        </span>
        <Select
          options={options}
          value={options.find((option) => option.value === locale)}
          onChange={(e: { label: string; value: string }) => {
            router.replace(pathname, { locale: e.value });
          }}
          prefix={
            <HiOutlineClipboardList className="size-6" />
          }
          size="sm"
          className={"min-w-20"}
        />
      </div>
    </div>
  );
}
