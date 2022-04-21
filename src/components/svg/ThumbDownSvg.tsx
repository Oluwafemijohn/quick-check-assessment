import * as React from "react"
import Svg, { Circle, Rect, Path, SvgProps } from "react-native-svg"

const ThumbDownSvg = (props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> & Readonly<SvgProps> & Readonly<{ children?: React.ReactNode; }>) => (
    <Svg
        width={46}
        height={46}
        fill="none"
        {...props}
    >
        <Circle cx={23} cy={23} r={22.5} fill="#FF6363" />
        <Circle cx={23} cy={23} r={22.5} fill="#fff" fillOpacity={0.8} />
        <Circle cx={23} cy={23} r={22.5} stroke="#FF6363" />
        <Rect
            x={1}
            y={-1}
            width={7}
            height={13}
            rx={2}
            transform="matrix(1 0 0 -1 9 25.568)"
            stroke="#FF6363"
            strokeWidth={2}
        />
        <Path
            d="m17 14.568 6-1h8.206c3.314 0 3.294 4 3.294 4m0 0c1.894 0 1.914 4.5.257 4.5m-.257-4.5h-5.682m5.939 4.5h-4.498m4.498 0c1.743 0 1.743 4.5 0 4.5H26.47l.976 6c.054 2.5-2.842 3.377-5.446 0l-5-6.94"
            stroke="#FF6363"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default ThumbDownSvg;
