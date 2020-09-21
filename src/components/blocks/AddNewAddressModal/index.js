/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {useState} from "react";
import { CloseIcon } from "components/vectors";
import { InputWithoutLabel, SelectInputWithoutLabel } from "components/blocks";
import EscapeCloseModalHelper from "components/helpers/EscapeCloseModalHelper";

const AddNewAddressModal = (props) => {
  const {
    context, addAddress
  } = props

  const [street_1, setStreet_1] = useState("")
  const [street_2, setStreet_2] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("Lagos")
  const [postal_code, setPostal_code] = useState("")
  const [country_id, setCountry_id] = useState(127)
  const [phone, setPhone] = useState("")

  const add = (event) => {
    event.preventDefault()
    const extraParams = {
      street_1, street_2, city, state, postal_code, country_id, phone
    }
    addAddress(extraParams)
    context.updateShowAddNewAddressModal(false)
  }

  return (
  <>
    <div className="pModal">
      <div className="pModal-overlay" />
      <div className="pModal-content pModal-midcontent">
        <form onSubmit={add}>
        <div className="pModal-header pModal-border-bottom">
          <h6 className="text--small">Add New Address</h6>
          <div onClick={() => context.updateShowAddNewAddressModal(false)}>
            <CloseIcon />
          </div>
        </div>
        <div className="pModal-main">
          <div className="pModal-form">
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label className="pModal-form__label">Phone Number</label>
                </div>
              </div>
              <div className="col-md-7">
                <InputWithoutLabel
                  required
                  name="phone_number"
                  type="number"
                  placeholder="Enter Tour Phone Number"
                  id="phone_number"
                  value={phone}
                  defaultValue=""
                  onChange={(event) => {setPhone(event.target.value)}}
                  classNames="nsForm-input__alternate"
                />
              </div>
            </div>
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label className="pModal-form__label">Street</label>
                </div>
              </div>
              <div className="col-md-7">
                <InputWithoutLabel
                  required
                  name="street"
                  type="text"
                  placeholder=""
                  id="street"
                  value={street_1}
                  onChange={(event) => {setStreet_1(event.target.value)}}
                  classNames="nsForm-input__alternate"
                />
              </div>
            </div>
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label className="pModal-form__label">City</label>
                </div>
              </div>
              <div className="col-md-7">
                <InputWithoutLabel
                  name="city"
                  required
                  type="text"
                  placeholder="Enter City"
                  id="city"
                  value={city}
                  onChange={(event) => {setCity(event.target.value)}}
                  classNames="nsForm-input__alternate"
                />
              </div>
            </div>
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label className="pModal-form__label">Postal Code</label>
                </div>
              </div>
              <div className="col-md-7">
                <InputWithoutLabel
                  name="postal_code"
                  required
                  type="text"
                  placeholder="Enter postal code"
                  id="postal_code"
                  value={postal_code}
                  onChange={(event) => {setPostal_code(event.target.value)}}
                  classNames="nsForm-input__alternate"
                />
              </div>
            </div>
            <div className="pModal-form-control row mx-0">
              <div className="col-md-5">
                <div className="pModal-form__label-control">
                  <label className="pModal-form__label">State</label>
                </div>
              </div>
              <div className="col-md-7">
                <SelectInputWithoutLabel
                  options={[
                    {value:'Lagos', label:"Lagos"},
                    {value:'Rivers', label:"Rivers"},
                    {value:'Abuja', label:"Abuja"},
                  ]}
                  name="state"
                  id="state"
                  value={state}
                  onChange={(event) => {setState(event.target.value)}}
                  defaultValue="Lagos"
                  classNames="nsForm-select__alternate"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pModal-footer pModal-border-top">
          <div
            className="button button--auto button-md button--neutral"
            onClick={() => context.updateShowAddNewAddressModal(false)}
            >
            CANCEL
          </div>
          <button type="submit" className="button button-md button--orange">
            ADD NEW ADDRESS
            {/* <SpinnerIcon /> */}
          </button>
        </div>
      </form>
      </div>
    </div>
    <EscapeCloseModalHelper />
  </>
);}

export default AddNewAddressModal;
