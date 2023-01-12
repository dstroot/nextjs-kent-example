import { processMarkdown } from "../../lib/processMarkdown";

export default async function Index() {
  const data = await processMarkdown("/uses/test.md");

  return (
    <>
      <header className="">
        <h2 className="text-3xl leading-tight text-black md:text-4xl dark:text-white">
          What Kent uses
        </h2>
        <p className="mt-2 mb-16 text-xl font-medium text-gray-400 dark:text-slate-500">
          The tools I use...
        </p>
      </header>
      <div
        className="prose prose-lg dark:prose-invert prose-a:no-underline"
        dangerouslySetInnerHTML={{ __html: data?.html }}
      />
    </>
  );
}
