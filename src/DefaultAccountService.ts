import { AccountService } from './AccountService';

export class DefaultAccountService implements AccountService {
  isAccountActive(accountId: string): boolean {
    // Logic to check if account is active
    return true;
  }
}
