import * as React from 'react';
import Svg, {Circle, Path, SvgProps} from 'react-native-svg';

const OrderHistorySvgIcon = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> &
    Readonly<SvgProps> &
    Readonly<{children?: React.ReactNode}>,
) => (
  <Svg width={46} height={46} fill="none" {...props}>
    <Circle cx={23} cy={23} r={23} fill="#AB50D5" />
    <Path
      d="M23.574 19.666v4.445h-3.76"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M31.167 23c0 5.003-3.912 9-8.667 9s-8.666-3.997-8.666-9 3.911-9 8.666-9c4.755 0 8.667 3.997 8.667 9Z"
      stroke="#fff"
      strokeWidth={2}
    />
  </Svg>
);

export default OrderHistorySvgIcon;
