import Link from 'next/link';
import { ArrowLongRightIcon, PhoneIcon } from '@heroicons/react/24/outline';




function LinkText({url, className, text} : {url: string, className: string, text: string}) {
	return (
		<Link href={url} className={className}> {text}
			<ArrowLongRightIcon className="down rh45"/>
		</Link>
	)
}

function Phone({tel} : {tel: string}) {
	return (
		<Link href={"tel:"+tel}>
			<PhoneIcon className="down rh45"/> {tel} <ArrowLongRightIcon className="down rh45"/>
		</Link>
	)
}

function Button({url, className, text} : {url: string, className: string, text: string}) {
	return (
		<Link href={url} >
			<button className={className + ' text-xl px-10 pt-3 pb-4 rounded-xl bg-gold text-black hover:bg-golden'}> {text} </button>  
		</Link>
	)
}
function BigButton({url, className, text} : {url: string, className: string, text: string}) {
	return (
		<Link href={url} >
			<button className={className + ' text-xl font-bold px-50 py-5 rounded-xl hover:bg-white hover:text-black'}> {text} </button>  
		</Link>
	)
}

export { Phone, LinkText, Button, BigButton }