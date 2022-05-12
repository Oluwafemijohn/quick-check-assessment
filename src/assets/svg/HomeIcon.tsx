import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

const HomeIcon = (props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> & Readonly<SvgProps> & Readonly<{ children?: React.ReactNode }>) => (
    <Svg
        width={22}
        height={22}
        fill="none"
        {...props}
    >
        <Path
            d="M20.32 7.506 12.728.819C11.644-.265 9.878-.265 8.838.774L1.156 7.551A3.932 3.932 0 0 0 0 10.347v8.955A2.7 2.7 0 0 0 2.698 22h16.134c1.48 0 2.69-1.21 2.69-2.698v-8.955c0-1.057-.413-2.052-1.202-2.841Zm-.591 11.796a.901.901 0 0 1-.897.905H13.15v-5.772a.926.926 0 0 0-.932-.932H9.304a.931.931 0 0 0-.932.932v5.772H2.698a.903.903 0 0 1-.905-.905v-8.955c0-.564.233-1.129.591-1.497l7.682-6.767a.957.957 0 0 1 .681-.287c.27 0 .538.108.753.323l7.592 6.696c.413.412.637.959.637 1.532v8.955Z"
            fill="#A0A3B1"
        />
    </Svg>
)

export default HomeIcon