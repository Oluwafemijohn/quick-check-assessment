import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const ActionArrowSvgComponent = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> &
    Readonly<SvgProps> &
    Readonly<{children?: React.ReactNode}>,
) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.362 15.833c.05-.003.063-.003.113-.011a.836.836 0 0 0 .448-.232l5-5c.035-.037.044-.046.075-.086a.84.84 0 0 0 0-1.007c-.03-.04-.04-.049-.075-.086l-5-5c-.037-.035-.046-.044-.086-.075a.836.836 0 0 0-.861-.089.84.84 0 0 0-.437 1.005c.029.09.073.176.13.252.031.04.04.048.075.085L12.155 10l-4.41 4.411-.04.042c-.031.039-.04.048-.068.09a.834.834 0 0 0 .555 1.279c.05.008.063.008.113.011h.057Z"
      fill="#AB50D6"
    />
  </Svg>
);

export default ActionArrowSvgComponent;
