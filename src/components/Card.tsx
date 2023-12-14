import React, {CSSProperties} from 'react';

type CardProps = {
    children?: React.ReactNode
    style?: CSSProperties
    className?: string
}
const Card: React.FC<CardProps> = ({children,style, className}) => {
    return (
        <div style={{
            ...style,
            width: style?.width || 100,
            height: style?.height || 100,
            borderRadius: '20px',
            padding: 20,
            backgroundColor: '#f8fafc'
        }}
             className={className + " " + "bg-clip-border rounded-xl shadow-blue-gray-500/40"}
        >
            {children}
        </div>
    );
};

export default Card;