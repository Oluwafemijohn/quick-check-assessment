import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const GoBackArrorSvgComponent = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> &
    Readonly<SvgProps> &
    Readonly<{children?: React.ReactNode}>,
) => (
  <Svg width={28} height={24} fill="none" {...props}>
    <Path
      d="M.94 10.94a1.5 1.5 0 0 0 0 2.12l9.545 9.547a1.5 1.5 0 1 0 2.122-2.122L4.12 12l8.486-8.485a1.5 1.5 0 1 0-2.122-2.122L.94 10.94ZM28 10.5H2v3h26v-3Z"
      fill="#000"
    />
  </Svg>
);

export default GoBackArrorSvgComponent;
