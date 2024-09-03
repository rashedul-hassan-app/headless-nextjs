import "server-only";
import { CustomerPostQuery, HeaderNavQuery, HeroQuery, LogoWallQuery } from "@/types";
import { contentGqlFetcher } from "./fetch";

export const getSlugsForPosts = async () => {
    const query = `#graphql
    {
        customerPostCollection {
            items {
                slug
            }
        }
    }

    `

    const data = await contentGqlFetcher<{
        customerPostCollection: {
            items: {
                slug: string
            }[]
        }
    }>({query})

    if (!data) {
        throw new Error('Failed to fetch API, cant get content');
    }
    return data;
}

export const getContentForCustomerPost = async (slug: string) => {
    const query = `#graphql
    query CustomerPostCollection($where: CustomerPostFilter) {
        customerPostCollection(where: $where) {
                items {
                title
                body {
                    json
                }
                customer {
                    logo {
                    height
                    url
                    width
                    }
                    name
                }
                slug
                }
            }
        }
    `

    const data = await contentGqlFetcher<CustomerPostQuery>({
        query,
        variables: {
            where: {
                slug
            }
        }
    })

    if (!data) {
        throw new Error('Failed to fetch API, cant get content');
    }
    return data;
};

export const getContentForHeaderNav = async () => {
    const query = `#graphql
    query NavigationCollection($where: NavigationFilter) {
        navigationCollection(where: $where) {
            items {
            name
            linksCollection {
                items {
                link
                label
                }
            }
            }
        }
        }
        `

    const data = await contentGqlFetcher<HeaderNavQuery>({
    query,
    variables: {
        where: {
            name: "Header"
         }
        }
    })

    if (!data) {
        throw new Error('Failed to fetch API, cant get content');
    }
    return data;    
};

export const getContentForLogoWall = async () => {
    const query = `#graphql
        query Asset($where: AssetFilter) {
            assetCollection(where: $where) {
                items {
                height
                width
                url
                title
                }
            }
    }
    `
    const data = await contentGqlFetcher<LogoWallQuery>({
        query,
        variables: {
            where: {
              title_contains: "client"
            }
          }
    })

    if (!data) {
        throw new Error('Failed to fetch API, cant get content');
    }
    return data;
}

export const getContentForHero = async () => {
    const query = `#graphql
    query HeroCollection {
        heroCollection {
            items {
            title
            preTitle
            subtitle
            callToActionsCollection {
                items {
                link
                label
                }
            }
            }
        }
    }
    `

    const data = await contentGqlFetcher<HeroQuery>({query})
    

    if (!data) {
        throw new Error('Failed to fetch API, cant get content');
    }

    return data;
}