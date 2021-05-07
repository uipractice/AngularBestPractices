import { Component, OnInit, AfterViewChecked, ViewChild } from '@angular/core';
import * as data from './data.json';
import { FilesreadService } from '../services/filesread.service';
declare const PR: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  preserveWhitespaces: true,
})
export class DashboardComponent implements OnInit, AfterViewChecked {

  data: any = (data as any).default;
  subData: any;
  codePreview: Map<string, string>;
  prettyData: any
  code: any;
  title: any;
  description: any;
  codeSnippet:any;
  exampleCodeLink: any;
  id: number;
  loadAPI: Promise<any>;
  url = 'http://iknow.com/this/does/not/work/either/file.js';
  constructor(private fileService: FilesreadService) { PR.prettyPrint(); }
  public ngAfterViewChecked(): any {
    // PR.prettyPrint();
  }
  language= 'html';
  interpolate = {
    language: 'language interpolated'
  };
  
  public loadScript() {
    console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = this.url;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  ngOnInit(): void {
    console.log('data',this.data)
    let data={
      "id": 1,
      "category": "strict:true- JS",
      "title": "strict:true",
      "description": "If you are starting a new project, it is worth setting strict:true in the tsconfig.json file to enable all strict type checking options.Inside tsconfig.json file add the following entry in compiler options:",
      "codeSnippet": `'compilerOptions':{'strict':true,}`,
      "isShow": false,
      "exampleCodeLink": "https://angular.io/guide/strict-mode"
    }
    this.loadNavData(data);
    // console.log(data);
  }
  loadNavData(data) {
    console.log('load data',data)
    this.subData = data
    var parent = document.createElement('div'),
      pre = document.createElement('pre'),
      code = document.createElement('code');

    this.title = data.title;
    this.description = data.description;
    this.codeSnippet = data.codeSnippet;
    this.id = data.id;
    this.exampleCodeLink = data.exampleCodeLink
    // this.fileService.getFileDataAsync(data.codeSnippet).then((res) => {
    //   document.getElementById('codeHub').innerHTML = ''
    //   pre.innerHTML = ''
    //   code.innerHTML = ''
    //   parent.remove()
    //   pre.remove()
    //   code.remove()

    //   this.code = res
    //   var text = document.createTextNode(this.code);
    //   code.appendChild(text);
    //   pre.appendChild(code);
    //   document.getElementById('codeHub').appendChild(pre);
    //   document.getElementById('data-sec').appendChild(document.getElementById('codeHub'));
    //   pre.className = 'prettyprint linenums lang-ts'


    //   setTimeout(() => {
    //     PR.prettyPrint();
    //   }, 1000)

    // })


  }


  content1=`@Component({

            selector: 'my-app',
            
            template: './app.component.html',
            
            styles: [':host { display:block; } h1{ color:blue; }'],
            
            encapsulation: ViewEncapsulation.None
            
            })`;
  contentHtml1=`<h1>Hello World!</h1>
              <p>
                ViewEncapsulation example
              </p>`;
content2=`testFunc1() {
            console.log(this.blankObject.test);
            console.log("This doesn't get executed.");
          } 
          testFunc2() {
            try {
              console.log(this.blankObject.test);
            } catch (e) {
              console.error(e);
            }
            console.log("This DOES get executed.");
          }
          testFunc3() {
            try {
              console.log(this.blankObject.test);
            } catch (e) {}
            console.log("This DOES get executed.");
          }`;
  contenthtml2=`<div>Open the console to see the errors.</div>
              <br>
              <button (click)="testFunc1()">testFunc1</button>
              <br>
              <button (click)="testFunc2()">testFunc2</button>
              <br>
              <button (click)="testFunc3()">testFunc3</button>`;
              
  content3=`RouterModule.forRoot([
              { path: "home", component: HomeComponent },
              { path: "about", component: AboutViewComponent }
            ])`;
  contenthtml3=`<div class="container">
              <a routerLinkActive="active" routerLink="/home">Home</a> |

              <a routerLinkActive="active" routerLink="/about">About</a>

            </div>
            <router-outlet></router-outlet>`;
  content4=`const routes: Routes = [
              {
                path: "about",
                loadChildren: () =>
                  import("../about/about.module").then(mod => mod.AboutModule)
              }
            ];`;
  contenthtml4=`<div class="container">
                <a routerLinkActive="active" routerLink="/home">Home</a> |

                <a routerLinkActive="active" routerLink="/about">About</a>

              </div>
              <router-outlet></router-outlet>`;
  content5=`const sum = (x, y) => {
              return x + y;
            };
            sum = sum(2, 3);
            `;
  contenthtml5=`<h1>{{sum}}</h1>`;

  content6=`array = [
              { id: 1, name: "Pen" },
              { id: 2, name: "Book" },
              { id: 3, name: "School" }
            ];

            foo() {
              this.array = [
                { id: 1, name: "College" },
                { id: 2, name: "Book" },
                { id: 3, name: "School" }
              ];
            }

            identify(index, item) {
              return item.id;
            } `;
  contenthtml6=`<div *ngFor="let e of array; trackBy: identify">
                {{e.id}} - {{e.name}}
              </div>
              <button (click)="foo()">Click</button>
              <p>
                Using trackBy
              </p>`;
  content7=`show = false;
            buttonName = 'Show';
            hide: any;

            toggle() {
            this.show = !this.show

            if(this.show) {
              this.buttonName = 'Hide'
              console.log(this.show)
            }
            else {
              this.buttonName = 'Show'
            }
            }
          `;
  contenthtml7=`<button mat-raised-button (click)="toggle()">{{buttonName}}</button>
              <div *ngIf="show">
                <p>Part A</p>
                <p>{{show}}</p>
              </div>
              <div *ngIf="!(show)">
                <p>Part B</p>
                <p>{{show}}</p>
              </div>`;
  content8=`Before:

          anObservable.pipe(map(value =>value.item)).subscribe(item => this.textToDisplay = item);
          
          After:
          
          private _destroyed$ = new Subject(); anObservable.pipe(map(value =>
          value.item),takeUntil(this._destroyed$)// We want to listen to anObservable until the
          component is destroyed,).subscribe(item => this.textToDisplay = item); ngOnDestroy (){
          this._destroyed$.next(); this._destroyed$.complete();}`;
  content9=`Before:

          firstObservable$.pipe().subscribe(firstValue => {
          
          secondObservable$.pipe().subscribe(secondValue => {
          
          console.log('Combined values are: $ {firstValue} &amp; $ {secondValue}'); }); });
          
          After:
          
          firstObservable$.pipe(withLatestFrom(secondObservable$),first()).subscribe(([firstValue,
          secondValue]) => {console.log('Combined values are: $ {firstValue} &amp; $
          {secondValue}');});
          `;
  content10=`Before:

          // template <p>{{ textToDisplay }}</p>
          
          // component someObservable.pipe(map(value => value.item)).subscribe(item =>
          this.textToDisplay = item);
          
          After:
          
          // template <p>{{ textToDisplay$ | async }}</p>
          
          // component this.textToDisplay$ = someObservable.pipe(map(value => value.item));`;
  content11=`export class TypicalComponent {
              @Input() data: TypicalData;
              constructor(private someService: SomeService) { ... }
            }`;
  contenthtml11=`<div>A typical component for {{data.name}}</div>`;
  
  content12=`trackByFn(index,data){
                return index
            }
            `;
  contenthtml12=`<li *ngFor=”let data of dataItems; trackByL trackByFn” >
                  {{item.name}}
                </li>`;

  content13=`const routes: Routes = [ { path: 'customers', loadChildren: () =>
            import('./customers/customers.module').then(m => m.CustomersModule) }, { path:
            'orders', loadChildren: () => import('./orders/orders.module').then(m =>
            m.OrdersModule) } ];
            `;
  content14=`	import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

              import { CommonModule } from '@angular/common';
              import { SearchComponent } from './components/common/search/search.component';
              import { MDBBootstrapModule } from 'angular-bootstrap-md';
              import { FlexLayoutModule } from '@angular/flex-layout';
              @NgModule({
              declarations: [
          
            SearchComponent,

            ShowAllProfilesComponent

            .

            .

            ],

            imports: [

            CommonModule,

            FlexLayoutModule,

            FormsModule,
            ReactiveFormsModule,

        MDBBootstrapModule.forRoot(),

          NgMultiSelectDropDownModule,
          ],
          exports: [
          SearchComponent,
          ShowAllProfilesComponent,
          CommonheaderComponent,
          UpgradeMembershipComponent,

          ProfileOfTheDayComponent,
          ProfileDashboardSliderComponent,
          ],
          schemas: [CUSTOM_ELEMENTS_SCHEMA],
          })

          export class SharedModuleModule {}

  `;
  content15=`//heroes/index.ts

          export * from './hero.model';
          
          export * from './hero.service';
          
          export { HeroComponent } from './hero.component';
          `;
  content16=`export class AsyncPipeComponent implements OnDestroy {
            promise: Promise<string>;
            observable: Observable<number>;
            subscription: Object = null;
            observableData: number;
          
            constructor() {
              this.promise = this.getPromise();
              this.observable = this.getObservable();
              this.subscribeObservable();
            }
          
            getObservable() {
              return Observable.interval(1000)
                .take(10)
                .map(v => v * v);
            }
          
            // AsyncPipe subscribes to the observable automatically
            subscribeObservable() {
              this.subscription = this.getObservable().subscribe(
                v => (this.observableData = v)
              );
            }
          
            getPromise() {
              return new Promise((resolve, reject) => {
                setTimeout(() => resolve("Promise complete!"), 3000);
              });
            }
          
            // AsyncPipe unsubscribes from the observable automatically
            ngOnDestroy() {
              if (this.subscription) {
                this.subscription.unsubscribe();
              }
            }
          }`;
  contenthtml16=`<p class="card-text" ngNonBindable>{{ promise | async }}  </p>
                <p class="card-text">{{ promise | async }}  </p>

                <p class="card-text" ngNonBindable>{{ observable | async }}  </p>
                <p class="card-text">{{ observable | async }}</p>

                <p class="card-text" ngNonBindable>{{ observableData }}  </p>
                <p class="card-text">{{ observableData }}</p>`;

  content17=`export const environment = {

              production: false,
            
              mode: "Local"
            
            };`;
  contenthtml17=`<div>Current environment: {{mode}}</div>`;

  content18=`import { Injectable } from "@angular/core";

            import { Actions, Effect, ofType } from "@ngrx/effects";
            
            import { map, switchMap, catchError } from "rxjs/operators";
            
            import { of } from "rxjs";
            
            
            
            import { DataService } from "../service/data.service";
            
            import * as DataActions from "../actions/cart.actions";
            
            
            
            @Injectable()
            
            export class DataEffects {
            
            constructor(private actions: Actions, private dataService: DataService) {}
            
            
            
            @Effect()
            
            loadData = this.actions.pipe(
            
            ofType(DataActions.ActionTypes.LoadDataBegin),
            
            switchMap(() => {
            
            return this.dataService.loadData().pipe(
            
            map((data) => new DataActions.LoadDataSuccess({ data: data })),
            
            catchError((error) =>
            
            of(new DataActions.LoadDataFailure({ error: error }))
            
            )
            
            );
            
            })
            
            );
            
            }
  `;
  contenthtml18=`<button (click)="getApiData()">GET API DATA</button>

                <button (click)="getError()">GET API DATA with ERROR</button>
                
                <div class="data-container">
                  <h2>Application state</h2>
                  <span class="error">Error: {{JSON.stringify((this.error$ | async)) || 'null'}} </span><br />
                  <span class="data">Data: {{(JSON.stringify(this.data$ | async)) || 'null'}} </span>
                </div>`;
                
  content19:`import * as fromData from "../actions/cart.actions";

            import { act } from "@ngrx/effects";
            
            export interface DataState {
            
            items: any;
            
            cartItems: any;
            
            loading: boolean;
            
            error: any;
            
            data: any;
            
            count: any;
            
            address: String;
            
            }
            
            
            export const initialState: DataState = {
            
            items: [],
            
            loading: false,
            
            cartItems: [],
            
            error: null,
            
            data: [],
            
            count: 0,
            
            address: "",
            
            };
            export function reducer(

              state = initialState,
            
              action: fromData.ActionsUnion
            
            ): DataState {
            
              switch (action.type) {
            
              case fromData.ActionTypes.LoadDataBegin: {
            
              return {
            
              ...state,
            
              loading: true,
            
              error: null,
            
              };
            
              }
            
              }
            
            }
            
            export const getItems = (state: DataState) => state.items;
            
            export const getNoteById = (state: DataState, props: { id: string }) =>
            
              state.data.find((note) => note.id === props.id);
   `;
  content20=`import {

          ActionReducer,
        
          ActionReducerMap,
        
          createFeatureSelector,
        
          createSelector,
        
          MetaReducer,
        
        } from "@ngrx/store";
        
        import { environment } from "../../environments/environment";
        
        
        
        import * as fromData from "./cart.reducers";
        
        
        
        export interface AppState {
        
          data: fromData.DataState;
        
        }
        
        
        
        export const reducers: ActionReducerMap<AppState> = {
        
          data: fromData.reducer,
        
        };
        
        
        
        export const metaReducers: MetaReducer<AppState>[] = !environment.production
        
          ? []
        
          : [];
        
        
        
        export const getDataState = (state: AppState) => state.data;
        
        export const getAllItems = createSelector(getDataState, fromData.getItems);
   `;
  content21=`import { DataEffects } from "./data.effect";

          export const effects: any[] = [DataEffects];
  `;
  content22=`import { Action } from "@ngrx/store";
            export enum ActionTypes {
            
            LoadDataBegin = "[Data] Load data begin",
            
            LoadDataSuccess = "[Data] Load data success",
            
            LoadDataFailure = "[Data] Load data failure",
            
            CreateNote = "[Notes Service] Create note",
            
            DeleteNote = "[Notes Service] Delete note",
            
            ADD_TO_CART = "Add Cart",
            
            REMOVE_CART_ITEM = "REMOVE_CART_ITEM",
            
            ADD_ADDRESS = "Add Address",
            
            REMOVE_FROM_CART = "Remove from Cart",
            
            ADD_TO_CART_ARRAY = "ADD_TO_CART_ARRAY",
            
            DUMP_TO_DATA_ARRAY = "Dump array to data",
            
            UPDATE_DATA_ARRAY = "Update array to data",
            
            }
            export class LoadDataBegin implements Action {

              readonly type = ActionTypes.LoadDataBegin;
             
             }             
             
             export class LoadDataSuccess implements Action {
             
              readonly type = ActionTypes.LoadDataSuccess;
             
              constructor(public payload: { data: any }) {}
             
             }
             
             export class LoadDataFailure implements Action {
             
              readonly type = ActionTypes.LoadDataFailure;
             
              constructor(public payload: { error: any }) {}
             
             }
             
             export class CreateNote implements Action {
             
              readonly type = ActionTypes.CreateNote;

              constructor(public payload: { data: any }) {}
             
             }
            `;
  content23=`import { Injectable } from "@angular/core";

            import { HttpClient } from "@angular/common/http";
            
            import { Store } from "@ngrx/store";
            
            import { Observable } from "rxjs";
            
            import * as DataActions from "../actions/cart.actions";
            
            import { AppState, getAllItems, getDataState, getNoteById } from "../reducers";
            
            
            
            @Injectable({
            
            providedIn: "root",
            
            })
            
            export class DataService {
            
            public notes: Observable<any>;
            
            constructor(private store: Store<AppState>, private http: HttpClient) {
            
            this.notes = this.store.select(getAllItems);
            
            }
            
            load() {
            
            this.store.dispatch(new DataActions.LoadDataBegin());
            
            }
            
            getData() {
            
            return this.store.select(getDataState);
            
            }
            
            getDataAsync() {
            
            return new Promise((resolve, reject) => {
            
            this.store.select(getDataState).subscribe((res) => {
            
            console.log(res);
            
            resolve(res);
            
            });
            
            });
            
            }
            
            getItems() {
            
            return this.store.select(getAllItems);
            
            }
            
            getNote(id: string): Observable<any> {
            
            return this.store.select(getNoteById, {
            
            id: id,
            
            });
            
            }
            
            createNote(title): void {
            
            let id = Math.random().toString(36).substring(7);
            
            let note = {
            
            id: id.toString(),
            
            title: title,
            
            content: "",
            
            };
            
            this.store.dispatch(new DataActions.CreateNote({ data: note }));
            
            }
            
            addCart(data): void {
            
            this.store.dispatch(new DataActions.ADD_TO_CART({ data: data }));
            
            }
            
            }`;
  content24=`import * as fromData from "../actions/cart.actions";

            import { act } from "@ngrx/effects";
            
            export interface DataState {
            
            items: any;
            
            cartItems: any;
            
            loading: boolean;
            
            error: any;
            
            data: any;
            
            count: any;
            
            address: String;
            
            }
            
            
            export const initialState: DataState = {
            
            items: [],
            
            loading: false,
            
            cartItems: [],
            
            error: null,
            
            data: [],
            
            count: 0,
            
            address: "",
            
            };
            export function reducer(

              state = initialState,
            
              action: fromData.ActionsUnion
            
            ): DataState {
            
              switch (action.type) {
            
              case fromData.ActionTypes.LoadDataBegin: {
            
              return {
            
              ...state,
            
              loading: true,
            
              error: null,
            
              };
            
              }
            
              }
            
            }
            
            export const getItems = (state: DataState) => state.items;
            
            export const getNoteById = (state: DataState, props: { id: string }) =>
            
              state.data.find((note) => note.id === props.id);`;

    content25=`export class AppComponent {
              title = "appcomponent";
              posts = [
                {
                  id: 1,
                  title: "Header Component"
                },
                {
                  id: 2,
                  title: "Footer Component"
                },
                {
                  id: 3,
                  title: "Post Component"
                }
              ];
            }`;
    contenthtml25=`<app-header></app-header>
              <h1>Reusable Components</h1>
              <app-post *ngFor="let post of posts" [post]="post"></app-post>
              <app-footer></app-footer>`;
    content26=`export class Store {
              constructor() {
              }
            
              _count = 0;
              get count() {
                return this._count;
              }
            
              set count(val) {
                this._count = val;
              }
            
              incrementCount() {
                this.count = this.count + 1;
                console.warn(this.count);
              }
            
            }`;
    contenthtml26=`<div>{{ $ctrl.store.count }}</div>`;
}
