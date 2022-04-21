import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

const GreenMarkSvgComponent = (props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> & Readonly<SvgProps> & Readonly<{ children?: React.ReactNode }>) => (
    <Svg
        width={11}
        height={11}
        fill="none"
        {...props}
    >
        <Path d="M0 5.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z" fill="#38CA46" />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.125 7.412 2.214 5.5l-.651.647 2.562 2.562 5.5-5.5-.646-.647-4.854 4.85Z"
            fill="#fff"
        />
    </Svg>
)

export default GreenMarkSvgComponent;