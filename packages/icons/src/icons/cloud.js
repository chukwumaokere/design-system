import React, { forwardRef } from "react"
import p from "prop-types"
export const Cloud = forwardRef(function Cloud(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <g clip-path="url(#clip0)">
        <path d="M18 10H16.74C16.3659 8.551 15.5928 7.23599 14.5086 6.2044C13.4245 5.1728 12.0727 4.46599 10.6069 4.16428C9.14113 3.86256 7.6201 3.97804 6.21666 4.49759C4.81322 5.01714 3.58364 5.91993 2.66766 7.10338C1.75167 8.28683 1.18599 9.70348 1.03491 11.1924C0.883828 12.6812 1.15339 14.1826 1.81298 15.526C2.47256 16.8693 3.49572 18.0007 4.76619 18.7916C6.03665 19.5824 7.50348 20.0011 9 20H18C19.3261 20 20.5979 19.4732 21.5355 18.5355C22.4732 17.5979 23 16.3261 23 15C23 13.6739 22.4732 12.4021 21.5355 11.4645C20.5979 10.5268 19.3261 10 18 10Z"></path>
      </g>
      <defs>
        <clippath id="clip0">
          <rect width="24" height="24"></rect>
        </clippath>
      </defs>
    </svg>
  )
})

Cloud.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

Cloud.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

Cloud.displayName = "Cloud"
