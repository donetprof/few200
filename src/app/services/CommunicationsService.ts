import { BehaviorSubject, Observable } from 'rxjs';

export class CommunicationsService {
  private data: string;
  private subject = new BehaviorSubject<string>('');

  getData(): Observable<string> {
    return this.subject.asObservable();
  }

  setData(val: string): void {
    this.data = val;
    this.subject.next(this.data);
  }
}
