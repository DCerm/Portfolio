import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { Button } from '@/app/ui/buttons';
import Link from 'next/link';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID, // Replace with your actual space ID
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN, // Use a secure method to store tokens
  environment: 'master' // Default is 'master'
});

// Fetch entries with a specific tag
async function fetchProperties(slug) {
    try {
        const response = await client.getEntries({
          content_type: 'property', // Replace with your content type ID
          //'metadata.tags.sys.id[in]': 'blog',
          'fields.slug[in]': slug,
          order: '-sys.createdAt', // Sorting by creation date descending
          //limit: 2, // Limit the number of items returned
        });
    
        console.log(response.items[0]);
        return response.items[0];
    } catch (error) {
        console.error('Error fetching entries:', error);
        return [];
    }
}


const options = {
    renderNode: {

        [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
            const { title, videoUrl } = node.data.target.fields;
            return <video controls src={videoUrl} title={title} />;
        },
        

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
        const url = file.url;
        const altText = file.fileName || 'Embedded Image';
        const mimeType = file.contentType;

        // Check if it's an image
          if (mimeType.startsWith("image/")) {
            return <img src={url} alt={description || title} style={{ maxWidth: "100%", height: "auto" }} />;
          }
  
          // Check if it's a video
          if (mimeType.startsWith("video/")) {
            return (
              <video controls style={{ maxWidth: "100%" }}>
                <source src={url} type={mimeType} />
                Your browser does not support the video tag.
              </video>
            );
          }
  
          // Default case: Render as a link
          return <a href={url} target="_blank" rel="noopener noreferrer">{title || "View File"}</a>;


        /*if (file && file.contentType) {
            const { contentType } = file;

            if (contentType.startsWith('video/')) {
                // Render video
                return (
                    <video controls className='mb-8 rounded-xl w-full lg:w-4/5 flex justify-center items-center self-center'>
                        <source src={imageUrl} type={contentType} />
                        Your browser does not support the video tag.
                    </video>
                );
            } else if (contentType.startsWith('image/')) {
                // Render image
                return (
                    <img src={imageUrl} alt={altText} className='mb-8 rounded-xl w-full lg:w-4/5 flex justify-center items-center self-center' />
                );
            }
        
            //return null;

        }*/
        // Add more custom renderers as needed

        //return <img src={imageUrl} alt={altText} className='mb-8 rounded-xl w-full lg:w-4/5 flex justify-center items-center self-center' />;

      }
    },
};

export default async function Page({ params }) {

    const entries = await fetchProperties(`${params.slug}`);

    return (
        <>
            <section className='bg-grey lg:flex gap-12 lg:py-5 items-center'>
                <div className='lg:w-1/2'>
                    <h1 className=' text-[9vw] md:text-[8vw] lg:text-[4vw] leading-none' >{entries.fields.heading}</h1>
                    <p className="font-semibold mt-5 uppercase text-gold">Key features:</p>
                    <div className=' w-full'>{entries.fields.features.map((item, index) => (
                        <span className='text-sm border border-grey px-1 py-0.5 rounded-md mr-1' key={index}>{item}</span>
                    ))}</div>

                    <div className='mt-5 hidden lg:block'>
                        <p className="text-xl lg:text-[30px] pb-2.5">Price: {entries.fields.price}</p>
                        <Button url={entries.fields.contact} text='Talk to sales' />
                    </div>
                </div>

                <div className='lg:w-1/2 mt-5 lg:mt-0'>
                    <img 
                        src={entries.fields.featuredImage.fields.file.url}
                        alt={entries.fields.featuredImage.description}
                        width={500}
                        height={400}
                        className='w-full rounded-2xl'
                    />

                    <div className='mt-5 lg:hidden'>
                        <p className="text-xl lg:text-[30px] pb-2.5">Price: {entries.fields.price}</p>
                        <Button url={entries.fields.contact} text='Talk to sales' />
                    </div>
                </div>
            </section>

            <section className=''>
                <div className='lg:px-10p'>
                   {documentToReactComponents(entries.fields.details, options)}
                   <Button url={entries.fields.contact} text='Talk to sales' />
                </div>
            </section>
        </>
    )
}