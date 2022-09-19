import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

import { SidebarComponent } from "../sidebar/sidebar.component";
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { ContentComponent } from "./content/content.component";
import { FooterComponent } from "./content/footer/footer.component";
import { ItemsComponent } from "../sidebar/items/items.component";
import { ItemComponent } from "../sidebar/items/item/item.component";
import { ViewsComponent } from "./content/views/views.component";
import { ApproveproductsComponent } from "./content/views/adminManagement/approveproducts/approveproducts.component";
import { ApplicationFooterComponent } from "./content/application-footer/application-footer.component";

import { NgChartsModule } from "ng2-charts";
import { AnalyticsComponent } from "./content/views/analytics/analytics.component";
import { CreateProductsComponent } from "./content/views/adminManagement/create-products/create-products.component";
import { VideosComponent } from './content/views/videos/videos.component';
import { VideoChatComponent } from './content/views/video-chat/video-chat.component';
import { UploadComponent } from './content/views/upload/upload.component';
import { HomeViewComponent } from './content/views/home-view/home-view.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "", component: HomeViewComponent },
      { path: "videos/:id", component: VideosComponent },
      { path: "videoChat", component: VideoChatComponent },
      { path: "upload", component: UploadComponent },
      { path: "home", component: HomeViewComponent },
      { path: "analytics", component: AnalyticsComponent },
      {
        path: "adminManagement/manageProducts",
        component: ApproveproductsComponent,
      },
      {
        path: "adminManagement/CreateProducts",
        component: CreateProductsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    SidebarComponent,
    SidebarComponent,
    ToolbarComponent,
    ContentComponent,
    FooterComponent,
    ItemsComponent,
    ItemComponent,
    ViewsComponent,
    ApproveproductsComponent,
    ApplicationFooterComponent,
    HomeComponent,
    AnalyticsComponent,
    CreateProductsComponent,
    VideosComponent,
    VideoChatComponent,
    UploadComponent,
    HomeViewComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), NgChartsModule],
})
export class LazyModule { }
