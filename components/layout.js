import Footer from "./footer";
import Meta from "./meta";

export default function Layout({children}) {
    return (
        <div class="flex flex-col h-screen">
            <Meta/>
            <main className='flex-grow'>{children}</main>
        </div>
    )
}
