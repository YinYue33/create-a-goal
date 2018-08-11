import { User } from './user.model';

export interface Comment {
    _id: any;
    comment: string;
    task: any;
    createdTime: any; 
    creator: any;
    creatorDetail: User; 
}