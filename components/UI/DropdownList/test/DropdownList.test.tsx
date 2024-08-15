import {fireEvent, getByRole, render, screen, waitFor} from '@testing-library/react';
import DropdownList from '../ui/DropdownList';
import { mock } from 'node:test';

const mockData = {
    isLoading: false,
    mainItem: {label: 'main', path: '/main'},
    items: [
        {label: '1', path: '/1'},
        {label: '2', path: '/2'},
        {label: '3', path: '/3'},
    ]
}

    describe('Тесты для DropdownList', () => {
        it('Отрисовка элемента', () => {
            const { container, debug } = render(
                <DropdownList
                    mainItem={mockData.mainItem}
                    items={mockData.items}
                />
            )
            const element = screen.getByText(mockData.mainItem.label)
            expect(element).toBeInTheDocument();
        })


        it('Проверка, что список не отрисовывается, пока он не активен', () => {
            const { container, debug } = render(
                <DropdownList
                    mainItem={mockData.mainItem}
                    items={mockData.items}
                />
            )
            const ul = container.querySelector('ul')

            expect(ul).toBeNull()
            mockData.items.forEach(item => {
                expect(screen.queryByText(item.label)).toBeNull()
            })
        })

        
        it('Проверяем появление списка при клике', () => {
            const { container, debug } = render(
                <DropdownList
                    mainItem={mockData.mainItem}
                    items={mockData.items}
                />
            )
            const button = screen.getByRole('button')
            fireEvent.click(button)

            const ul = screen.getByRole('list')
            
            expect(ul).toBeInTheDocument()
            mockData.items.forEach(item => {
                expect(screen.queryByText(item.label)?.innerHTML).toBe(item.label)
            })
        })

        it('Проверим, что при повторном клике список закрывается', async () => {
            const { container, debug } = render(
                <DropdownList
                    mainItem={mockData.mainItem}
                    items={mockData.items}
                />
            )
            const button = await screen.findByRole('button')
            fireEvent.click(button)
            let ul = await screen.findByRole('list')
            fireEvent.click(button)
            setTimeout(async () => {
                ul = await screen.findByRole('list')
                expect(ul).toBeNull()
            }, 2000)
            
        })
    })
