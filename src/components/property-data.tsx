import { HiCheck, HiXMark } from "react-icons/hi2";

export default function DataProperty({
  value,
  property,
  align = "right",
  className,
  boolean,
  copiabble,
  englishNumerics,
}: {
  value: any;
  property: string;
  align?: "right" | "left";
  className?: string;
  boolean?: boolean;
  copiabble?: boolean;
  englishNumerics?: boolean;
}) {
  return (
    <div className={`mt-5 ${className}`}>
      <span className="w-max font-semibold">{property}</span>
      <div
        className={`
          bg-zinc-200 min-h-11 min-w-48 px-2 py-3 mt-1 rounded-lg
          ${align === "left" && "text-left"}
          ${copiabble && "cursor-pointer"}
          ${englishNumerics && "no-persian-numeric"}
        `}
      >
        <>
          {boolean ? (
            value ? (
              <div className="flex gap-2">
                <HiCheck className="w-4 h-4" />
                <span>{property}</span>
              </div>
            ) : (
              <div className="flex gap-2">
                <HiXMark className="w-4 h-4" />
                <span>خیر</span>
              </div>
            )
          ) : (
            <p>{value}</p>
          )}
        </>
      </div>
    </div>
  );
}
