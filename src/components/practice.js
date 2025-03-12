import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './practice.css'

const Practice = (props) => {
  return (
    <div className="practice-practice">
      <div className="practice-heading">
        <h3 className="practice-header">
          {props.header ?? (
            <Fragment>
              <span className="practice-text">Cardiology</span>
            </Fragment>
          )}
        </h3>
        <p className="practice-caption">{props.description}</p>
      </div>
    </div>
  )
}

Practice.defaultProps = {
  header: undefined,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
}

Practice.propTypes = {
  header: PropTypes.element,
  description: PropTypes.string,
}

export default Practice
