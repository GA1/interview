import { average } from './stats-utils'
import { describe, expect, test } from 'vitest'

describe('stats-helpers', () => {
  test('average', () => {
    expect(average(2, 4)).toBe(3)
  })
})
