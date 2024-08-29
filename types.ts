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