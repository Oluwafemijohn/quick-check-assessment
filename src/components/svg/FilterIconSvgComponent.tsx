import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const FilterIconSvgComponent = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> &
    Readonly<SvgProps> &
    Readonly<{children?: React.ReactNode}>,
) => (
  <Svg width={30} height={30} fill="none" {...props}>
    <Path
      d="M12 16.375v-.295l-.16-.248L4.837 5h20.326L18.16 15.832l-.16.248v8.519l-5.325-1.83a1 1 0 0 1-.675-.946v-5.448Z"
      stroke="#000"
      strokeWidth={2}
    />
  </Svg>
);

export default FilterIconSvgComponent;
