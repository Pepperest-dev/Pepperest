export default {
	PRODUCTS: '/EscrowBackend/api/myProducts',
	GET_INFO: '/EscrowBackend/api/product/social/getInfo',
	GET_PAGE_PRODUCTS: '/EscrowBackend/api/product/social/pageProducts',
	PUBLISH_SINGLE_PRODUCT: '/EscrowBackend/api/product/add',
	PUBLISH_SINGLE_SOCIAL_PRODUCT: '/EscrowBackend/api/product/social/publishSingleProducts',
	UPDATE_PRODUCT: '/EscrowBackend/api/product/update',
	REMOVE_PRODUCT: '/EscrowBackend/api/product/remove',
	MERCHANT_STORE: '/EscrowBackend/api/product/merchantStore',
	CREATE_INVOICE: '/EscrowBackend/api/invoice/create',
}

export const ErrorMessages = {
	getHistoryFailed: "We are currently unable to get your products data",
	getMerchantFailed: "Unable to fetch merchant products from store"
}
