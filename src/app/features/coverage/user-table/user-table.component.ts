import { Component, OnInit, ViewChild } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { Coverage, CoverageWanted, OrganizationId, User, WantedDataStructure } from '../../../coverage-types';
import { UserService } from '../../../user.service';
import { AgGridAngular } from 'ag-grid-angular';
import { mergeMap, switchMap, retry, map, catchError, filter, scan, reduce } from 'rxjs/operators';
import { ICellRendererParams, ValueGetterParams } from 'ag-grid-community';
import { ROLES } from '../../../mock-data';

function groupBy<T, A>(list: T[], keyGetter: (x: T) => void): Map<A, T> {
  const newMap = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = newMap.get(key);
    if (!collection) {
      newMap.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return newMap;
}

function checkBoxRenderer(params: ICellRendererParams): HTMLElement {
  const text = params.value ? 'Yes!' : 'No!';
  const newContent = document.createTextNode(text);
  const element = document.createElement('span');
  element.appendChild(newContent);
  return element;
}

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})

export class UserTableComponent implements OnInit {
  @ViewChild('agGrid') agGrid!: AgGridAngular;

  users$!: Observable<User[]>;
  coverages$!: Observable<Coverage[]>;
  wantedDatastructure$!: Observable<WantedDataStructure[]>;
  quickFilter = '';

  rolesColums = ROLES.map(role => {
    return {
      headerName: role.role,
      valueGetter: (params: ValueGetterParams) => {
        return params.data.coverages.some((coverage: CoverageWanted) => coverage.role.role === role.role);
      },
      cellRenderer: checkBoxRenderer,
      sortable: true,
      filter: true
    };
  });

  columns = [
    ...[
      { field: 'organization.name', headerName: 'Organization', sortable: true, filter: true, checkboxSelection: true },
      { field: 'user.fullName', headerName: 'Full name', sortable: true, filter: true }
    ], ...this.rolesColums];

  constructor(private userService: UserService) {
    this.users$ = this.userService.users$;
    this.coverages$ = this.userService.coverages$;
    this.wantedDatastructure$ = this.userService.wantedDatastructure$;
  }

  ngOnInit(): void {
    // todo: transform data on server instead?
    const test =
      forkJoin(this.userService.users$, this.userService.coverages$).pipe(
        map(usersAndCoverages => {
          const [users, coverages] = usersAndCoverages;
          const orgs = groupBy<Coverage, OrganizationId>(coverages, coverage => coverage.organization);
          return usersAndCoverages;
        })
      );
  }

  setQuickFilter = () => this.agGrid?.api.setQuickFilter(this.quickFilter);

}
