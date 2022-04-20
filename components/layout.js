import Meta from './meta'

export default function Layout ({ children }) {
  return (
    <div className='flex flex-col h-screen'>
      <Meta />
      <main>{children}</main>
    </div>
  )
}
