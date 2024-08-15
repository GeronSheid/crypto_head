import {fireEvent, render, screen} from '@testing-library/react';
import DropdownList from '../ui/DropdownList';

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
            const listItem_1 = screen.queryByText(mockData.items[0].label)
            const listItem_2 = screen.queryByText(mockData.items[1].label)
            const listItem_3 = screen.queryByText(mockData.items[2].label)
            expect(ul).toBeNull()
            expect(listItem_1).toBeNull()
            expect(listItem_2).toBeNull()
            expect(listItem_3).toBeNull()
        })

        
        it('Проверяем появление списка при клике', () => {
            const { container, debug } = render(
                <DropdownList
                    mainItem={mockData.mainItem}
                    items={mockData.items}
                />
            )
            const button = container.querySelector('button')
            if(button !== null) {
                fireEvent.click(button)
            }
            const ul = container.querySelector('ul')
            const listItem_1 = screen.queryByText(mockData.items[0].label)
            const listItem_2 = screen.queryByText(mockData.items[1].label)
            const listItem_3 = screen.queryByText(mockData.items[2].label)
            expect(ul).toBeInTheDocument()
            expect(listItem_1?.textContent).toBe(mockData.items[0].label)
            expect(listItem_2?.textContent).toBe(mockData.items[1].label)
            expect(listItem_3?.textContent).toBe(mockData.items[2].label)
        })
    })
