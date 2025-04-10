import { createClient } from 'contentful';
import { H2, H4 } from '../ui/headings';
import Link from 'next/link';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID, // Replace with your actual space ID
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN, // Use a secure method to store tokens
  environment: 'master' // Default is 'master'
});

// Fetch entries with a specific tag
async function fetchEntriesByTag() {
  try {
    const response = await client.getEntries({
      content_type: 'singleBlogPost', // Replace with your content type ID
      //'metadata.tags.sys.id[in]': 'blog',
      order: '-sys.createdAt', // Sorting by creation date descending
      //limit: 2, // Limit the number of items returned
    });

    console.log(response.items);
    return response.items;
  } catch (error) {
    console.error('Error fetching entries:', error);
    return [];
  }
}


async function Page() {
  const entries = await fetchEntriesByTag();

  return (
    <section>
      <H2 className="" text="Blog Posts" />
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
        {entries.map((entry) => (
            <Link href={'/blog/' + entry.fields.slug} key={(entry.sys.id)}>
                <div className='border-grey border rounded-xl bg-grey p-5 hover:shadow-[0_10px_10px_rgba(0,0,0,0.25)] transition duration-150' key={entry.sys.id}>                   
                    <img src={entry.fields.featuredImage.fields.file.url} 
                        alt={entry.fields.featuredImage.description} 
                        className='rounded-lg mb-2.5'    
                    />  
                    <H4 className="" text={entry.fields.inpostTitle} />
                    <p className='text-lg lg:pt-5 hidden'>{entry.fields.seoDescription}</p>
                                      
                </div>
            </Link>
        ))}
      </div>
    </section>
  );
}

export default Page