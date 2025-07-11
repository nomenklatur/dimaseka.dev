'use client'

import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html'

import React from 'react'

export const LexicalRenderer = ({ data }: { data: SerializedEditorState }) => {
  const html = convertLexicalToHTML({ data })

  return (
    <div className='lexical-content' dangerouslySetInnerHTML={{ __html: html }} />
  )
}