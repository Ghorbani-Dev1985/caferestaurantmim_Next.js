import { ReactNode } from "react";

export interface BlogType {
    _id: number;
    cover: string;
    title: string;
    shortName: string;
    description: string;
    body: string;
    publish: boolean;
    act: ReactNode;
  };