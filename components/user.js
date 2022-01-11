import styles from '../styles/Home.module.css'

export default function User({id, username, channel, platform, isMuted, country}) {
    return (
        <section className={styles.card}>
            <h2>Name: {username}</h2>
            <p>
                <div>Channel: {channel} </div> 
                <div>Platform: {platform} </div>
                <div>Is muted: {isMuted ? 'Yes' : 'No'} </div>
                <div>Country: {country} </div>
            </p>
        </section>
    )
}
