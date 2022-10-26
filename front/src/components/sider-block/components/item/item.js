import s from './style.module.scss';

export function Item(props) {

    function handleSelect() {
        props.onClick(props.id);
    }

    return (
        <div className={`${s.itemContainer} ${props.selected && s.selected}`} onClick={handleSelect}>
            <div className={s.title}><b>{props.title}</b></div>
            <div className={s.infoContainer}>
                <div>{props.time}</div>
                <div className={s.content}>{props.content}</div>
            </div>
        </div>
    )
}