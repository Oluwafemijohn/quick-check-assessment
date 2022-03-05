import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const EditSvgIcon = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> &
    Readonly<SvgProps> &
    Readonly<{children?: React.ReactNode}>,
) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.09 6.077a.833.833 0 0 1 0 1.179L7.255 18.089a.833.833 0 0 1-.59.244H3.334A.833.833 0 0 1 2.5 17.5v-3.333c0-.221.088-.433.244-.59L13.577 2.744a.833.833 0 1 1 1.179 1.179L4.166 14.512v2.155h2.155l10.59-10.59a.833.833 0 0 1 1.178 0Z"
      fill="#000"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.578 2.744a.833.833 0 0 1 1.178 0l3.333 3.333a.833.833 0 0 1-1.178 1.179l-3.333-3.333a.833.833 0 0 1 0-1.179ZM14.41 9.756l-3.333-3.333 1.179-1.179 3.333 3.333-1.178 1.179Z"
      fill="#000"
    />
  </Svg>
);

export default EditSvgIcon;
