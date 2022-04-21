import * as React from "react"
import Svg, { Circle, Path, SvgProps } from "react-native-svg"

const ReferAFriendIcon = (props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> & Readonly<SvgProps> & Readonly<{ children?: React.ReactNode }>) => (
    <Svg
        width={43}
        height={43}
        fill="none"
        {...props}
    >
        <Circle cx={21.5} cy={21.5} r={21.5} fill="#AB50D6" />
        <Circle cx={21.5} cy={21.5} r={21.5} fill="#fff" fillOpacity={0.85} />
        <Circle
            cx={18.031}
            cy={15.125}
            r={3.125}
            stroke="#AB50D6"
            strokeWidth={2}
        />
        <Path
            d="M24.906 17.875a2.75 2.75 0 1 0 0-5.5"
            stroke="#AB50D6"
            strokeWidth={2}
            strokeLinecap="round"
        />
        <Path
            d="M26.656 27.5c0 1.005-.722 2.11-2.315 3.02-1.565.895-3.794 1.48-6.31 1.48-2.516 0-4.745-.585-6.31-1.48-1.593-.91-2.315-2.015-2.315-3.02s.722-2.11 2.316-3.02c1.564-.895 3.793-1.48 6.31-1.48 2.515 0 4.744.585 6.309 1.48 1.593.91 2.315 2.015 2.315 3.02Z"
            stroke="#AB50D6"
            strokeWidth={2}
        />
        <Path
            d="M29.031 23.375c3.252.733 5.5 2.304 5.5 4.125 0 1.82-2.248 3.392-5.5 4.125"
            stroke="#AB50D6"
            strokeWidth={2}
            strokeLinecap="round"
        />
    </Svg>
)

export default ReferAFriendIcon;
