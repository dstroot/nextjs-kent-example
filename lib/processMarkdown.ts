import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";

export async function processMarkdown(name: string) {
  const fullPath = join(process.cwd(), "/app/blog/" + `${name}`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // gray-matter separates the data in the YAML from the rest of the content
  const { data, content } = matter(fileContents);

  // process the content to HTML
  const html = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(content);

  const htmlString = String(html);

  return { data, html: htmlString };
}
