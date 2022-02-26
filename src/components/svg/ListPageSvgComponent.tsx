import * as React from 'react';
import Svg, {Rect, Path, SvgProps} from 'react-native-svg';

const ListPageSvgComponent = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> &
    Readonly<SvgProps> &
    Readonly<{children?: React.ReactNode}>,
) => (
  <Svg width={237} height={163} fill="none" {...props}>
    <Rect width={68.355} height={163} rx={10} fill="#FCCA48" />
    <Rect width={68.355} height={163} rx={10} fill="#fff" fillOpacity={0.9} />
    <Rect x={84.129} width={68.355} height={163} rx={10} fill="#FCCA48" />
    <Rect
      x={84.129}
      width={68.355}
      height={163}
      rx={10}
      fill="#fff"
      fillOpacity={0.9}
    />
    <Rect x={168.258} width={68.355} height={73.613} rx={10} fill="#FCCA48" />
    <Rect
      x={168.258}
      width={68.355}
      height={73.613}
      rx={10}
      fill="#fff"
      fillOpacity={0.9}
    />
    <Rect
      x={168.258}
      y={89.387}
      width={68.355}
      height={73.613}
      rx={10}
      fill="#FCCA48"
    />
    <Rect
      x={168.258}
      y={89.387}
      width={68.355}
      height={73.613}
      rx={10}
      fill="#fff"
      fillOpacity={0.9}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M142.363 96.067C154.77 88.17 163 74.297 163 58.5c0-24.577-19.923-44.5-44.5-44.5S74 33.923 74 58.5 93.923 103 118.5 103a44.4 44.4 0 0 0 15.521-2.782L144.5 109.5l-2.137-13.433Z"
      fill="#FCCA48"
    />
    <Rect
      x={110}
      y={50.88}
      width={18}
      height={19.12}
      rx={2}
      stroke="#fff"
      strokeWidth={2}
    />
    <Path
      d="M123 50.84c0-2.12-1.791-3.84-4-3.84s-4 1.72-4 3.84M114 56.6h10M114 60.44h10M114 64.28h5"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

export default ListPageSvgComponent;
