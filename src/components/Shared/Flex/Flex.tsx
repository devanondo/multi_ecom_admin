import React from 'react';

interface IFlex {
    style?: React.CSSProperties;
    width?: number | string;
    gap?: number | string;
    justify?: string;
    align?: string;
    children: React.ReactNode;
}

const Flex: React.FC<IFlex> = ({ style, width, gap, justify, align, children }) => {
    const styles: React.CSSProperties = {
        display: 'flex',
        width: width || '100%',
        gap: gap || 0,
        justifyContent: justify || 'flex-start',
        alignItems: align || 'flex-start',
        ...style,
    };

    return <div style={styles}>{children}</div>;
};

export default Flex;
