import * as React from "react"
import Svg, { Path, Rect, Mask, G, SvgProps } from "react-native-svg"

const GetStartedIcon = (props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> & Readonly<SvgProps> & Readonly<{ children?: React.ReactNode }>) => (
    <Svg
        width={375}
        height={367}
        fill="none"
        {...props}
    >
        <Path fill="#E6F3FF" d="M0 0h375v367H0z" />
        <Rect x={152} y={60} width={192} height={224} rx={10} fill="#CCE6FF" />
        <Rect x={144} y={52} width={192} height={224} rx={10} fill="#fff" />
        <Rect x={163} y={92} width={154} height={37} rx={8} fill="#FFF3E6" />
        <Rect x={163} y={137} width={154} height={37} rx={8} fill="#FFF3E6" />
        <Rect x={163} y={182} width={154} height={37} rx={8} fill="#FFF3E6" />
        <Rect x={174} y={105} width={133} height={4} rx={2} fill="#FFDBB3" />
        <Rect x={174} y={149} width={133} height={4} rx={2} fill="#FFDBB3" />
        <Rect x={174} y={113} width={133} height={4} rx={2} fill="#FFDBB3" />
        <Rect x={174} y={157} width={133} height={4} rx={2} fill="#FFDBB3" />
        <Rect x={174} y={195} width={133} height={4} rx={2} fill="#FFDBB3" />
        <Rect x={174} y={203} width={133} height={4} rx={2} fill="#FFDBB3" />
        <Mask
            id="a"
            // @ts-ignore
            style={{
                maskType: "alpha",
            }}
            // maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={375}
            height={367}
        >
            <Path fill="#E6F3FF" d="M0 0h375v367H0z" />
        </Mask>
        <G mask="url(#a)">
            <Path
                d="M141.856 271.602c-11.817-3.705-17.591-4.916-26.497-5.517l-12.871 20.562 44.415-1.253-5.047-13.792Z"
                fill="#fff"
            />
            <Path
                d="M133.363 182.552c-1.614-12.51-9.92-21.355-13.871-24.214h-6.305l-9.331 2.27-16.14 17.404-9.08 30.773 7.819 56.5c21.184-2.825 45.815 3.195 55.483 6.558l-9.332-21.692c23.001-11.3 17.318-32.286 11.601-41.366l3.997-5.33c1.476-1.968.831-4.781-1.227-6.13-8.367-5.479-12.517-11.92-13.614-14.773Z"
                fill="#FBA99E"
            />
            <Path
                d="M28.412 293.394C5.435 295.211-16.77 371.355-25 409.2h198.281l41.067-86.287-45.374-33.905a16.002 16.002 0 0 0-9.577-3.183h-48.851c-17.804 1.766-59.156 5.753-82.134 7.569Z"
                fill="#54C3A1"
            />
            <Path
                d="M295.04 394.491c-20.606 24.993-78.282-8.231-104.544-27.966l23.232-43.587 41.161 29.226c-3.199-5.627-14.545-26.304-34.343-63.995-19.798-37.691-35.177-56.908-11.111-69.789s26.025-3.587 26.01 14.613l2.525 43.335c49.747 44.846 82.827 86.921 57.07 118.163Z"
                fill="#FBA99E"
            />
            <Path
                d="M39.38 233.384c-40.875-70.127 53.488-106.86 80.586-76.848.468.519.547 1.166.105 1.708-.825 1.014-2.341 2.668-3.555 3.962-.45.479-.326 1.258.212 1.636 9.268 6.521 6.012 24.917.409 29.767-4.652 4.027-.421 15.941 2.276 21.395-3.793-7.3-26.044-11.327-18.458 4.53 5.125 10.714 13.255 13.684 18.299 13.944.893.046 1.552 1.172 1.139 1.966-3.515 6.758-1.396 15.004.283 18.574 16.939 39.013-36.915 102.946-80.406 60.66-33.797-32.86-15.615-65.377-1.258-78.672.716-.664.86-1.779.367-2.622Z"
                fill="#070D2B"
            />
        </G>
        <Path
            stroke="#333C52"
            strokeWidth={4}
            strokeLinecap="round"
            d="m182.495 212.668 13.763 4.183M207.626 194.051l5.666 13.222M240.309 195.822l-9.487 10.813"
        />
    </Svg>
)

export default GetStartedIcon
