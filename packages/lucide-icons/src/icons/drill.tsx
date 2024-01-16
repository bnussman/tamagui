import type { IconProps } from '@tamagui/helpers-icon'
import { themed } from '@tamagui/helpers-icon'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {
  Defs,
  Ellipse,
  G,
  Line,
  LinearGradient,
  Path,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Svg,
  Symbol,
  Use,
  Circle as _Circle,
  Text as _Text,
} from 'react-native-svg'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Path
        d="M14 9c0 .6-.4 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9c.6 0 1 .4 1 1Z"
        stroke={color}
      />
      <Path d="M18 6h4" stroke={color} />
      <Path d="M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3" stroke={color} />
      <Path d="m5 10-2 8" stroke={color} />
      <Path d="M12 10v3c0 .6-.4 1-1 1H8" stroke={color} />
      <Path d="m7 18 2-8" stroke={color} />
      <Path
        d="M5 22c-1.7 0-3-1.3-3-3 0-.6.4-1 1-1h7c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z"
        stroke={color}
      />
    </Svg>
  )
}

Icon.displayName = 'Drill'

export const Drill = memo<IconProps>(themed(Icon))
