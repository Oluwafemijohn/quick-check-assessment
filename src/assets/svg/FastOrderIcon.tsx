import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

const FastOrderIcon = (props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> & Readonly<SvgProps> & Readonly<{ children?: React.ReactNode }>) => (
    <Svg
        width={20}
        height={39}
        fill="none"
        {...props}
    >
        <Path
            d="m.845 21.2 11.63-18.33-2.91 13.354-.184.85h9.778L7.23 36.258l2.818-14.222.166-.836H.845Z"
            stroke="#A0A3B1"
            strokeWidth={1.4}
        />
    </Svg>
)

export default FastOrderIcon
