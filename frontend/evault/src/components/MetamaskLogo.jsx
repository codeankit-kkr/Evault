import React, { useEffect, useRef } from 'react';
import ModelViewer from 'metamask-logo';
const MetamaskLogo = () => {
    const containerRef = useRef(null);
    useEffect(() => {
        const viewer = ModelViewer({
            pxNotRatio: true,
            width: 100,
            height: 100,
            followMouse: true,
            slowDrift: false,
        });
        const container = containerRef.current;
        container.appendChild(viewer.container);
        viewer.lookAt({
            x: 10,
            y: 10,
        });
        viewer.setFollowMouse(true);
        viewer.stopAnimation();
        return () => {
            viewer.stopAnimation();
        };
    }, []);
    return <div ref={containerRef} />;
}
export default MetamaskLogo;    