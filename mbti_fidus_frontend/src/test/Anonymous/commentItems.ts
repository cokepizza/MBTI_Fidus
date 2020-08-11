import { CommentItem } from "src/components/Anonymous/Comment/interfaces";

export const testItem: CommentItem[] = [
    {
        id: 'commenter',
        content: 'ipsum lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        depth: 0
    },
    {
        id: 'commenter',
        content: 'ipsum lorem is simply dummy text of the printing and typesetting industry. ',
        depth: 0
    },
    {
        id: 'commenter',
        content: 'ipsum lorem is simply dummindustry',
        depth: 1
    },
    {
        id: 'commenter',
        content: 'ipsum lorem is simply dummy text o',
        depth: 2
    },
    {
        id: 'commenter',
        content: 'ipsum lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        depth: 0
    },
    {
        id: 'commenter',
        content: 'ipsum lorem is simply dummy text of ',
        depth: 1
    },
    {
        id: 'commenter',
        content: 'ipsum lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        depth: 1
    },
    {
        id: 'commenter',
        content: 'ipsum lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        depth: 2
    },

]