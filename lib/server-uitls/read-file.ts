import * as fs from 'fs/promises'

/**
 * 异步读取文件内容
 * @param filePath 文件路径
 * @returns Promise<string> 文件内容
 */
export async function readFile(filePath: string): Promise<string> {
  try {
    return await fs.readFile(filePath, 'utf8')
  } catch (error) {
    throw new Error(`Error reading file: ${filePath}. Error: ${error}`)
  }
}
