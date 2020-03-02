import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

const PlaceholderImage = ({ width, height, className, ...props }) => (
  <svg className={styles.placeholder} width={width} height={height} viewBox='0 0 90 50' >
    <path className={styles.placeholderPath} style={{ stroke: 'none', fillRule: 'evenodd', fill: 'rgb(76, 76, 76)', fillOpacity: 1 }} d='M 7.296875 38.5 L 7.296875 5 C 7.296875 4.675781 7.734375 4.410156 8.273438 4.410156 L 81.726562 4.410156 C 82.265625 4.410156 82.699219 4.671875 82.703125 5 L 82.703125 25.335938 L 64.710938 15 L 42.449219 35.40625 L 25.003906 30.183594 Z M 0.972656 0 C 0.433594 0 0 0.261719 0 0.589844 L 0 49.410156 C 0 49.738281 0.429688 50 0.972656 50 L 89.027344 50 C 89.566406 50 90 49.738281 90 49.410156 L 90 0.589844 C 90 0.261719 89.570312 0 89.027344 0 Z M 24.8125 21.175781 C 30.183594 21.175781 34.539062 18.476562 34.539062 15.148438 C 34.539062 11.816406 30.183594 9.117188 24.8125 9.117188 C 19.4375 9.117188 15.082031 11.816406 15.082031 15.148438 C 15.082031 18.476562 19.4375 21.175781 24.8125 21.175781 Z M 24.8125 21.175781' />
  </svg>
)

PlaceholderImage.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string
}

PlaceholderImage.defaultProps = {
  width: 90,
  height: 50
}

export default PlaceholderImage
