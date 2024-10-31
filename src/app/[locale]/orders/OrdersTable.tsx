"use client";
import { Link, useRouter } from "@/i18n/routing";
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
    <Table variant="modern">
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
            className={`${clickable && `cursor-pointer`}`}
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
  );
}
