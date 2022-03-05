import * as React from 'react';
import Svg, {Circle, SvgProps} from 'react-native-svg';

const NotificationEllipseSvg = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> &
    Readonly<SvgProps> &
    Readonly<{children?: React.ReactNode}>,
) => (
  <Svg width={7} height={7} fill="none" {...props}>
    <Circle cx={3.5} cy={3.5} r={3.5} fill="#FCCA48" />
  </Svg>
);

export default NotificationEllipseSvg;
