import {useMemo, useState} from "react";
import {List} from "antd";

import {Item} from './components';

import s from './style.module.scss';

export function SiderBlock(props) {
    // testData
    let items = useMemo(() => [
        {
            id: Math.random() * 10000000000000000,
            title: 'ladsadsadsdsafsdfsdfsd daslal',
            selected: true,
            time: '23.11.2007',
            content: 'QQQQQ dsadas s'
        },
        {
            id: Math.random() * 1000000000000000,
            title: 'OOOO',
            selected: false,
            time: '12:22',
            content: 'QQQQQ dsadsadsadsa asd asddas s'
        },
        {
            id: Math.random() * 1000000000000000,
            title: 'OOOO',
            selected: false,
            time: '12:22',
            content: 'QQQQQ dsadsadsadsa asd asddas s'
        },
        {
            id: Math.random() * 1000000000000000,
            title: 'OOOO',
            selected: false,
            time: '12:22',
            content: 'QQQQQ dsadsadsadsa asd asddas s'
        },
        {
            id: Math.random() * 1000000000000000,
            title: 'OOOO',
            selected: false,
            time: '12:22',
            content: 'QQQQQ dsadsadsadsa asd asddas s'
        },

    ], [])

    const itemsWithUpdateStatus = items.map(p => ({...p, selected: p.id === props.currentNode}))
    console.log(props.currentNode)

    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }

    return (
        <div className={s.siderContainer}>
            <List
                className={s.disablePadding}
                dataSource={itemsWithUpdateStatus}
                renderItem={p => <Item onClick={props.setCurrentNode} currentNode={props.currentNode} {...p}/>}
            />
        </div>
    )
}