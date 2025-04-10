  /*  
import { createClient } from 'contentful';
import Link from 'next/link';
import { H4 } from '../ui/headings';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID, // Replace with your actual space ID
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN, // Use a secure method to store tokens
  environment: 'master' // Default is 'master'
});

// Fetch entries with a specific tag
async function fetchProperties() {
  try {
    const response = await client.getEntries({
      content_type: 'property', // Replace with your content type ID
      //'metadata.tags.sys.id[in]': 'blog',
      order: '-sys.createdAt', // Sorting by creation date descending
      limit: 3, // Limit the number of items returned
    });

    console.log(response.items);
    console.log(response.items[0].fields.features);
    return response.items;
  } catch (error) {
    console.error('Error fetching entries:', error);
    return [];
  }
}

async function fetchBlog() {
    try {
      const response = await client.getEntries({
        content_type: 'singleBlogPost', // Replace with your content type ID
        //'metadata.tags.sys.id[in]': 'blog',
        order: '-sys.createdAt', // Sorting by creation date descending
        limit: 3, // Limit the number of items returned
      });
  
      console.log(response.items);
      return response.items;
    } catch (error) {
      console.error('Error fetching entries:', error);
      return [];
    }
}


async function Properties() {
    const entries = await fetchProperties();
  
    return (
      <>
  
      <section className='lg:pt-6'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
          {entries.map((entry) => (
              <Link href={'/properties/' + entry.fields.slug} key={(entry.sys.id)}>
                  <div className='border-grey border rounded-xl bg-grey p-5 hover:shadow-[0_10px_10px_rgba(0,0,0,0.25)] transition duration-150' key={entry.sys.id}>                   
                      <img src={entry.fields.featuredImage.fields.file.url} 
                          alt={entry.fields.featuredImage.description} 
                          className='rounded-lg mb-2.5'    
                      />  
                      <H4 className="" text={entry.fields.heading} />
                      <div className=' w-full'>{entry.fields.features.map((item, index) => (
                          <span className='text-sm border border-grey px-1 py-0.5 rounded-md mr-1' key={index}>{item}</span>
                      ))}</div>
                              
                  </div>
              </Link>
          ))}
        </div>
      </section>
      </>
    );
}

async function Blog() {
    const entries = await fetchBlog();
  
    return (
      <section>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 md:auto-cols-fr'>
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
  

export { Properties, Blog }
*/