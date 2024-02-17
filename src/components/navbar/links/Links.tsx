import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import "./link.css"

const lins =[
    {
        path:"/",
        title:"homepage"
    },
    {
        path:"/about",
        title:"about"
    },
    {
        title:"admin",
        path:"/admin"
    },
    {
        title:"contact",
        path:"/contact"
    },
    {
        title:"blog",
        path:"/blog"
    }
]
function Links() {
  return (
    <div className='md:flex gap-12 font-bold items-center text-blue-950 ' id='btn'>
       <div className='flex jus'> <FontAwesomeIcon icon={faClose} className=''/></div>
       {lins.map(lin=>{
        return(
            <h3 key={lin.path} className='my-4 md:my-0' id='linked'><Link href={lin.path} >{lin.title}</Link></h3>
        )
      })}

      <h3 className='bg-green-400 py-3 px-4 rounded-full text-center'><Link href="/book">Book a place</Link></h3>
    </div>
  )
}

export default Links
