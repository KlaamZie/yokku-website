import React from 'react';
import ModalVideo from 'react-modal-video'
import './modal.css';

const VideoModal = ({ channel, isOpen, videoId, onClose }) => {
	const isSSR = typeof window === "undefined";
	return (
		<>
			{!isSSR && (
				<div className="modal-video-wrapper">
					<ModalVideo
						channel={channel}
						isOpen={isOpen}
						videoId={videoId}
						onClose={onClose} />
				</div>
			)}
		</>
	)
}

export default VideoModal;