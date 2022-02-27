import * as React from 'react';
import Svg, {Circle, Path, SvgProps} from 'react-native-svg';

const SaveMarkSvgComponent = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> &
    Readonly<SvgProps> &
    Readonly<{children?: React.ReactNode}>,
) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Circle cx={9} cy={9} r={9} fill="#FCCA48" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.125 11.606 4.52 9l-.888.881 3.494 3.494 7.5-7.5-.881-.881-6.619 6.612Z"
      fill="#fff"
    />
  </Svg>
);

export default SaveMarkSvgComponent;
