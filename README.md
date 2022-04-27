# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

To install, you can use:

### `npm i devb0x-react-modal`

## Examples

Here you call the component with the props you want

    const [showModal, setShowModal] = useState(true)

    <Modal
        title={"This is the props.title value"}
        textMessage={"And now the props.textMessage value"}
        show={showModal}
        close={() => {setShowModal(false)}}
        padding={'10%'}
        closeBtn={true}
    />

We use the React.useState() with a boolean value for displaying or not the modal.  
The close function set it to false.  
The padding props setting up the padding style in percent.  
We can set closeBtn to false if we don't want it. In this case you only can close the modal by clicking to the background. Be sure to check the accessibility if you do..


## The Modal Component

```
import React, {Fragment, useCallback} from 'react'
import PropTypes from "prop-types"

import classes from './Modal.module.css'

function Modal(props) {
  const close = useCallback((e) => {
    e.stopPropagation()
    props.close()
  }, [props.close])

  return (
    <Fragment>
      {props.show &&
          <div>
            <div
              className={`${classes['background']}`}
              onClick={close}
              data-testid="background"
            />
            <div
            className={`${classes['modal']}`}
            style={{padding: props.padding}}
            data-testid={"modal"}
          >
            {props.closeBtn &&
              <header
                onClick={close}
                data-testid="close-icon"
              >
                <span
                  className={`${classes['modal-btn__close']}`}
                >
                  &times;
                </span>
              </header>
            }
            {props.title &&
              <h3
                className={`${classes['modal-title']}`}
                data-testid="title"
              >
                {props.title}
              </h3>
            }
            {props.textMessage &&
              <p className={`${classes['modal-text']}`} data-testid="message">
                {props.textMessage}
              </p>
            }
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

```
