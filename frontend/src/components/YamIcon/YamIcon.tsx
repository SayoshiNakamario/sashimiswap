import React from 'react'
import FOGIcon from '../../assets/img/logo50.png'
interface YamIconProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const YamIcon: React.FC<YamIconProps> = ({ size = 36, v1, v2, v3 }) => (
  <span
    role="img"
    style={{
      fontSize: size,
      filter: v1 ? 'saturate(0.5)' : undefined,
    }}
  >
    <img src={FOGIcon} />
  </span>
)

export default YamIcon
