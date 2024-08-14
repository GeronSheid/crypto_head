import {render, screen} from '@testing-library/react'
import {Navigation} from '../'

describe('Тесты Navigation', () => {
    it('Проверим отрисовку', async () => {
        render(
            <Navigation/>
        )
        const nav = await screen.findByRole('navigation')
        expect(nav).toBeInTheDocument()
    })
})