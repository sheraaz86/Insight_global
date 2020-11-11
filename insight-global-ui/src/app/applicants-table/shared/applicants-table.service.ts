import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApplicantsTableService {

    constructor(private httpClient: HttpClient) { }

    getData() {
        return this.httpClient.get('http://localhost:4567/application');
    }

}