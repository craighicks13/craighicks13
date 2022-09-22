import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import deflist from 'remark-deflist'
import html from 'remark-html'

const contentDir = path.join(process.cwd(), 'data')


export async function getContentData(id: string) {
  const fullPath = path.join(contentDir, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(deflist)
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()
  
  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string })
  }
}