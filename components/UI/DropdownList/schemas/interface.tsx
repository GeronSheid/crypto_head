export interface IDropdownList {
    mainItem: IDropdownItem
    items: IDropdownItem[]
    className?: string
    isLoading?: boolean
}

export interface IDropdownItem {
    label: string
    path: string
}