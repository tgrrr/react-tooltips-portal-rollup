import React, { useEffect, useRef } from 'react';
import Portal from '../../components/Portal/Portal';
import Tooltip from '../Tooltip/Tooltip.js';

const TooltipContainer = ({
	children,
	content,
	}) => {
	return(
		<>
			{/* Target: */}
			<div ref={hoverRef}>
				<div ref={coordsRef}>
					{children}
				</div>
			</div>

			{isShow && (
			{/* Tooltip: */}
				<Portal>
					<Tooltip
						coords={coords}
					>
						{content}
					</Tooltip>
				</Portal>
			)}
		</>
	);
};

export default TooltipContainer;