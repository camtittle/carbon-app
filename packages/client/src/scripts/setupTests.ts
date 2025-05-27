import { setupServer } from 'msw/node'
import { beforeAll, afterAll } from 'vitest'
import '@testing-library/jest-dom'

export const server = setupServer()

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())