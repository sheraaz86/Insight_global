import { Component, OnInit } from '@angular/core';

import { ApplicantsTable } from './shared/applicants-table.model';
import { ApplicantsTableService } from './shared/applicants-table.service';

@Component({
	selector: 'applicants-table',
	templateUrl: 'applicants-table.component.html',
	providers: [ApplicantsTableService]
})

export class ApplicantsTableComponent implements OnInit {
	applicantsTable: ApplicantsTable[] = [];

	constructor(private applicantsTableService: ApplicantsTableService) { }

	headers: any[] = [{
		displayName: 'Title',
		field: 'TITLE'
	},
	{
		displayName: 'Description',
		field: 'DESCRIPTION'
	},
	{
		displayName: 'Client',
		field: 'CLIENT'
	}, {
		displayName: 'Client Priority',
		field: 'CLIENT_PRIORITY'
	},
	{
		displayName: 'Target Date',
		field: 'TARGET_DATE'
	},
	{
		displayName: 'Product Area',
		field: 'PRODUCT_AREA'
	},
	];

	tableData: any[] = [];

	ngOnInit() {
		this.applicantsTableService.getData().subscribe(
			data => {
				console.log(data);
				if (data instanceof Array) {
					this.tableData = data;
				}
			}
		);
	}
}