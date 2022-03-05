import * as React from 'react';
import Svg, {Circle, Mask, Path, SvgProps} from 'react-native-svg';

const FeedbacksSvgIcon = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> &
    Readonly<SvgProps> &
    Readonly<{children?: React.ReactNode}>,
) => (
  <Svg width={46} height={46} fill="none" {...props}>
    <Circle cx={23} cy={23} r={23} fill="#7B61FF" />
    <Mask id="a" fill="#fff">
      <Path d="M30 13H16a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h1a1 1 0 0 1 1 1v4l6.479-4.628A2 2 0 0 1 25.64 28H30a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3Z" />
    </Mask>
    <Path
      d="M18 33h-2a2 2 0 0 0 3.163 1.627L18 33Zm6.479-4.628L25.64 30l-1.162-1.628ZM16 15h14v-4H16v4Zm15 1v9h4v-9h-4Zm-16 9v-9h-4v9h4Zm2 1h-1v4h1v-4Zm13 0h-4.36v4H30v-4Zm-14 3v4h4v-4h-4Zm3.163 5.627L25.64 30l-2.325-3.255-6.479 4.627 2.326 3.255ZM25.64 26a4 4 0 0 0-2.325.745L25.641 30v-4ZM17 30a1 1 0 0 1-1-1h4a3 3 0 0 0-3-3v4Zm-6-5a5 5 0 0 0 5 5v-4a1 1 0 0 1-1-1h-4Zm20 0a1 1 0 0 1-1 1v4a5 5 0 0 0 5-5h-4Zm-1-10a1 1 0 0 1 1 1h4a5 5 0 0 0-5-5v4Zm-14-4a5 5 0 0 0-5 5h4a1 1 0 0 1 1-1v-4Z"
      fill="#fff"
      mask="url(#a)"
    />
  </Svg>
);

export default FeedbacksSvgIcon;
