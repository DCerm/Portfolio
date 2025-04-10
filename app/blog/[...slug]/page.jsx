import { notFound } from 'next/navigation';
import { getPageFromSlug } from '@/app/utils/content.js';
import Link from 'next/link';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';




const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-8">{children}</p>,
      [BLOCKS.HEADING_3]: (node, children) => <h4 className="text-[20px] lg:text-[25px] font-semibold ">{children}</h4>,
      [BLOCKS.HEADING_4]: (node, children) => <h4 className="text-[20px] lg:text-[25px] font-semibold ">{children}</h4>,
      [INLINES.HYPERLINK]: (node, children) => (
        <Link href={node.data.uri} target="" rel="noopener noreferrer" className='underline hover:underline hover:decoration-wavy underline-offset-5 hover:decoration-gold'>
          {children}
        </Link>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { file, description } = node.data.target.fields;
        const imageUrl = file.url;
        const altText = description || 'Embedded Image';
        return <img src={imageUrl} alt={altText} className='mb-8 rounded-xl w-full lg:w-4/5 flex justify-center items-center self-center' />
      }
      // Add more custom renderers as needed
    },
};


async function ComposablePage({ params }) {
  const { slug } = params;
  
  const pageSlug = slug.join('/');

  try {
    const page = await getPageFromSlug(`/${pageSlug}`);
    console.log(page)

    if (!page) {
      return notFound();
    }

    return (
      /*<div data-sb-object-id={page.id}>
        {(page.sections || []).map((section, idx) => {
          const Component = componentMap[section.type];
          return <Component key={idx} {...section} />;
        })}
      </div>*/

      <>
            <section className='lg:flex gap-12 lg:py-2.5 items-center bg-grey'>
                <div className="lg:w-1/2">
                <h1 className="text-[30px] lg:text-[4vw] font-semibold leading-none" data-sb-field-path="inpostTitle">
                    {page.inpostTitle}
                </h1>
                <p className='text-grey text-sm mt-2.5'>Published {page.publishedDate}. | &nbsp; 
                    <Link href={page.postAuthor.authorUrl} className='hover:underline decoration-wavy' referrerPolicy='nofollow noReferral'>Written by {page.postAuthor.authorName}</Link>
                </p>
                <p className="my-5 lg:mt-8">{page.seoDescription}</p>
                </div>
                <div className='lg:w-1/2'>
                <Image 
                    src={page.featuredImage.src}
                    alt={page.featuredImage.alt}
                    width={500}
                    height={500}
                    className='w-full rounded-2xl'
                />
                </div>
                
            </section>

            <section className="">
                <div className='lg:px-10p'>
                {documentToReactComponents(page.postContent, options)}
                </div>
            </section>
      </>
    );
  } catch (error) {
    console.error(error.message);
    return notFound();
  }
}

export default ComposablePage