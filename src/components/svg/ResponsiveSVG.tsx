import React from 'react';
import type { FC, Ref } from 'react';
// import type { PreserveAspectRatio } from '../../interfaces/Types';
import Svg from 'react-native-svg';
import { Dimensions, View } from 'react-native';

export interface Point {
    x: number;
    y: number;
}

export interface ResponsiveSVGProps {
    originalWidth: number;
    originalHeight: number;
    origin?: Point;
    preserveAspectRatio?: any;
    innerRef?: Ref<SVGSVGElement>;
    className?: string;
    hide?: boolean;
}

export const ResponsiveSVG: FC<ResponsiveSVGProps> = ({
    originalWidth = 500,
    originalHeight = 500,
    children,
    preserveAspectRatio = 'xMaxYMid meet',
    origin = { x: 0, y: 0 }
}) => {
    const aspectRatio = originalWidth / originalHeight;
    const windowWidth = Dimensions.get("window").width;

    return (
        <View style={{
            width: windowWidth,
            aspectRatio,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Svg
                width="50%"
                height="50%"
                preserveAspectRatio={preserveAspectRatio}
                viewBox={`${origin.x} ${origin.y} ${originalWidth} ${originalHeight}`}>

                {children}
            </Svg>
        </View>
    );
};