import * as React from "react"
import Svg, { Circle, Path, SvgProps } from "react-native-svg"

const CopyLinkSvgIcon = (props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> & Readonly<SvgProps> & Readonly<{ children?: React.ReactNode }>) => (
    <Svg
        width={43}
        height={43}
        fill="none"
        {...props}
    >
        <Circle cx={21.5} cy={21.5} r={21.5} fill="#AB50D6" />
        <Circle cx={21.5} cy={21.5} r={21.5} fill="#fff" fillOpacity={0.85} />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.084 18.375a7.292 7.292 0 0 1 7.291-7.292h8.334a1.042 1.042 0 0 1 0 2.083h-8.334a5.208 5.208 0 0 0-5.208 5.209v8.333a1.042 1.042 0 1 1-2.083 0v-8.333Z"
            fill="#AB50D6"
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.25 20.458a5.208 5.208 0 0 1 5.208-5.208h6.25a5.208 5.208 0 0 1 5.209 5.208v6.25a5.208 5.208 0 0 1-5.209 5.209h-6.25a5.208 5.208 0 0 1-5.208-5.209v-6.25Zm5.208-3.125a3.125 3.125 0 0 0-3.125 3.125v6.25c0 1.726 1.4 3.125 3.125 3.125h6.25a3.125 3.125 0 0 0 3.125-3.125v-6.25a3.125 3.125 0 0 0-3.125-3.125h-6.25Z"
            fill="#AB50D6"
        />
    </Svg>
)

export default CopyLinkSvgIcon;
