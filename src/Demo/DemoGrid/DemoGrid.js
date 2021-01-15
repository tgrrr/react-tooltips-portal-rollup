import React from 'react';
import cn from 'classnames/bind';
import { Tooltip, Card } from '../../components';
import styles from './DemoGrid.module.css';

const cx = cn.bind(styles);

const TooltipContents = () => (
    <Card>
        Tooltip Body
    </Card>
);

// Card wrapper to test that tooltip works outside of current parent node
const DemoTooltip = ({ position = '' }) => (
    <Card>
        <Tooltip content={<TooltipContents />}>
            <button type='button'>
                Click me
                <br />
                {position}
            </button>
        </Tooltip>
    </Card>
);

const DemoGrid = () => (
    <>
        <div className={cx(styles.row, styles.top)}>
            <div className={cx(styles.col, styles.left)}>
                <DemoTooltip position='Top Left' />
            </div>
            <div className={cx(styles.col, styles.center)}>
                <DemoTooltip position='Top Centre' />
            </div>
            <div className={cx(styles.col, styles.right)}>
                <DemoTooltip position='Top Right' />
            </div>
        </div>

        <div className={cx(styles.row, styles.middle)}>
            <div className={cx(styles.col, styles.left)}>
                <DemoTooltip position='Middle Left' />
            </div>
            <div className={cx(styles.col, styles.center)}>
                <DemoTooltip position='Middle Centre' />
            </div>
            <div className={cx(styles.col, styles.right)}>
                <DemoTooltip position='Middle Right' />
            </div>
        </div>

        <div className={cx(styles.row, styles.bottom)}>
            <div className={cx(styles.col, styles.left)}>
                <DemoTooltip position='Bottom Left' />
            </div>
            <div className={cx(styles.col, styles.center)}>
                <DemoTooltip position='Bottom Centre' />
            </div>
            <div className={cx(styles.col, styles.right)}>
                <DemoTooltip position='Bottom Right' />
            </div>
        </div>
    </>
);

export default DemoGrid;
