export const {}

declare global {
    interface String {
        splice: (start: number, delCount: number, newSubStr: string) => string
    }
}