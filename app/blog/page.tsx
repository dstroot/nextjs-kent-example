import { processMarkdown } from "../../lib/processMarkdown";

export default async function Index() {
  const data = await processMarkdown("test.md");

  return (
    <div
      className="prose prose-lg dark:prose-invert prose-a:no-underline"
      dangerouslySetInnerHTML={{ __html: data?.html }}
    />
  );
}
