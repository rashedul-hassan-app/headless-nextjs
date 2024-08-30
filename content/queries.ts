import "server-only";
import { HeaderNavQuery, HeroQuery, LogoWallQuery } from "@/types";
import { contentGqlFetcher } from "./fetch";


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