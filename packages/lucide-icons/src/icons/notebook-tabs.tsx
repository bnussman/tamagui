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
      <Path d="M2 6h4" stroke={color} />
      <Path d="M2 10h4" stroke={color} />
      <Path d="M2 14h4" stroke={color} />
      <Path d="M2 18h4" stroke={color} />
      <Rect width="16" height="20" x="4" y="2" rx="2" stroke={color} />
      <Path d="M15 2v20" stroke={color} />
      <Path d="M15 7h5" stroke={color} />
      <Path d="M15 12h5" stroke={color} />
      <Path d="M15 17h5" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'NotebookTabs'

export const NotebookTabs = memo<IconProps>(themed(Icon))
