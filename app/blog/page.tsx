import { processMarkdown } from "../../lib/processMarkdown";

export default async function Index() {
  const data = await processMarkdown("test.md");

  return (
    <div
      className="prose dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: data?.html }}
    />
  );
}
