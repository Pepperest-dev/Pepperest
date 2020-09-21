export {
	register,
	login,
	logout,
	authCheckState,
	socialLogin
}
from './auth';

export {
	loadPayments,
}
from './payments';

export {
	loadProduct,
	getFacebookPages,
	getPageData,
	publishSingleProduct,
	publishSingleSocialProduct,
	selectPage,
	updateProduct,
	removeProduct,
}
from './products';

export {
	loadCustomer,
}
from './customers';

export {
	loadOrders,
	getAddress,
	addAddress,
	editAddress,
	// deleteAddress
}
from './orders';

export {
	updateProfile,
	updateBankAccount,
	updateUserType,
	updateApiSetting,
	updateNotificationSetting,
	updatePassword
}
from './userAccount';

export {
	loadCustomerCart,
	addToCart,
	removeItemFromCart,
	productCheck
}
from './cart'

export {
	getMerchantStoreProducts,
}
from './merchant'

export {
	setAlert,
}
from './alert'
