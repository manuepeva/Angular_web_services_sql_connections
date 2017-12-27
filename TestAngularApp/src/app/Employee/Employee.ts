
export interface IEmployee {
    ID: number;
    FIRSTNAME: string;
    LASTNAME: string;
    GENDER: string;
}

export class Employee implements IEmployee {
  

    constructor(public ID: number, public FIRSTNAME: string, public LASTNAME: string, public GENDER: string) {
      
    }
}

