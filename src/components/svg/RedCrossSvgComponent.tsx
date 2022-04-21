import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

const RedCrossSvgComponent = (props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> & Readonly<SvgProps> & Readonly<{ children?: React.ReactNode; }>) => (
    <Svg
        width={11}
        height={11}
        fill="none"
        {...props}
    >
        <Path d="M0 5.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z" fill="#FF6262" />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.5 6.149 3.074 8.575a.46.46 0 0 1-.246.128c-.028.004-.035.004-.062.006h-.032c-.028-.002-.035-.002-.062-.007a.46.46 0 0 1-.287-.728c.016-.023.022-.027.04-.048L4.853 5.5 2.426 3.074c-.02-.02-.025-.025-.041-.047a.459.459 0 0 1 .642-.642c.022.017.027.022.047.041L5.5 4.852l2.426-2.426c.02-.019.025-.024.047-.04a.46.46 0 0 1 .642.641c-.017.022-.022.027-.04.047L6.147 5.5l2.426 2.426a.46.46 0 0 1-.246.776c-.027.005-.035.005-.062.007h-.032c-.027-.002-.034-.002-.062-.007a.46.46 0 0 1-.246-.127L5.5 6.149Z"
            fill="#fff"
        />
    </Svg>
)

export default RedCrossSvgComponent;