import { processMarkdown } from "../../lib/processMarkdown";

// components
import { AnimatedHeader } from "@/components/AnimatedHeader";

export default async function Index() {
  const data = await processMarkdown("/uses/uses.md");

  return (
    <>
      <AnimatedHeader />

      <div
        className="mt-16 prose max-w-none dark:prose-invert prose-a:no-underline"
        dangerouslySetInnerHTML={{ __html: data?.html }}
      />
    </>
  );
}
