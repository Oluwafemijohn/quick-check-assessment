import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const StartSvgSvgComponent = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> &
    Readonly<SvgProps> &
    Readonly<{children?: React.ReactNode}>,
) => (
  <Svg width={15} height={14} fill="none" {...props}>
    <Path
      d="m7.5 0 1.684 5.182h5.449l-4.408 3.203 1.683 5.183L7.5 10.365l-4.408 3.203 1.683-5.183L.367 5.182h5.45L7.5 0Z"
      fill="#FCCA48"
    />
  </Svg>
);

export default StartSvgSvgComponent;
