import React from 'react';
import cn from 'classnames/bind';
import { Tooltip, Card } from '../../components';
import styles from './DemoGrid.module.css';

const cx = cn.bind(styles);

const TooltipContents = () =>
	<Card>
		Tooltip Body
	</Card>

// Card wrapper to test that tooltip works outside of current parent node
const DemoTooltip = () =>
	<Card>
		<Tooltip content={<TooltipContents />}>
			<button>
				Click me
			</button>
		</Tooltip>
	</Card>

const DemoGrid = () => (
	<>
		<div className={styles.container}>
			<div className={cx(styles.row, styles.top)}>
				<div className={cx(styles.col, styles.left)}>
					<DemoTooltip />
				</div>
				<div className={cx(styles.col, styles.center)}>
					<DemoTooltip />
				</div>
				<div className={cx(styles.col, styles.right)}>
					<DemoTooltip />
				</div>
			</div>

			<div className={cx(styles.row, styles.middle)}>
				<div className={cx(styles.col, styles.left)}>
					<DemoTooltip />
				</div>
				<div className={cx(styles.col, styles.center)}>
					<DemoTooltip />
				</div>
				<div className={cx(styles.col, styles.right)}>
					<DemoTooltip />
				</div>
			</div>

			<div className={cx(styles.row, styles.bottom)}>
				<div className={cx(styles.col, styles.left)}>
					<DemoTooltip />
				</div>
				<div className={cx(styles.col, styles.center)}>
					<DemoTooltip />
				</div>
				<div className={cx(styles.col, styles.right)}>
					<DemoTooltip />
				</div>
			</div>
		</div>
	</>
)

export default DemoGrid;