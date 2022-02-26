import * as React from 'react';
import Svg, {Rect, Path, SvgProps} from 'react-native-svg';

const ListItemIconSvgConponent = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> &
    Readonly<SvgProps> &
    Readonly<{children?: React.ReactNode}>,
) => (
  <Svg width={20} height={25} fill="none" {...props}>
    <Rect
      x={1}
      y={4.88}
      width={18}
      height={19.12}
      rx={2}
      stroke="#FCCA48"
      strokeWidth={2}
    />
    <Path
      d="M14 4.84C14 2.72 12.21 1 10 1S6 2.72 6 4.84M5 10.6h10M5 14.44h10M5 18.28h5"
      stroke="#FCCA48"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

export default ListItemIconSvgConponent;
