
export interface IEmployee {
    code: string;
    name: string;
    gender: string;
    annualSal: number;
}

export class Employee implements IEmployee {
  

    constructor(public code: string, public name: string, public gender: string, public annualSal: number) {
      
    }
}

