export default function User({id, username, channel, platform, isMuted, country}) {
    return (
        <section className="flex justify-center mt-6">
            <div className="flex top-0 right-0 p-3 space-x-1 ">
                <h3>{username}</h3>
                <div>Channel: {channel} </div> 
                <div>Platform: {platform} </div>
                <div>Is muted: {isMuted ? 'Yes' : 'No'} </div>
                <div>Country: {country} </div>
            </div>
        </section>
    )
}
