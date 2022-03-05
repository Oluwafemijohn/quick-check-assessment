import * as React from 'react';
import Svg, {Circle, Path, Rect, SvgProps} from 'react-native-svg';

const WalletIconSvg = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> &
    Readonly<SvgProps> &
    Readonly<{children?: React.ReactNode}>,
) => (
  <Svg width={46} height={46} fill="none" {...props}>
    <Circle cx={23} cy={23} r={23} fill="#38CA46" />
    <Path
      d="M33 18v-2a3 3 0 0 0-3-3H16a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-2"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <Rect
      x={27}
      y={21}
      width={9}
      height={4}
      rx={2}
      stroke="#fff"
      strokeWidth={2}
    />
  </Svg>
);

export default WalletIconSvg;
