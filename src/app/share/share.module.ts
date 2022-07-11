import { NgModule } from '@angular/core';
import {PrimengShareModule} from './primeng-share/primeng-share.module'
import {HttpModule} from './httpService/http.module'

@NgModule({
    declarations: [
    ],
    imports: [
        PrimengShareModule,
        HttpModule
    ],
    exports:[
        PrimengShareModule,
        HttpModule
    ],
    providers: [

    ]
})
export class ShareModule{

}
