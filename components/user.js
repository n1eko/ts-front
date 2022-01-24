export default function User({id, username, channel, platform, isMuted, country}) {
    return (
        <section>
            <div>
                <h3>{username}</h3>
                <div>Channel: {channel} </div> 
                <div>Platform: {platform} </div>
                <div>Is muted: {isMuted ? 'Yes' : 'No'} </div>
                <div>Country: {country} </div>
            </div>
        </section>
    )
}
