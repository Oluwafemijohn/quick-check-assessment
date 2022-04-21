import * as React from "react"
import Svg, { Circle, Path, SvgProps } from "react-native-svg"

const ComplaintsSvgIcon = (props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> & Readonly<SvgProps> & Readonly<{ children?: React.ReactNode }>) => (
    <Svg
        width={46}
        height={46}
        fill="none"
        {...props}
    >
        <Circle cx={23} cy={23} r={22.5} fill="#AB50D6" />
        <Circle cx={23} cy={23} r={22.5} fill="#fff" fillOpacity={0.8} />
        <Circle cx={23} cy={23} r={22.5} stroke="#AB50D6" />
        <Path
            d="M14 15a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-7.257a4 4 0 0 0-2.829 1.172l-3.207 3.207c-.63.63-1.707.184-1.707-.707V15Z"
            stroke="#AB50D6"
            strokeWidth={2}
        />
        <Path
            d="m20.075 18.56 1.35.015c.045-1.02.63-1.53 1.605-1.53.93 0 1.545.42 1.545 1.29 0 1.815-2.085 1.83-2.085 4.245h1.32c0-2.025 2.37-2.13 2.37-4.5 0-1.635-1.2-2.505-3-2.505-1.86 0-3.045 1.08-3.105 2.985Zm3.06 5.595c-.54 0-.945.405-.945.975 0 .585.405 1.005.945 1.005.54 0 .945-.42.945-1.005 0-.57-.405-.975-.945-.975Z"
            fill="#AB50D6"
        />
    </Svg>
)

export default ComplaintsSvgIcon
