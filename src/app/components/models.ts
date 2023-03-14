export interface Item {
    item: string
    unitPrice: number
}

export interface LineItem extends Item{
    qty: number
}

export interface Customer {
    name: string
    address: string
    delivery: string
    cart: LineItem[]
}