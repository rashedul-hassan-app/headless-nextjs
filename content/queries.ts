import { HeroQuery } from "@/types";
import { contentGqlFetcher } from "./fetch";

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