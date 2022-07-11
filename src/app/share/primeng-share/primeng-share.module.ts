import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { CalendarModule } from 'primeng/calendar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TabViewModule } from 'primeng/tabview';
// import { GalleriaModule, PanelMenuModule } from 'primeng/primeng';

import { MessageModule } from 'primeng/message';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CheckboxModule } from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { PanelModule } from 'primeng/panel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PaginatorModule } from 'primeng/paginator';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { EditorModule } from 'primeng/editor';
import { ChipsModule } from 'primeng/chips';
import { TreeModule } from 'primeng/tree';
import { TabMenuModule } from 'primeng/tabmenu';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToastModule } from 'primeng/toast';
import { PickListModule } from 'primeng/picklist';
import { SidebarModule } from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';
import { MessagesModule } from 'primeng/messages';
import { FileUploadModule } from 'primeng/fileupload';
import { FieldsetModule } from 'primeng/fieldset';
import { RadioButtonModule } from 'primeng/radiobutton';
import { KeyFilterModule } from 'primeng/keyfilter';
import { GalleriaModule } from 'primeng/galleria';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ToolbarModule } from 'primeng/toolbar';
import { ListboxModule } from 'primeng/listbox';
import { MenubarModule } from 'primeng/menubar';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {HttpService} from '../httpService/http.service'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AutoCompleteModule,
    AccordionModule,
    CardModule,
    CalendarModule,
    ConfirmDialogModule,
    CheckboxModule,
    DropdownModule,
    DialogModule,
    DynamicDialogModule,
    InputTextModule,
    InputTextareaModule,
    MessageModule,
    MultiSelectModule,
    OverlayPanelModule,
    EditorModule,
    ChipsModule,
    PasswordModule,
    PanelModule,
    PaginatorModule,
    TableModule,
    TabViewModule,
    ScrollPanelModule,
    ToggleButtonModule,
    EditorModule,
    GalleriaModule,
    TreeModule,
    TabMenuModule,
    SelectButtonModule,
    ToastModule,
    PickListModule,
    SidebarModule,
    TooltipModule,
    MessagesModule,
    PanelMenuModule,
    FileUploadModule,
    FieldsetModule,
    RadioButtonModule,
    KeyFilterModule,
    ToolbarModule,
    MenubarModule,
    ButtonModule,
    AvatarModule,
    AvatarGroupModule

  ],
  exports: [
    CommonModule,
    AutoCompleteModule,
    AccordionModule,
    CardModule,
    CalendarModule,
    ConfirmDialogModule,
    CheckboxModule,
    DropdownModule,
    DialogModule,
    DynamicDialogModule,
    InputTextModule,
    InputTextareaModule,
    MessageModule,
    MultiSelectModule,
    OverlayPanelModule,
    EditorModule,
    ChipsModule,
    PasswordModule,
    PanelModule,
    PaginatorModule,
    TableModule,
    TabViewModule,
    ScrollPanelModule,
    ToggleButtonModule,
    EditorModule,
    GalleriaModule,
    TreeModule,
    TabMenuModule,
    SelectButtonModule,
    ToastModule,
    PickListModule,
    SidebarModule,
    TooltipModule,
    MessagesModule,
    PanelMenuModule,
    FileUploadModule,
    FieldsetModule,
    RadioButtonModule,
    KeyFilterModule,
    ToolbarModule,
    ListboxModule,
    MenubarModule,
    ButtonModule,
    AvatarModule,
    AvatarGroupModule
  ],
  providers: [
    ConfirmationService,
    MessageService,
  ]
})
export class PrimengShareModule { }
