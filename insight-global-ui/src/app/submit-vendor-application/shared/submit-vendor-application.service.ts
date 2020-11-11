import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class SubmitVendorApplicationService {

    constructor(private httpClient: HttpClient) {

    }

    postData(job) {
        let httpHeaders = new HttpHeaders({
			'Content-Type' : 'application/json',
			'Cache-Control': 'no-cache'
			 });    
			 let options = {
			headers: httpHeaders
			 };   
		
        return this.httpClient.post('http://localhost:4567/application', job,options);
    }

}