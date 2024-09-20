// @vitest-environment node

import * as fs from 'fs/promises'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { readFile } from './read-file'

vi.mock('fs/promises')

describe('readFile function', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('should read file content successfully', async () => {
    const mockContent = 'This is the file content'
    const mockPath = '/path/to/file.txt'

    vi.mocked(fs.readFile).mockResolvedValue(mockContent)

    const result = await readFile(mockPath)

    expect(result).toBe(mockContent)
    expect(fs.readFile).toHaveBeenCalledWith(mockPath, 'utf8')
  })

  it('should throw an error when file reading fails', async () => {
    const mockPath = '/path/to/nonexistent/file.txt'
    const mockError = new Error('File not found')

    vi.mocked(fs.readFile).mockRejectedValue(mockError)

    await expect(readFile(mockPath)).rejects.toThrow(
      `Error reading file: ${mockPath}. Error: ${mockError}`,
    )
  })
})
