import * as React from 'react';
import Svg, {Circle, Path, Rect, SvgProps} from 'react-native-svg';

const NotificationSvgIcon = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> &
    Readonly<SvgProps> &
    Readonly<{children?: React.ReactNode}>,
) => (
  <Svg width={46} height={46} fill="none" {...props}>
    <Circle cx={23} cy={23} r={23} fill="#15B5E8" />
    <Path
      d="M30 27v-7a7 7 0 0 0-7-7v0a7 7 0 0 0-7 7v7M26 34c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2M21 13v-1a2 2 0 1 1 4 0v1"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <Rect
      x={13}
      y={27}
      width={20}
      height={5}
      rx={2.5}
      stroke="#fff"
      strokeWidth={2}
    />
  </Svg>
);

export default NotificationSvgIcon;
