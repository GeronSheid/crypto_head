export interface IDropdownList {
    isLoading?: boolean
    isActive: boolean
    mainItem: IDropdownItem
    items: IDropdownItem[]
}

export interface IDropdownItem {
    label: string
    path: string
}