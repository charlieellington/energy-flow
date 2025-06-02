import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Convert any string to kebab-case
function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2') // camelCase to kebab-case
    .replace(/[\s_]+/g, '-') // spaces and underscores to hyphens
    .replace(/[^a-zA-Z0-9-]/g, '') // remove special characters
    .toLowerCase()
    .replace(/-+/g, '-') // multiple hyphens to single
    .replace(/^-|-$/g, '') // trim leading/trailing hyphens
}

// Check if a filename needs normalization (has spaces, capitals, or special chars)
function needsNormalization(filename) {
  const nameWithoutExt = filename.replace(/\.(md|mdx)$/, '')
  const normalized = toKebabCase(nameWithoutExt)
  
  // Only normalize if the original has spaces or non-alphanumeric characters (except hyphens)
  return normalized !== nameWithoutExt && (/[\s\W]/.test(nameWithoutExt) && !/^[a-z0-9-]+$/i.test(nameWithoutExt))
}

// Check if a directory name needs normalization
function directoryNeedsNormalization(dirname) {
  const normalized = toKebabCase(dirname)
  // Only normalize directories with spaces, capitals, or special characters
  return normalized !== dirname && (/[\s\W]/.test(dirname) && !/^[a-z0-9-]+$/i.test(dirname))
}

// Ensure index file exists for a directory
function ensureIndexFile(dirPath, dirName) {
  const files = fs.readdirSync(dirPath)
  const hasIndex = files.some((f) => /^(index|readme)\.(md|mdx)$/i.test(f))
  if (!hasIndex) {
    const displayTitle = dirName
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase())

    const indexPath = path.join(dirPath, 'index.mdx')
    const content = `---\ntitle: ${displayTitle}\n---\n\n# ${displayTitle}\n\nThis folder contains the following pages.\n`
    fs.writeFileSync(indexPath, content, 'utf8')
    console.log(`📝 Created missing index.mdx in ${dirPath}`)
  }
}

// Process a single directory
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath, { withFileTypes: true })
  
  // First pass: rename directories that need normalization
  for (const item of items) {
    if (item.isDirectory() && directoryNeedsNormalization(item.name)) {
      const normalizedDirName = toKebabCase(item.name)
      const currentPath = path.join(dirPath, item.name)
      const normalizedPath = path.join(dirPath, normalizedDirName)
      
      if (!fs.existsSync(normalizedPath)) {
        console.log(`📁 Renaming directory: ${item.name} → ${normalizedDirName}`)
        fs.renameSync(currentPath, normalizedPath)
      }
    }
  }

  // Second pass: process all items (with updated names)
  const updatedItems = fs.readdirSync(dirPath, { withFileTypes: true })
  
  for (const item of updatedItems) {
    const fullPath = path.join(dirPath, item.name)
    
    if (item.isDirectory()) {
      // Ensure index file exists for this directory
      ensureIndexFile(fullPath, item.name)
      
      // Recursively process subdirectories
      processDirectory(fullPath)
    } else if (item.name.endsWith('.md') || item.name.endsWith('.mdx')) {
      // Rename files that need normalization
      if (needsNormalization(item.name)) {
        const nameWithoutExt = item.name.replace(/\.(md|mdx)$/, '')
        const extension = item.name.match(/\.(md|mdx)$/)[0]
        const normalizedFileName = toKebabCase(nameWithoutExt) + extension
        const normalizedFilePath = path.join(dirPath, normalizedFileName)
        
        if (!fs.existsSync(normalizedFilePath)) {
          console.log(`📄 Renaming file: ${item.name} → ${normalizedFileName}`)
          
          // Read original content and add proper front-matter/heading
          const originalContent = fs.readFileSync(fullPath, 'utf8')
          const displayTitle = nameWithoutExt
            .replace(/[-_]/g, ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase())
          
          const hasFrontMatter = originalContent.trim().startsWith('---')
          
          let normalizedContent
          if (hasFrontMatter) {
            const frontMatterRegex = /^---\n(.*?)\n---/s
            const match = originalContent.match(frontMatterRegex)
            
            if (match && !match[1].includes('title:')) {
              const newFrontMatter = `title: ${displayTitle}\n${match[1]}`
              normalizedContent = originalContent.replace(frontMatterRegex, `---\n${newFrontMatter}\n---`)
            } else {
              normalizedContent = originalContent
            }
          } else {
            normalizedContent = `---\ntitle: ${displayTitle}\n---\n\n# ${displayTitle}\n\n${originalContent}`
          }
          
          // Write content to new file and remove old one
          fs.writeFileSync(normalizedFilePath, normalizedContent, 'utf8')
          fs.unlinkSync(fullPath)
        }
      }
    }
  }
}

// Main execution
function main() {
  const pagesDir = path.join(__dirname, '..', 'pages')
  
  if (!fs.existsSync(pagesDir)) {
    console.error('Pages directory not found!')
    process.exit(1)
  }
  
  console.log('🔧 Normalizing file and directory names...')
  processDirectory(pagesDir)
  console.log('✅ File normalization complete!')
}

main() 