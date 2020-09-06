/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from 'store/actions/index';

import { SpinnerIcon } from 'components/vectors';

// const pages = [
//   {
//     access_token: 'EAAgBwNEpXTgBANnxeYlhoZCodUzRMZAGmmMP0hKZA8YJsXCZAxwOUa7gMb53XOjtjPoF4rIxbN0SUT3jCDJPWhaT83h7TpSf9R0iNQrlWhPRM6hUUpZBgHLIo97J4FX7ZBewMgFk6GsDofdHakQkOMRmBp2woTc4WDudP5GK32mQZDZD',
//     category: 'Clothing (Brand)',
//     category_list: [{
//       id: "2209",
//       name: "Clothing (Brand)" }],
//     id: '116089838957709',
//     name: 'Uncensored Wears',
//   },
//   {
//     access_token: 'EAAgBwNEpXTgBANnxeYlhoZCodUzRMZAGmmMP0hKZA8YJsXCZAxwOUa7gMb53XOjtjPoF4rIxbN0SUT3jCDJPWhaT83h7TpSf9R0iNQrlWhPRM6hUUpZBgHLIo9gFk6GsDofdHakQkOMRmBp2woTc4WDudP5GK32mQZDZD',
//     category: 'Clothing (Brand)',
//     category_list: [{
//       id: "2209",
//       name: "Clothing (Brand)" }],
//     id: '1168957709',
//     name: 'UnceWears',
//   }
// ]



const InstagramBusinessAccountsSelect = (props) => {
  const [selectedPage, setPage] = useState(null)

  const selectPage = () => {
    if (selectedPage) {
      const [selected] = props.pages.filter(page => page.id === selectedPage)
      props.onClick(selected);
    }
  }
  return (
  <div className="instagram-page__main instagram-page__main--alt">
    <div className="instagram-page__main--header">
      Select one instagram / facebook page
    </div>
    <ul className="instagram-page__main-list">
      { props.pages.map((page) => (
        <div className={`instagram-page__main-list-item ${selectedPage == page.id ? 'active' : ' '}`}
        key={page.id}>
          {/* <li item key={page.id} className={`instagram-page__main-list-item`} > */}
            <input type="radio" name="instagram"
              onChange={(e) => setPage(e.target.value)}
              id={page.name}
              value={page.id}
              checked={selectedPage == page.id}
              />
            <label htmlFor={page.name}> {page.name}</label>
            {/* </li> */}
          </div>
        ))}
    </ul>
    {/* <ul className="instagram-page__main-list">
      <div className="instagram-page__main-list-item">
        <input type="radio" id="instagramA" name="instagram" />
        <label htmlFor="instagramA"> Instagram A</label>
      </div>
      <div className="instagram-page__main-list-item active">
        <input type="radio" id="instagramB" name="instagram" checked />
        <label htmlFor="instagramB">Instagram B</label>
      </div>
      <div className="instagram-page__main-list-item">
        <input type="radio" id="instagramC" name="instagram" />
        <label htmlFor="instagramC">Instagram C</label>
      </div>
      <div className="instagram-page__main-list-item">
        <input type="radio" id="instagramD" name="instagram" />
        <label htmlFor="instagramD">Instagram D</label>
      </div>
    </ul> */}
    <div className="instagram-page__main--footer">
      <div className="button button-md button--neutral">CANCEL</div>
      <div disabled className="button button-md button--orange" onClick={() => selectPage()}>FETCH PRODUCTS</div>
    </div>
  </div>
)}

InstagramBusinessAccountsSelect.propTypes = {
  onClick: PropTypes.func.isRequired,
  pages: PropTypes.array,
  getPage: PropTypes.func
};

const mapStateToProps = state => {
  return {
    loading: state.products.loading,
    pages: state.products.pages
  }
}

export default connect(mapStateToProps)(InstagramBusinessAccountsSelect);
