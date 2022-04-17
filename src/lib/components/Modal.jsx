import React, {Fragment} from 'react'
import PropTypes from "prop-types"

import classes from './Modal.module.css'

function Modal(props) {

  return (
    <Fragment>
      {props.show &&
        <div
          className={`${classes['background']}`}
          onClick={props.close}
          data-testid="background"
        >
          <div
            className={`${classes['modal']}`}
            style={{padding: props.padding}}
            data-testid={"modal"}
          >
            {props.closeBtn}
            {!props.closeBtn &&
              <header
                className={`${classes['modal-btn__close']}`}
                onClick={props.close}
                data-testid="close-icon"
              >
                <span
                  className={`${classes['x']}`}
                >
                  &times;
                </span>
              </header>
            }
            <h3
              className={`${classes['modal-title']}`}
              data-testid="title"
            >
              {props.title}
            </h3>
            <p className={`${classes['modal-text']}`} data-testid="message">
              {props.textMessage}
            </p>
          </div>
        </div>
      }
    </Fragment>
  )
}

export default Modal

Modal.propTypes = {
  show: PropTypes.bool,
  close: PropTypes.func,
  padding: PropTypes.string,
  title: PropTypes.string,
  textMessage: PropTypes.string
}
