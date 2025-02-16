import DOMPurify from "dompurify";

export const Icon = ({ iconString }: { iconString: string }) => {
  return (
    <span
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(iconString) }}
    />
  );
};
