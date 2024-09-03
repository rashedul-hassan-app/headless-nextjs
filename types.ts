export type CustomerPostQuery = {
    customerPostCollection:{
        items: {
            title: string
            slug: string
            body: {
                json: JSON
            }
            customer: {
                logo: {
                    height: number
                    url: string
                    width: number
                }
                name: string
            }
        }[]
    }
};

export type HeaderNavQuery = {
    navigationCollection: {
        items: {
            name: string
            linksCollection: {
                items: {
                    link: string
                    label: string
                }[]
            }
        }[]
    }
}



export type LogoWallQuery = {
    assetCollection: {
        items: {
            height: number
            width: number
            url: string
            title: string
        }[]
    }
}


export type HeroQuery = {
    heroCollection: {
        items : {
            title: string
            preTitle: string
            subtitle: string
            callToActionsCollection: {
                items: {
                link: string
                label: string
                }[]
            }
        }[]
    }
}

