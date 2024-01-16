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
      <Path d="M2 10v3" stroke={color} />
      <Path d="M6 6v11" stroke={color} />
      <Path d="M10 3v18" stroke={color} />
      <Path d="M14 8v7" stroke={color} />
      <Path d="M18 5v13" stroke={color} />
      <Path d="M22 10v3" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'AudioLines'

export const AudioLines = memo<IconProps>(themed(Icon))
