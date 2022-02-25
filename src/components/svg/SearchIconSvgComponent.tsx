import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const SearchIconSvgComponent = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> &
    Readonly<SvgProps> &
    Readonly<{children?: React.ReactNode}>,
) => (
  <Svg width={30} height={30} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15Zm-10 7.5c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10Z"
      fill="#9A9A9A"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.866 17.866a1.25 1.25 0 0 1 1.768 0l7.5 7.5a1.25 1.25 0 1 1-1.768 1.768l-7.5-7.5a1.25 1.25 0 0 1 0-1.768Z"
      fill="#9A9A9A"
    />
  </Svg>
);

export default SearchIconSvgComponent;
