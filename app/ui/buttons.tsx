import Link from 'next/link';
import { MdOutlineArrowOutward } from 'react-icons/md';



function Button({url, text} : {url: string, text: string}) {
	return (
		<Link href={url} className="mb-6 lg:my-10"><button className="rounded-full pl-8 pr-2 py-2 flex gap-4 items-center text-xl border border-gray-500 hover:bg-col hover:text-black">{text} 
            <MdOutlineArrowOutward className='rh45 p-1 bg-white rounded-full text-black text-30px' />
        </button></Link>
	)
}
function BigButton({url, className, text} : {url: string, className: string, text: string}) {
	return (
		<Link href={url} >
			<button className={className + ' text-xl font-bold px-50 py-5 rounded-xl hover:bg-white hover:text-black'}> {text} </button>  
		</Link>
	)
}

export { Button, BigButton }