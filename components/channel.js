export default function Channel({id, name, capacity, hasPassword, children}) {
    return (
        <div>
            <h3 className='text-3xl font-bold text-blue-500'>{name}</h3>
            <div className='pt-0.5 mt-4 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 mb-3'></div>
            <div className='mb-6'>{children}</div>
        </div>
    )
}
