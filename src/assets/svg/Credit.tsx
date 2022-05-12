import * as React from "react"
import Svg, { Rect, Path, SvgProps } from "react-native-svg"

const CreditIcon = (props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> & Readonly<SvgProps> & Readonly<{ children?: React.ReactNode }>) => (
    <Svg
        width={46}
        height={46}
        fill="none"
        {...props}
    >
        <Rect width={46} height={46} rx={18} fill="#4B70D6" />
        <Path
            d="M32.639 25.396H28.59a2.693 2.693 0 0 1-2.693-2.692 2.693 2.693 0 0 1 2.693-2.69h4.048M29.049 22.643h-.312"
            stroke="#fff"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            clipRule="evenodd"
            d="M18.748 14h8.643a5.248 5.248 0 0 1 5.248 5.248v7.177a5.248 5.248 0 0 1-5.248 5.247h-8.643a5.248 5.248 0 0 1-5.248-5.247v-7.177A5.248 5.248 0 0 1 18.748 14Z"
            stroke="#fff"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M18.035 18.538h5.4"
            stroke="#fff"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default CreditIcon
