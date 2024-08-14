import {render, screen} from '@testing-library/react';
import DropdownList from '../ui/DropdownList';
import { IDropdownList } from '../schemas/interface';
import styles from '../ui/style.module.scss';

const mockData = {
    isLoading: false,
    isActive: false,
    mainItem: {label: 'main', path: '/main'},
    items: [
        {label: '1', path: '/1'},
        {label: '2', path: '/2'},
        {label: '3', path: '/3'},
    ]
}

    describe('Тесты для DropdownList', () => {
        const { container } = render(
            <DropdownList
                mainItem={mockData.mainItem}
                items={mockData.items}
                isActive={mockData.isActive}
            />
        )


        it('Отрисовка элемента', () => {
            const element = screen.getByText(mockData.mainItem.label)
            expect(element).toBeInTheDocument();
        })


        it('Проверка, что лист не отрисовывается, пока он не активен', () => {
            const ul = container.querySelector('ul')
            const listItem_1 = screen.queryByText(mockData.items[0].label)
            const listItem_2 = screen.queryByText(mockData.items[1].label)
            const listItem_3 = screen.queryByText(mockData.items[2].label)
            if(!mockData.isActive) {
                expect(ul).toBeNull()
                expect(listItem_1).toBeNull()
                expect(listItem_2).toBeNull()
                expect(listItem_3).toBeNull()
            }
        })

        
    })
