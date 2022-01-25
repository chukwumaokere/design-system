import React, { forwardRef } from "react"
import p from "prop-types"
export const PieChart = forwardRef(function PieChart(props, ref) {
  const { color = "currentColor", size = 24, ...rest } = props
  return (
    <svg {...rest} ref={ref} stroke={color} width={size} height={size}>
      <path d="M21.21 15.89C20.5738 17.3945 19.5788 18.7202 18.3119 19.7513C17.045 20.7824 15.5448 21.4874 13.9424 21.8048C12.3401 22.1221 10.6844 22.0421 9.12015 21.5718C7.55587 21.1015 6.13062 20.2551 4.96902 19.1067C3.80741 17.9582 2.94481 16.5428 2.45663 14.984C1.96845 13.4251 1.86956 11.7705 2.1686 10.1646C2.46763 8.55878 3.15549 7.05063 4.17204 5.77203C5.18859 4.49343 6.50288 3.48332 8 2.83"></path>
      <path d="M22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2V12H22Z"></path>
    </svg>
  )
})

PieChart.propTypes = {
  color: p.string,
  size: p.oneOfType([p.string, p.number]),
}

PieChart.defaultProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

PieChart.displayName = "PieChart"
