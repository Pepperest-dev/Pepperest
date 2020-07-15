import React from "react";
import { PepperestContext } from "components/helpers/constant";

const EscapeCloseModalHelper = (props) => (
  // when users press the escape button, it closes the modal
  <PepperestContext.Consumer>
    {(context) =>
      document.addEventListener("keyup", (e) => {
        if (e.keyCode === 27) {
          context.updateShowProductModal(false);
          context.updateShowPaymentModal(false);
          context.updateShowEditProductModal(false);
        }
      })
    }
  </PepperestContext.Consumer>
);

export default EscapeCloseModalHelper;
