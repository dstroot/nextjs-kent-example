import { processMarkdown } from "../../lib/processMarkdown";

// components
import { AnimatedHeader } from "@/components/AnimatedHeader";

export default async function Index() {
  const data = await processMarkdown("/uses/uses.md");

  return (
    <>
      <AnimatedHeader />

      <div
        // style={{ animationDelay: "500ms" }}
        className="mt-16 mb-16 prose max-w-none dark:prose-invert prose-a:no-underline animate-slide-up-fade"
        dangerouslySetInnerHTML={{ __html: data?.html }}
      />
    </>
  );
}
