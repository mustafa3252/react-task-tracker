import React from 'react';
import PropTypes from 'prop-types';


const Button = ({title}) => {

    const onClick = () => {
        console.log('click')
    }


  return (
    <button onClick = {onClick}className='btn'>Add</button>
  )
}

Button.defaultProps = {
    title: 'Add',
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Button

