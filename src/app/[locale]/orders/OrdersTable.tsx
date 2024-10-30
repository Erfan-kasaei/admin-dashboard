"use client";
import { useTranslations } from "next-intl";
import { Table } from "rizzui";

export default function OrdersTable({ data }: { data: any }) {
  const t = useTranslations("TableHeads");
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
          <Table.Row key={item.id}>
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
