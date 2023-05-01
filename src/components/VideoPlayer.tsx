import { useRef } from 'react';

function VideoPlayer({ url, onVideoEnd }: any) {
    const videoRef = useRef(null);

    return (
        <div>
            <video
                src={url}
                onEnded={onVideoEnd}
                autoPlay
                muted
                ref={videoRef}
            />
        </div>
    );
}

export default VideoPlayer;