import DOMPurify from "dompurify";

export const Icon = ({ svgString }: { svgString: string }) => {
  return (
    <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(svgString) }} />
  );
};
