export default {
    ORDERS : '/EscrowBackend/api/myOrders',
    ADDRESS: '/EscrowBackend/api/order/buyerAddress',
    ADD_ADDRESS: '/EscrowBackend/api/order/buyerAddress/add',
    UPDATE_ADDRESS: '/EscrowBackend/api/order/buyerAddress/update'
}

export const PAGE_TYPES =
{
    DASHBOARD : 'Dashboard',
    ALL : 'All',
    PENDING : 'Pending',
    CANCELED : 'Canceled',
    SHIPPED : 'Shipped',
    DELIVERED : 'Delivered'
}

export const ErrorMessages =
{
    getHistoryFailed : "We are currently unable to get your orders data",
}
