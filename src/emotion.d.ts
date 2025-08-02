// emotion.d.ts
import '@emotion/react'
import type { Windows95Theme } from './theme'

declare module '@emotion/react' {
  export interface Theme extends Windows95Theme {}
}
