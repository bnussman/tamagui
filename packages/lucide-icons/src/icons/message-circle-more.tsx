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
      <Path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" stroke={color} />
      <Path d="M8 12h.01" stroke={color} />
      <Path d="M12 12h.01" stroke={color} />
      <Path d="M16 12h.01" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'MessageCircleMore'

export const MessageCircleMore = memo<IconProps>(themed(Icon))
