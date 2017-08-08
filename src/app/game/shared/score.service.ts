import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ScoreService {
    score: number = 0;
    private subject = new Subject();

    setScore(scoreValue: number) {
        this.subject.next({ score: this.score });
    }
    getScore(): Observable<any> {
        return this.subject.asObservable();
    }
}