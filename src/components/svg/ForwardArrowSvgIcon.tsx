import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const ForwardArrowSvgIcon = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> &
    Readonly<SvgProps> &
    Readonly<{children?: React.ReactNode}>,
) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.09 9.41a.833.833 0 0 1 0 1.18l-5 5a.833.833 0 1 1-1.18-1.18L11.322 10l-4.41-4.41a.833.833 0 1 1 1.178-1.18l5 5Z"
      fill="#000"
    />
  </Svg>
);

export default ForwardArrowSvgIcon;
