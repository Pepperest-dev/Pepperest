/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {useState, useEffect, useRef} from "react";
import { withDefaultLayout } from "components/layouts";
import { getStringHash } from "libs/utils";
import { LockIcon } from "components/vectors";
import { PepperestContext } from "components/helpers/constant";
import { Link } from "react-router-dom";
// import {
//   CloseIcon,
//   RightChevron,
//   CalendarIcon,
//   SpinnerIcon,
// } from "components/vectors";
import {
  InputWithoutLabel,
  SelectInputWithoutLabel,
  TextArea,
} from "components/blocks";
// import { PepperestContext } from "components/helpers/constant";
import EscapeCloseModalHelper from "components/helpers/EscapeCloseModalHelper";
import { connect } from "react-redux";
import * as actions from 'store/actions/index';
// import {useReactToPrint} from "react-to-print";
var numeral = require('numeral')

const config = {
  hasAlternateHeader: false,
  hasCommonHeader: true,
  showCart: false,
  commonHeaderTitle: "Customer Invoice",
  links: [],
  page: "invoice",
  isSettings: true,
  navBarTitle: "Create Customer Invoice",
};
const InvoicePage = ({
  user, token, storeProducts,
  addresses, load, createInvoice,
  setAlert }) => {
  const [addressLine1, setAL1] = useState("")
  const [addressLine2, setAL2] = useState("")
  const [addressLine3, setAL3] = useState("")
  const [customerEmail, setCE] = useState("")
  const [customerName, setCN] = useState("")
  const [phoneNumber, setPhone] = useState("")
  const [tax, setTax] = useState(7.5)
  const [productName, setPN] = useState("")
  const [deliveryPeriod, setDP] = useState("")
  const [productDescription, setPD] = useState("")
  const [productQuantity, setPQ] = useState("")
  const [productPrice, setPP] = useState("")
  const [products, setProducts] = useState([])
  const [userAddress, setUA] = useState("")
  const [error, setErr] = useState(false)
  const [productError, setPErr] = useState(false)
  // const [productz, setProductz] = useState("");
  const pepperestFees = 2.5
  const date = new Date();

  useEffect(() => {
    load(token, user)
  },[])

  const handleChangeSelectProducts = (event) => {
    // setProductz(event.target.value);
    const [p] = storeProducts.filter(x => x.id == event.target.value)
    // const [q] = products.filter(x => x.name === p.productName)
    var indexOfq = products.findIndex(i => i.name === p.productName);
    if (indexOfq < 0) {
      const product = {
        name: p.productName,
        des: p.productDescription,
        price: p.amount,
        quantity: 1,
      }
      setProducts([...products, product])
      setAlert('Product added to invoice', 'success', getStringHash())
    } else {
      const q = products[indexOfq]
      q.quantity += 1
      let np = [...products]
      np[indexOfq] = q
      setProducts(np)
      setAlert('Product added to invoice', 'success', getStringHash())
    }
  };

  const [address] = addresses.filter(a => a.address_id == userAddress)
  const add = () => {
    if (productName, productDescription, productQuantity, productPrice) {
      const product = {
        name: productName,
        des: productDescription,
        quantity: productQuantity,
        price: productPrice
      }
      setProducts([...products, product])
      setPN("")
      setPD("")
      setPQ("")
      setPP("")
      setAlert('Product added to invoice', 'success', getStringHash())
      setPErr(false)
    } else {
      setPErr(true)
      setAlert('Please complete the Product form', 'error', getStringHash())
    }
  }
  const componentRef = useRef();
  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  // });
  // const handlePrint = () => {
  //   console.log("print")
  // }
  const remove = (i) => {
    let p = [...products]
    p.splice(i, 1)
    setProducts(p)
    setAlert('Product removed from invoice', 'success', getStringHash())
  }


  const calcTotal = () => {
    let total = 0
    for ( var i = 0, _len = products.length; i < _len; i++ ) {
      total += (products[i].quantity * products[i].price)
    }
    return total
  }
  const amount = () => {
    let total = calcTotal() * ((tax + pepperestFees + 100)/100)
    return numeral(total).format('0,0.00')
  }

  const AlertCloseIcon = ({ className, onClick }) => (
    <svg
      xm0lns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
      onClick={() => { onClick(); }}
    >
      <path
        fill="#FF721B"
        d="M12 0c6.624.008 11.992 5.376 12 12 0 6.628-5.372 12-12 12S0 18.628 0 12 5.372 0 12 0zm0 1.5C6.201 1.5 1.5 6.201 1.5 12S6.201 22.5 12 22.5c5.796-.006 10.494-4.704 10.5-10.5 0-5.799-4.701-10.5-10.5-10.5zM6.166 6.148c.298-.288.773-.28 1.061.018L12 10.94l4.773-4.773c.293-.292.768-.292 1.06 0 .293.293.293.768 0 1.061L13.062 12l4.772 4.773c.281.29.281.751 0 1.042-.287.298-.762.306-1.06.019L12 13.06l-4.792 4.79c-.297.289-.772.28-1.06-.017-.288-.299-.28-.773.018-1.061L10.94 12 6.166 7.227l-.018-.019c-.288-.297-.28-.772.018-1.06z"
      />
    </svg>
  );
  const submit = () => {
    if (
      products.length &&
      address &&
      addressLine1 &&
      addressLine2 &&
      customerEmail &&
      phoneNumber &&
      customerName &&
      tax &&
      deliveryPeriod
    ){
      const extraParams = {
      userAddress: address.address,
      addressLine_1: addressLine1,
      addressLine_2: addressLine2,
      addressLine_3: addressLine3,
      customerEmail: customerEmail,
      customerPhone: phoneNumber,
      customerName: customerName,
      totalcost: calcTotal() * ((tax + pepperestFees + 100)/100),
      deliveryPeriod: deliveryPeriod,
      vat:calcTotal() * (tax/100),
      products: products,
      currency: "NGN",
      pepperest_fee: calcTotal() * (pepperestFees/100)
      }
      createInvoice(token, user, extraParams)
      setErr(false)
    } else if (products.length === 0){
      setAlert('Select/Add product to invoice', 'error', getStringHash())
    } else if (!address){
      setAlert('Please select an address', 'error', getStringHash())
    } else {
      setAlert('Please Fill out all Invoice Data Fields', 'error', getStringHash())
      setErr(true)
    }
  }

  return (
  <>
    <div className="invoice">
      <div className="row">

      <div className="pModal-main">
      <form  className="pModal-form">
        <div style={{display: 'flex'}}>
        <div className="spanex" style={{display: 'inline'}} >
          <div className="pModal-main__notification text--small">
            Invoice Data
          </div>
          <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label htmlFor="billedto" className="pModal-form__label">
                    Customer Name
                  </label>
                </div>
              </div>
              <div className="col-md-7">
                <InputWithoutLabel
                  name="customerName"
                  type="text"
                  placeholder=""
                  id="customerName"
                  required
                  value={customerName}
                  onChange={e => setCN(e.target.value)}
                  classNames="nsForm-input__alternate"
                  errorMessage={error && !customerName ? "required" : ""}
                />
              </div>
            </div>
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label htmlFor="billedto" className="pModal-form__label">
                    Billed to address Line 1
                  </label>
                </div>
              </div>
              <div className="col-md-7">
                <InputWithoutLabel
                  name="addressLine1"
                  type="text"
                  placeholder=""
                  id="addressLine1"
                  required
                  value={addressLine1}
                  onChange={e => setAL1(e.target.value)}
                  classNames="nsForm-input__alternate"
                  errorMessage={error && !addressLine1 ? "required" : ""}
                />
              </div>
            </div>
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label htmlFor="billedto" className="pModal-form__label">
                    Billed to address Line 2
                  </label>
                </div>
              </div>
              <div className="col-md-7">
                <InputWithoutLabel
                  name="addressLine2"
                  type="text"
                  placeholder=""
                  id="addressLine2"
                  value={addressLine2}
                  onChange={e => setAL2(e.target.value)}
                  errorMessage={error && !addressLine2 ? "required" : ""}
                  classNames="nsForm-input__alternate"
                />
              </div>
            </div>


            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label htmlFor="email" className="pModal-form__label">
                    Customer Email Address
                  </label>
                </div>
              </div>
              <div className="col-md-7">
                <InputWithoutLabel
                  name="email"
                  type="email"
                  placeholder=""
                  id="email"
                  required
                  value={customerEmail}
                  onChange={e => setCE(e.target.value)}
                  errorMessage={error && !customerEmail ? "required" : ""}
                  classNames="nsForm-input__alternate"
                />
              </div>
            </div>
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label htmlFor="customer_phone" className="pModal-form__label">
                    Phone Number
                  </label>
                </div>
              </div>
              <div className="col-md-7">
                <InputWithoutLabel
                  name="customer_phone"
                  type="tel"
                  placeholder=""
                  required
                  id="customer_phone"
                  value={phoneNumber}
                  onChange={e => setPhone(e.target.value)}
                  errorMessage=""
                  classNames="nsForm-input__alternate"
                />
              </div>
            </div>
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label htmlFor="customer_phone" className="pModal-form__label">
                    VAT Rate
                  </label>
                </div>
              </div>
              <div className="col-md-7">
                <InputWithoutLabel
                  name="tax"
                  type="number"
                  placeholder=""
                  id="customer_phone"
                  value={tax}
                  required
                  onChange={e => setTax(e.target.value)}
                  errorMessage={error && !tax ? "required" : ""}
                  classNames="nsForm-input__alternate"
                />
              </div>
            </div>
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label htmlFor="customer_phone" className="pModal-form__label">
                    Delivery Period
                  </label>
                </div>
              </div>
              <div className="col-md-7">
                <InputWithoutLabel
                  name="deliveryPeriod"
                  type="number"
                  placeholder=""
                  id="deliveryPeriod"
                  required
                  value={deliveryPeriod}
                  onChange={e => setDP(e.target.value)}
                  errorMessage={error && !deliveryPeriod ? "required" : ""}
                  classNames="nsForm-input__alternate"
                />
              </div>
            </div>
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label htmlFor="currency" className="pModal-form__label">
                    Your Address
                  </label>
                </div>
              </div>
              <div className="col-md-7">
                {addresses?.length > 0 && addresses.map(address => (
                  <div className="flex-content" key={getStringHash()}>
                    <div className="flex-content_child">
                      <label className="radio-container">
                        <input type="radio"
                          value={address.address_id}
                          checked={userAddress == address.address_id}
                          onChange={event => setUA(event.target.value)}
                          name="radio" />
                        <span className="radio-checkmark"></span>
                          </label>
                          <p style={{marginLeft: '3em'}} className="text--smaller text--gray ml-10">
                            {`${address.address}`}
                          </p>
                        </div>
                  </div>
                ))
              }
              </div>
              </div>
            </div>


            <div style={{marginLeft:'20px'}}>
              <div className="pModal-main__notification text--small">
                Product Data
              </div>
              <div className="pModal-main__notification text--smallest">
                Select products from store to add to invoice
              </div>
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label htmlFor="product" className="pModal-form__label">
                    Add Product From Store
                  </label>
                </div>
              </div>
              <div className="col-md-7">
                <select  style={{width:'100%', height: '50px'}} className="nsForm-select__alternate" value={products} onChange={handleChangeSelectProducts}  >
                    <option style={{width:'fit-content', height: '50px'}} value={0}> Select Product </option>
                  {storeProducts.map((productItem) => (
                    <option  style={{width:'fit-content', height: '50px'}} key={productItem.id} value={productItem.id}> {productItem.productName} </option>
                  ))}
                </select>
              </div>
            </div>
            <hr />
              <div className="pModal-main__notification text--smallest">
                Enter details for product not in store to be added to Invoice
              </div>
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label htmlFor="product" className="pModal-form__label">
                    Product
                  </label>
                </div>
              </div>
              <div className="col-md-7">
                <InputWithoutLabel
                  name="product"
                  type="text"
                  placeholder=""
                  id="product"
                  required
                  value={productName}
                  onChange={e => setPN(e.target.value)}
                  errorMessage={productError && !productName ? "required" : ""}
                  classNames="nsForm-input__alternate"
                />
              </div>
            </div>



            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label className="pModal-form__label">
                    Describe Item / Service
                  </label>
                </div>
              </div>
              <div className="col-md-7">
                <TextArea name="description"
                  value={productDescription}
                  errorMessage={productError && !productDescription ? "required" : ""}
                  onChange={e => setPD(e.target.value)} />
              </div>
            </div>

            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label htmlFor="cost_item" className="pModal-form__label">
                    Cost of Item
                  </label>
                </div>
              </div>
              <div className="col-md-7">
                <InputWithoutLabel
                  name="cost_item"
                  type="number"
                  placeholder=""
                  id="cost_item"
                  required
                  value={productPrice}
                  onChange={e => setPP(e.target.value)}
                  errorMessage={productError && !productPrice ? "required" : ""}
                  classNames="nsForm-input__alternate"
                />
              </div>
            </div>
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label htmlFor="quantity" className="pModal-form__label">
                    Quantity
                  </label>
                </div>
              </div>
              <div className="col-md-7">
                <InputWithoutLabel
                  name="quantity"
                  type="number"
                  placeholder=""
                  required
                  id="quantity"
                  value={productQuantity}
                  onChange={e => setPQ(e.target.value)}
                  errorMessage={productError && !productQuantity ? "required" : ""}
                  classNames="nsForm-input__alternate"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pModal-footer">
          <div className="button button--auto button-md button--orange" onClick={add}>
            + ITEM
          </div>
        </div>
      </form>
      </div>



        <div ref={componentRef} className="col-12 col-lg-12">

          <div className="invoice-card">
            <div className="invoice-header">
              <img
                className="pepperest-logo"
                src="https://res.cloudinary.com/dlfltairk/image/upload/v1595847163/hornblower/pepperest-logo-white_2x.png"
                alt="pepperest logo"
              />
              <div className="details-container">
                <div className="invoice-userdetails">
                  <p>{user?.phone}</p>
                  <p>{user?.email}</p>
                </div>
                <div className="invoice-address">
                  {address ?
                    (<><p>{address.street_1}</p>
                    <p>{address.street_2}</p>
                    <p>{address.city}</p>
                    <p>{address.state}</p>
                    <p></p></>):
                    (<p>Select your address</p>)}
                </div>
              </div>
            </div>
            <div className="invoice-subcontent">
              <div className="subcontent-address">
                <div className="billed-to">
                  <p className="grey-format" >Billed To</p>
                  <p style={{width: 'max-content'}}>Customer Name: {customerName}</p>
                  <p style={{width: 'max-content'}}>Address: {addressLine1}</p>
                  <p style={{width: 'max-content'}}>Address 2: {addressLine2}</p>
                </div>
                <div className="invoice-number" style={{marginLeft: '200px'}}>
                  <p className="grey-format">Invoice Number</p>
                  <p>{getStringHash()}</p>
                  <p className="grey-format">Date of Issue</p>
                  <p>{date.toLocaleDateString()}</p>
                </div>
              </div>
              <div className="invoice-total">
                <p className="grey-format">Invoice Total</p>
                  {/* <p>N{calcTotal() * ((tax + pepperestFees + 100)/100)}</p> */}
                  <p>N{amount()}</p>
              </div>
            </div>
            <div className="invoice-content">
              <div className="item-header">
                <p>Description</p>
                <div className="item-unit">
                  <p>Quantity</p>
                  <p>Unit Cost</p>
                  <p>Amount</p>
                </div>
              </div>
              <div className="item-container">
                {products.length > 0 && products.map((item, index) =>
                (<div key={getStringHash()} className="item-content">
                  <div className="item-content-description col-md-5">
                    <div className="col-md-3" style={{maxWidth:'100%'}}>
                      <p><strong>{item.name}</strong></p>
                      <p>{item.des}</p>
                      <AlertCloseIcon onClick={(index) => remove(index)} className="alert-icon"/>
                    </div>

                  </div>
                  <div className="item-content-children">
                    <p className="item-quantity">{item.quantity}</p>
                    <p className="item-cost">N{item.price}</p>
                    <p className="item-amount">N{item.quantity * item.price}</p>
                  </div>
                </div>))}
              </div>
              <div className="total-items">
                <div className="total-items-container">
                  <div className="total-items-content">
                    <p>Subtotal</p>
                    <p>N{calcTotal()}</p>
                  </div>
                  <div className="total-items-content">
                    <p>Tax</p>
                    <p>N{numeral(calcTotal() * tax/100).format('0,0.00')}</p>
                  </div>
                  <div className="total-items-content">
                    <p>Pepperest Fees</p>
                    <p>N{numeral(calcTotal() * pepperestFees/100).format('0,0.00')}</p>
                  </div>
                  <div className="total-items-content">
                    <p>Total</p>
                    {/* <p>N{calcTotal() * ((tax + pepperestFees + 100)/100)}</p> */}
                    <p>N{amount()}</p>
                  </div>
                  <div className="total-items-content mt-20">
                    <p>Amount Due(Naira)</p>
                      {/* <p>N{calcTotal() * ((tax + pepperestFees + 100)/100)}</p> */}
                      <p>N{amount()}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="invoice-footer">
              <div className="invoice-footer-child">
                {/* <div className="button button--auto button-md button--orange" >
                  Download
                </div> */}
                <button
                  onClick={submit}
                  className="button button--auto button-md button--orange ml-15">
                  Send Via Email
                </button>
              </div>
                <div className="pModal-main__notification text--smallest">
                  A payment link would be created and sent to the customer email
                  address
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)}

const mapStateToProps = (state) => {
  return {
    user: state.auth.userInfo,
    token: state.auth.token,
    storeProducts: state.products.products,
    addresses: state.orders.addresses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    load: (token, user, extraParams) => dispatch(actions.loadProductsAndAddress(token, user, extraParams)),
    createInvoice: (token, user, extraParams) => dispatch(actions.createInvoice(token, user, extraParams)),
    setAlert: (message, type, id) => dispatch( actions.setAlert(message, type, id))
  }
}

export default withDefaultLayout(connect(mapStateToProps, mapDispatchToProps)(InvoicePage), config);
