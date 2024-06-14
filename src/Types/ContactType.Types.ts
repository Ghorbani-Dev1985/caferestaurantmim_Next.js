import { ReactNode } from "react";

export interface ContactType {
    _id: number,
    createdAt: string,
    name: string,
    phone: string,
    body: string,
    answer: boolean,
    act: ReactNode
  }