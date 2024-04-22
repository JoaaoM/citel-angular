import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {UploadComponent} from "./pages/upload/upload.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  { path: 'upload', component: UploadComponent },
  { path: 'dashboard/:id', component: DashboardComponent },
  { path: '', redirectTo: '/upload', pathMatch: 'full' }
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
