import React, { forwardRef } from "react"
import p from "prop-types"
export const Paperclip = forwardRef(function Paperclip(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M21.44 11.05L12.25 20.24C11.1242 21.3658 9.59718 21.9983 8.005 21.9983C6.41282 21.9983 4.88584 21.3658 3.76 20.24C2.63416 19.1142 2.00166 17.5872 2.00166 15.995C2.00166 14.4028 2.63416 12.8758 3.76 11.75L12.95 2.56C13.7006 1.80943 14.7185 1.38777 15.78 1.38777C16.8415 1.38777 17.8594 1.80943 18.61 2.56C19.3606 3.31056 19.7822 4.32854 19.7822 5.39C19.7822 6.45145 19.3606 7.46943 18.61 8.22L9.41 17.41C9.03472 17.7853 8.52573 17.9961 7.995 17.9961C7.46427 17.9961 6.95528 17.7853 6.58 17.41C6.20472 17.0347 5.99389 16.5257 5.99389 15.995C5.99389 15.4643 6.20472 14.9553 6.58 14.58L15.07 6.1"></path>
    </svg>
  )
})

Paperclip.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Paperclip.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Paperclip.displayName = "Paperclip"
