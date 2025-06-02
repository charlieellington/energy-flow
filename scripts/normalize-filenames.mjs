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

// Process a single directory
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath, { withFileTypes: true })
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item.name)
    
    if (item.isDirectory()) {
      // Recursively process subdirectories
      processDirectory(fullPath)
      
      // Check if directory name needs normalization
      const normalizedDirName = toKebabCase(item.name)
      if (normalizedDirName !== item.name && normalizedDirName) {
        const normalizedDirPath = path.join(dirPath, normalizedDirName)
        
        // Create normalized directory if it doesn't exist
        if (!fs.existsSync(normalizedDirPath)) {
          console.log(`📁 Creating normalized directory: ${normalizedDirName}`)
          fs.mkdirSync(normalizedDirPath, { recursive: true })
          
          // Copy all contents to normalized directory
          const copyDir = (src, dest) => {
            const items = fs.readdirSync(src, { withFileTypes: true })
            for (const item of items) {
              const srcPath = path.join(src, item.name)
              const destPath = path.join(dest, item.name)
              
              if (item.isDirectory()) {
                fs.mkdirSync(destPath, { recursive: true })
                copyDir(srcPath, destPath)
              } else {
                fs.copyFileSync(srcPath, destPath)
              }
            }
          }
          
          copyDir(fullPath, normalizedDirPath)
        }
      }
    } else if (item.name.endsWith('.md') || item.name.endsWith('.mdx')) {
      // Process markdown files
      const nameWithoutExt = item.name.replace(/\.(md|mdx)$/, '')
      const extension = item.name.match(/\.(md|mdx)$/)[0]
      const normalizedFileName = toKebabCase(nameWithoutExt)
      
      if (normalizedFileName !== nameWithoutExt && normalizedFileName) {
        const normalizedFilePath = path.join(dirPath, normalizedFileName + extension)
        
        // Create normalized file if it doesn't exist
        if (!fs.existsSync(normalizedFilePath)) {
          console.log(`📄 Creating normalized file: ${normalizedFileName + extension}`)
          
          // Read original file content
          const originalContent = fs.readFileSync(fullPath, 'utf8')
          
          // Extract original title from filename (for display)
          const displayTitle = nameWithoutExt
            .replace(/[-_]/g, ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase())
          
          // Check if file already has front-matter
          const hasFrontMatter = originalContent.trim().startsWith('---')
          
          let normalizedContent
          if (hasFrontMatter) {
            // If it has front-matter, ensure it has the correct title
            const frontMatterRegex = /^---\n(.*?)\n---/s
            const match = originalContent.match(frontMatterRegex)
            
            if (match && !match[1].includes('title:')) {
              // Add title to existing front-matter
              const newFrontMatter = `title: ${displayTitle}\n${match[1]}`
              normalizedContent = originalContent.replace(frontMatterRegex, `---\n${newFrontMatter}\n---`)
            } else if (match && match[1].includes('title:')) {
              // Keep existing title
              normalizedContent = originalContent
            } else {
              // Add front-matter if regex didn't match
              normalizedContent = `---\ntitle: ${displayTitle}\n---\n\n${originalContent}`
            }
          } else {
            // Add front-matter and heading
            normalizedContent = `---\ntitle: ${displayTitle}\n---\n\n# ${displayTitle}\n\n${originalContent}`
          }
          
          // Write normalized file
          fs.writeFileSync(normalizedFilePath, normalizedContent, 'utf8')
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