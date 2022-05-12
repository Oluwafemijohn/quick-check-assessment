import * as React from "react"
import Svg, { Circle, Path, SvgProps } from "react-native-svg"

const ModalCloseIcon = (props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> & Readonly<SvgProps> & Readonly<{ children?: React.ReactNode }>) => (
    <Svg
        width={22}
        height={22}
        fill="none"
        {...props}
    >
        <Circle cx={11} cy={11} r={11} fill="#2C4DA7" />
        <Path
            d="M6.104 15.895a.358.358 0 0 0 .505 0L11 11.506l4.391 4.39a.357.357 0 0 0 .505-.506L11.505 11l4.388-4.39a.357.357 0 1 0-.505-.505l-4.39 4.39-4.39-4.389a.357.357 0 0 0-.504.504l4.39 4.39-4.39 4.392a.357.357 0 0 0 0 .503Z"
            fill="#fff"
        />
    </Svg>
)

export default ModalCloseIcon
