import {render, screen} from '@testing-library/react'
import { describe } from 'node:test'
import {Navigation} from '../index.ts'

describe('Тесты Navigation', () => {
    it('Проверим отрисовку', async () => {
        render(
            <Navigation/>
        )
        const nav = await screen.findByRole('navigation')
        expect(nav).toBeInTheDocument()
    })
})