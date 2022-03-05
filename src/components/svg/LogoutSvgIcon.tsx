import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const LogoutSvgIcon = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> &
    Readonly<SvgProps> &
    Readonly<{children?: React.ReactNode}>,
) => (
  <Svg width={30} height={30} fill="none" {...props}>
    <Path
      d="M24 11a1 1 0 1 0 2 0h-2Zm2 8a1 1 0 1 0-2 0h2Zm-1-3a1 1 0 1 0 0-2v2Zm-11.5-1-.673-.74a1 1 0 0 0 0 1.48L13.5 15Zm6.173-4.26a1 1 0 0 0-1.346-1.48l1.346 1.48Zm-1.346 10a1 1 0 0 0 1.346-1.48l-1.346 1.48ZM8 6h14V4H8v2Zm14 18H8v2h14v-2ZM6 22V8H4v14h2ZM24 8v3h2V8h-2Zm0 11v3h2v-3h-2Zm1-5H13.5v2H25v-2Zm-10.827 1.74 5.5-5-1.346-1.48-5.5 5 1.346 1.48Zm-1.346 0 5.5 5 1.346-1.48-5.5-5-1.346 1.48ZM8 24a2 2 0 0 1-2-2H4a4 4 0 0 0 4 4v-2Zm14 2a4 4 0 0 0 4-4h-2a2 2 0 0 1-2 2v2Zm0-20a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4v2ZM8 4a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2V4Z"
      fill="#FF6363"
    />
  </Svg>
);

export default LogoutSvgIcon;
