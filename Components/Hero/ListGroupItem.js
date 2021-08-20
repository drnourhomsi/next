import styles from '../../styles/Hero.module.scss'

export default function ListGroupItem(props) {
    return (
        <li className={styles.socialmedia_item} >
            <i className={props.icon}></i>
            <a href={props.href} target="_blank" rel="noreferrer">{props.media}</a>
        </li>
    )
}