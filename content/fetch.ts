export const contentGqlFetcher = async <T> ({ 
    query, variables = {}, preview = false 
}: {query: string, variables?: any, preview?:boolean}): Promise<T | undefined> => {
    const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': preview ? ` Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}` : `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
            },
            body: JSON.stringify({query, variables}),
        }
    );

    const {data, errors} = await res.json();

    if (errors) {
        console.error(errors);
        throw new Error('Failed to fetch API, cant get content');
    }

    return data as T;
}