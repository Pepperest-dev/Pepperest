export default {
    ORDERS : '/EscrowBackend/api/myOrders',
    PLACE_ORDER : '/EscrowBackend/api/order/placeOrder',
    CONFIRM_ORDER : 'EscrowBackend/api/order/payment/callback',
    ADDRESS: '/EscrowBackend/api/order/buyerAddress',
    ADD_ADDRESS: '/EscrowBackend/api/order/buyerAddress/add',
    UPDATE_ADDRESS: '/EscrowBackend/api/order/buyerAddress/update',
    REMOVE_ADDRESS: '/EscrowBackend/api/order/buyerAddress/remove'
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
