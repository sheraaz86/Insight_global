import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { ApplicantsTableComponent } from './applicants-table.component';
import { ApplicantsTableService } from './shared/applicants-table.service';
import { ApplicantsTable } from './shared/applicants-table.model';

describe('a applicants-table component', () => {
	let component: ApplicantsTableComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: ApplicantsTableService, useClass: MockApplicantsTableService },
				ApplicantsTableComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ApplicantsTableComponent], (ApplicantsTableComponent) => {
		component = ApplicantsTableComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original applicants-table service
class MockApplicantsTableService extends ApplicantsTableService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
