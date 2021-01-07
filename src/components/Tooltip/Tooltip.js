import React from "react";
// import styles from './Tooltip.module.css'; FIXME: 

const Tooltip = ({ children, coords, updateTooltipCoords }) => {
	// TODO: move this logic to container
	const updateCoords = debounce(updateTooltipCoords, 100);

	useEffect(() => {
		// TODO: move this to top level component
		window.addEventListener("resize", updateCoords);
		return () => window.removeEventListener("resize", updateCoords);
	}, []);

	// FIXME: styles here
	return (
		// TODO: wrap this style in cx
		<div
			style={{ ...styles.popover, ...coords }}
			className="placement-top"
		>
			<div className="content">
				<div className="arrow" />
				<div className="inner" role="tooltip">
					<div>
						<div className="inner-content">{children}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const styles = {
	popover: {
	  position: "absolute",
	  width: 200,
	  transform: "translate(-100px, -100%)"
	}
  };
 

export default Tooltip;
