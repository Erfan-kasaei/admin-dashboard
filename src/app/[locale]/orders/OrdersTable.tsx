"use client";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Table } from "rizzui";

export default function OrdersTable({
  data,
  clickable,
}: {
  data: any;
  clickable?: boolean;
}) {
  const t = useTranslations("TableHeads");
  const router = useRouter();
  return (
    <div className="text-zinc-100 bg-zinc-800">
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>{t("id")}</Table.Head>
            <Table.Head>{t("name")}</Table.Head>
            <Table.Head>{t("email")}</Table.Head>
            <Table.Head>{t("phone")}</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((item: any) => (
            <Table.Row
              key={item.id}
              className={`${
                clickable && `cursor-pointer`
              } hover:text-zinc-900 rounded-lg`}
              onClick={() => clickable && router.push(`/users/${item.id}`)}
            >
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.email}</Table.Cell>
              <Table.Cell>{item.phone}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
