import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

const IconUpSvgComponent = (props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> & Readonly<SvgProps> & Readonly<{ children?: React.ReactNode }>) => (
    <Svg
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.59 6.91a.833.833 0 0 0-1.18 0l-5 5a.833.833 0 1 0 1.18 1.179L10 8.679l4.41 4.41a.833.833 0 1 0 1.18-1.179l-5-5Z"
            fill="#000"
        />
    </Svg>
)

export default IconUpSvgComponent