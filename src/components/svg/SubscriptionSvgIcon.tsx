import * as React from 'react';
import Svg, {Circle, Path, SvgProps} from 'react-native-svg';

const SubscriptionSvgIcon = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> &
    Readonly<SvgProps> &
    Readonly<{children?: React.ReactNode}>,
) => (
  <Svg width={46} height={46} fill="none" {...props}>
    <Circle cx={23} cy={23} r={23} fill="#FF6262" />
    <Path
      d="M20.061 32.778a6.825 6.825 0 0 0 1.592 1.73c.724.554 1.712 1.063 2.871 1.063h4.312c.582 0 1.153-.26 1.621-.572a6.24 6.24 0 0 0 1.41-1.333c.861-1.096 1.562-2.641 1.562-4.428v-6.095c0-.403-.106-.993-.46-1.514-.39-.575-1.051-1.01-1.978-1.01a2.66 2.66 0 0 0-.603.067 2.593 2.593 0 0 0-.294-.581c-.39-.575-1.05-1.01-1.977-1.01-.585 0-1.065.174-1.437.447-.372-.273-.852-.447-1.437-.447-.153 0-.299.012-.437.035v-3.606c0-.403-.107-.993-.46-1.514-.39-.575-1.051-1.01-1.977-1.01-.927 0-1.587.435-1.977 1.01a2.774 2.774 0 0 0-.46 1.514v7.408a13.94 13.94 0 0 0-.429-.475c-.47-.498-1.022-.834-1.627-.923a2.042 2.042 0 0 0-1.634.465c-.851.723-1.045 1.996-.527 3.094.01.023.022.045.034.066l4.312 7.62Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17 16h-1a3 3 0 0 1-3-3v0a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3v0"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

export default SubscriptionSvgIcon;
