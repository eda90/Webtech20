import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { DataService } from '../shared/data.service';
import {Data} from "../shared/data";


// TODO: Replace this with your own data model type


// TODO: replace this with real data from your application
const EXAMPLE_DATA: Data[] = [


    {
      id: 1,
      forename: 'Catherine',
      surname: 'Williams',
      email: 'cwilliamsl@360.cn'
    },
    {
      id: 2,
      forename: 'Adam',
      surname: 'Anderson',
      email: 'aanderson8@google.fr'
    },
    {
      id: 3,
      forename: 'Susan',
      surname: 'Andrews',
      email: 'sandrewsn@google.co.jp'
    },
    {
      id: 4,
      forename: 'Catherine',
      surname: 'Andrews',
      email: 'candrewsp@noaa.gov'
    },
    {
      id: 5,
      forename: 'Alan',
      surname: 'Bradley',
      email: 'abradley1c@globo.com'
    },
    {
      id: 6,
      forename: 'Anne',
      surname: 'Brooks',
      email: 'abrooks16@bravesites.com'
    },
    {
      id: 7,
      forename: 'Russell',
      surname: 'Brown',
      email: 'rbrownq@nifty.com'
    },
    {
      id: 8,
      forename: 'Ryan',
      surname: 'Burton',
      email: 'rburton18@foxnews.com'
    },
    {
      id: 9,
      forename: 'Roy',
      surname: 'Campbell',
      email: 'rcampbell1@geocities.com'
    },
    {
      id: 10,
      forename: 'Russell',
      surname: 'Campbell',
      email: 'rcampbell17@eventbrite.com'
    },
    {
      id: 11,
      forename: 'Bonnie',
      surname: 'Coleman',
      email: 'bcoleman11@fc2.com'
    },
    {
      id: 12,
      forename: 'Ernest',
      surname: 'Coleman',
      email: 'ecoleman15@businessweek.com'
    },
    {
      id: 13,
      forename: 'Richard',
      surname: 'Cruz',
      email: 'rcruz7@unc.edu'
    },
    {
      id: 14,
      forename: 'Sean',
      surname: 'Cruz',
      email: 'scruz10@answers.com'
    },
    {
      id: 15,
      forename: 'Rebecca',
      surname: 'Cunningham',
      email: 'rcunninghamd@mac.com'
    },
    {
      id: 16,
      forename: 'Margaret',
      surname: 'Evans',
      email: 'mevansh@pcworld.com'
    },
    {
      id: 17,
      forename: 'Jeffrey',
      surname: 'Ford',
      email: 'jford14@cnet.com'
    },
    {
      id: 18,
      forename: 'Andrea',
      surname: 'Gardner',
      email: 'agardnerv@woothemes.com'
    },
    {
      id: 19,
      forename: 'Deborah',
      surname: 'George',
      email: 'dgeorge6@furl.net'
    },
    {
      id: 20,
      forename: 'Sean',
      surname: 'Gibson',
      email: 'sgibsony@alexa.com'
    },
    {
      id: 21,
      forename: 'Virginia',
      surname: 'Graham',
      email: 'vgrahamk@aol.com'
    },
    {
      id: 22,
      forename: 'Steven',
      surname: 'Hamilton',
      email: 'shamiltonu@state.tx.us'
    },
    {
      id: 23,
      forename: 'Virginia',
      surname: 'Hawkins',
      email: 'vhawkinsf@ehow.com'
    },
    {
      id: 24,
      forename: 'Edward',
      surname: 'Hicks',
      email: 'ehicksc@pcworld.com'
    },
    {
      id: 25,
      forename: 'Mark',
      surname: 'Johnson',
      email: 'mjohnsonj@hostgator.com'
    },
    {
      id: 26,
      forename: 'Ruth',
      surname: 'Jordan',
      email: 'rjordan1a@smugmug.com'
    },
    {
      id: 27,
      forename: 'Antonio',
      surname: 'Kim',
      email: 'akim4@odnoklassniki.ru'
    },
    {
      id: 28,
      forename: 'Jennifer',
      surname: 'Marshall',
      email: 'jmarshallt@gnu.org'
    },
    {
      id: 29,
      forename: 'Eric',
      surname: 'Matthews',
      email: 'ematthews5@independent.co.uk'
    },
    {
      id: 30,
      forename: 'Raymond',
      surname: 'Mcdonald',
      email: 'rmcdonald2@ihg.com'
    },
    {
      id: 31,
      forename: 'Eric',
      surname: 'Miller',
      email: 'emillere@creativecommons.org'
    },
    {
      id: 32,
      forename: 'Jonathan',
      surname: 'Morales',
      email: 'jmoralesa@ovh.net'
    },
    {
      id: 33,
      forename: 'Marie',
      surname: 'Morgan',
      email: 'mmorganb@cloudflare.com'
    },
    {
      id: 34,
      forename: 'Amanda',
      surname: 'Nelson',
      email: 'anelson13@indiatimes.com'
    },
    {
      id: 35,
      forename: 'Lisa',
      surname: 'Olson',
      email: 'lolsonr@telegraph.co.uk'
    },
    {
      id: 36,
      forename: 'Alice',
      surname: 'Ortiz',
      email: 'aortizw@histats.com'
    },
    {
      id: 37,
      forename: 'Peter',
      surname: 'Phillips',
      email: 'pphillipss@1688.com'
    },
    {
      id: 38,
      forename: 'Matthew',
      surname: 'Porter',
      email: 'mporter9@europa.eu'
    },
    {
      id: 39,
      forename: 'Tammy',
      surname: 'Ray',
      email: 'trayx@weather.com'
    },
    {
      id: 40,
      forename: 'Mark',
      surname: 'Richardson',
      email: 'mrichardson1d@ihg.com'
    },
    {
      id: 41,
      forename: 'Joan',
      surname: 'Roberts',
      email: 'jroberts12@alibaba.com'
    },
    {
      id: 42,
      forename: 'Kathleen',
      surname: 'Rose',
      email: 'kroseg@pinterest.com'
    },
    {
      id: 43,
      forename: 'Steve',
      surname: 'Sanders',
      email: 'ssanders1b@wikispaces.com'
    },
    {
      id: 44,
      forename: 'Shirley',
      surname: 'Scott',
      email: 'sscottm@macromedia.com'
    },
    {
      id: 45,
      forename: 'Lillian',
      surname: 'Stephens',
      email: 'lstephens19@hugedomains.com'
    },
    {
      id: 46,
      forename: 'Nicole',
      surname: 'Thompson',
      email: 'nthompson3@admin.ch'
    },
    {
      id: 47,
      forename: 'Marie',
      surname: 'Thompson',
      email: 'mthompsonz@yelp.com'
    },
    {
      id: 48,
      forename: 'Alan',
      surname: 'Vasquez',
      email: 'avasquezo@miibeian.gov.cn'
    },
    {
      id: 49,
      forename: 'Mildred',
      surname: 'Watkins',
      email: 'mwatkins0@miibeian.gov.cn'
    },
    {
      id: 50,
      forename: 'Eugene',
      surname: 'Williams',
      email: 'ewilliamsi@deliciousdays.com'
    }
  ];


/**
 * Data source for the Table view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableDataSource extends DataSource<Data> {
  data: Data[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor(private ds: DataService) {
    super();
    this.data = this.ds.getAll();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Data[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    // @ts-ignore
    // @ts-ignore
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {
  }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Data[]): Data[] {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Data[]): Data[] {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'forename':
          return compare(a.forename, b.forename, isAsc);
        case 'surname':
          return compare(a.surname, b.surname, isAsc);
        case 'email':
          return compare(a.email, b.email, isAsc);
        case 'id':
          return compare(+a.id, +b.id, isAsc);
        default:
          return 0;
      }
    });
  }
}
  /** Simple sort comparator for example ID/Name columns (for client-side sorting). */
  function compare(a: string | number, b: string | number, isAsc: boolean): number {

    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
