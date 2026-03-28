type IconProps = {
    name: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    color?: string;
    fill?: string; 
    strokeWidth?: number;
};

export const Icon = ({
    name,
    width = 24,
    height = 24,
    className,
    color = 'currentColor',
    fill,
    strokeWidth,
}: IconProps) => {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            fill={fill !== undefined ? fill : strokeWidth ? 'none' : color}
            stroke={strokeWidth ? color : 'none'}
            strokeWidth={strokeWidth}
        >
            <use href={`#icon-${name}`} />
        </svg>
    );
};
