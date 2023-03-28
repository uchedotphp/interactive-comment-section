export interface Comment {
    id: number
    content: string
    score: number
    createdAt: string | Date | number
}

type direction = 'up' | 'down'