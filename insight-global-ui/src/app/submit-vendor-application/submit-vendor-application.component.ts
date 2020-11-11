import { Component, OnInit } from '@angular/core';
import { SubmitVendorApplicationService } from './shared/submit-vendor-application.service';

@Component({
	selector: 'submit-vendor-application',
	templateUrl: 'submit-vendor-application.component.html',
	providers: [SubmitVendorApplicationService]
})

export class SubmitVendorApplicationComponent implements OnInit {

	constructor(private submitVendorApplicationService: SubmitVendorApplicationService) { }

	selectedJob = {
		title: '',
		description: '',
		client: 'Client A',
		client_priority: 1,
		target_date: '',
		product_area: 'Policies',
	}

	job = {
		title: '',
		description: '',
		client: 'Client A',
		client_priority: 1,
		target_date: '',
		product_area: 'Policies',
	}

	ngOnInit() {

	}

	saveJob(job) {
		this.submitVendorApplicationService.postData({ ...job }).subscribe(
			data => {
				console.log(data);
				this.selectedJob = {
					title: '',
					description: '',
					client: 'Client A',
					client_priority: 1,
					target_date: '',
					product_area: 'Policies',
				};
			}
		);
		this.selectedJob = {
			title: '',
			description: '',
			client: 'Client A',
			client_priority: 1,
			target_date: '',
			product_area: 'Policies',
		};
	}
}