import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

const OrderIcon = (props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> & Readonly<SvgProps> & Readonly<{ children?: React.ReactNode }>) => (
    <Svg
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            d="m20.811 19.134-.982-12.38a1.647 1.647 0 0 0-1.636-1.514h-1.84A4.357 4.357 0 0 0 12 .9a4.357 4.357 0 0 0-4.352 4.34H5.807c-.852 0-1.57.665-1.635 1.513l-.983 12.383a3.693 3.693 0 0 0 .97 2.784c.695.75 1.68 1.18 2.701 1.18h10.28c1.022 0 2.007-.43 2.701-1.18a3.694 3.694 0 0 0 .97-2.786ZM5.807 6.728h1.84v1.487a.744.744 0 0 0 1.49 0V6.728h5.727v1.487a.744.744 0 0 0 1.489 0V6.728h1.84c.078 0 .145.062.152.142l.982 12.38a2.17 2.17 0 0 1-.578 1.658 2.17 2.17 0 0 1-1.61.703H6.86a2.17 2.17 0 0 1-1.609-.703 2.169 2.169 0 0 1-.578-1.656l.983-12.383a.153.153 0 0 1 .151-.14Zm3.33-1.488A2.867 2.867 0 0 1 12 2.389a2.867 2.867 0 0 1 2.864 2.85H9.136Z"
            fill="#A0A3B1"
            stroke="#A0A3B1"
            strokeWidth={0.2}
        />
        <Path
            d="M15.166 11.92a.703.703 0 0 0-.994 0l-3.138 3.138-1.207-1.207a.703.703 0 1 0-.994.994l1.704 1.704a.7.7 0 0 0 .994 0l3.635-3.635a.703.703 0 0 0 0-.994Z"
            fill="#A0A3B1"
        />
    </Svg>
)

export default OrderIcon
