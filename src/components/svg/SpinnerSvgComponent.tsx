import * as React from 'react';
import Svg, {Defs, Mask, Circle, G, Path, SvgProps} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: animateTransform, animate */

const SpinnerSvgComponent = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> &
    Readonly<SvgProps> &
    Readonly<{children?: React.ReactNode}>,
) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    // eslint-disable-next-line react-native/no-inline-styles
    style={{
      margin: 'auto',
      background: '#fff',
      display: 'block',
    }}
    width={200}
    height={200}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    {...props}>
    <Defs>
      <Mask id="a">
        <Circle
          cx={50}
          cy={50}
          r={20}
          stroke="#fff"
          strokeLinecap="round"
          strokeDasharray="94.24777960769379 31.41592653589793"
        />
      </Mask>
    </Defs>
    <G mask="url(#a)">
      <Path fill="#e15b64" d="M28.5 0h9.4v100h-9.4z" />
      <Path fill="#f47e60" d="M36.9 0h9.4v100h-9.4z" />
      <Path fill="#f8b26a" d="M45.3 0h9.4v100h-9.4z" />
      <Path fill="#abbd81" d="M53.7 0h9.4v100h-9.4z" />
      <G fill="#849b87" d="M62.1 0h9.4v100h-9.4z" />
    </G>
  </Svg>
);

export default SpinnerSvgComponent;
