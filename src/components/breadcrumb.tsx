import React from "react";
import { Link } from "@/i18n/routing";

export type BreadcrumbItemProps = {
  href?: string;
  className?: string;
  children: React.ReactNode;
};

const BreadcrumbItem = ({
  href = "#",
  className,
  children,
}: BreadcrumbItemProps) => (
  <Link
    href={href}
    role="button"
    className={`inline-flex items-center gap-2 text-sm ${className}`}
  >
    {children}
  </Link>
);

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {
  separator?: React.ReactNode;
  disableCurrent?: boolean;
  children: React.ReactNode;
  className?: string;
  separatorClassName?: string;
  separatorVariant?: "default" | "circle";
}

const Breadcrumb = ({
  separator = "/",
  disableCurrent = true,
  children,
  className,
  separatorClassName,
  separatorVariant = "default",
}: BreadcrumbProps) => {
  const numOfItems = React.Children.count(children);

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement<BreadcrumbItemProps>(child)) return child;

        return (
          <>
            {React.cloneElement(child, {
              className: `text-zinc-700 last:text-zinc-500 font-medium"
                ${disableCurrent && "last:pointer-events-none"}`,
            })}
            {index < numOfItems - 1 &&
              (separatorVariant === "default" ? (
                <span className={`text-sm text-zinc-500 ${separatorClassName}`}>
                  {separator}
                </span>
              ) : (
                <span className="h-1 w-1 rounded-full bg-zinc-300" />
              ))}
          </>
        );
      })}
    </div>
  );
};

Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.displayName = "Breadcrumb";
export default Breadcrumb;
