import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';
import { DialogsModule } from './components/dialogs/dialogs.module';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { UserListModule } from './components/user-list/user-list.module';
import { UserComponent } from './components/user/user.component';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';
import { AppState } from './store';
import { EpicsModule } from './store/epics/epics.module';
import { EpicService } from './store/epics/epics.service';
import { reducers } from './store/reducers/reducers';
import { TransformService } from './utils/transform.service';
import { GlobalUserStorageService } from './service/global-storage.service';
import { FilterFormModule } from './components/filter-form/filter-form.module';
import { BindingExampleModule } from './components/binding-example-component/binding-example.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    EpicsModule,
    // import main NgReduxModule
    NgReduxModule,
    NgReduxRouterModule.forRoot(),
    HttpClientModule,
    UserListModule,
    BrowserAnimationsModule,
    OverlayModule,
    DialogsModule,
    MatDialogModule,
    AppRouterModule,
    RouterModule,
    ToolbarModule,
    FilterFormModule,
    BindingExampleModule
  ],
  providers: [
    EpicService,
    TransformService,
    UserService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private ngRedux: NgRedux<AppState>,
    private ngReduxRouter: NgReduxRouter,
    private epicService: EpicService, private devTools: DevToolsExtension,
    private localStorageService: GlobalUserStorageService) {

    const epics = this.epicService.getEpics();
    const middleware = createEpicMiddleware();
    let enhancers = [];
    if (devTools.isEnabled()) {
      enhancers = [devTools.enhancer()];
    }

    const currentUser = localStorageService.currentUser;

    const INITIAL_STATE: AppState = {currentUser};

    ngRedux.configureStore(reducers, INITIAL_STATE, [middleware, createLogger()], enhancers);
    middleware.run(epics as any);
    ngReduxRouter.initialize(state => state.route);
  }
}
