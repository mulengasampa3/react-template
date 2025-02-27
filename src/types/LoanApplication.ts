export interface LoanApplicationData {
    customerName: string;
    amount: number;
   
  }

export interface LoanApplication {
    id: number;
    customerName: string;
    amount: number;
    status: string;
    documents: []
  }

  export interface LoanApplication extends LoanApplicationData {
    id: number;
    status: string;
  }
  

  export type ApplicationStatus = 'New Application' | 'Documentation' | 'Due Diligence' | 'Payment' | 'Disqualified';
