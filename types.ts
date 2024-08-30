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

