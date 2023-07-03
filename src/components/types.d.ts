type theme = 'system' | 'light' | 'dark'
type direction = 'up' | 'down'
type categories = 'unlabelled' | 'engineering' | 'marketing' | 'design' | 'human resources'
type server = 'local' | 'online'
type createdDate = string | Date | number
export interface AppSettings {
    data: server,
    theme: theme
}
export interface User {
    uid: string
    fullName: string
    imgUrl: string
}
export interface Comment {
    id: number
    content: string
    score: number
    createdAt: createdDate
    category?: string
    user?: User
}

export interface Reply {
    commentId: number
    userDetails: User
    isThread: boolean
    createdAt: createdDate
    content: string
}