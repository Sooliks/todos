import React, {CSSProperties} from 'react';


type CardProps = {
    children?: React.ReactNode
    style?: CSSProperties
}

const Card: React.FC<CardProps> = ({children,style}) => {
    return (
        <div style={{
            ...style,
            width: style?.width || 100,
            height: style?.height || 100,
            border: '1px solid rgb(51,51,51)',
            borderRadius: '20px',
            padding: 10
        }}>
            {children}
        </div>
    );
};

export default Card;