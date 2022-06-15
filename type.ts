
import { IconType } from "react-icons/lib"

export interface ISkill{
    name: string
    level: string
    levels: string
    Icon: IconType
};

export interface IProject{
    id:number,
    name: string
    description: string
    image_path: string
    deployed_url: string
    github_url: string
    category: Category[]
    key_tags: string[]

};

export type Category = 'react' | 'next' | 'python' | 'dataanalysis';