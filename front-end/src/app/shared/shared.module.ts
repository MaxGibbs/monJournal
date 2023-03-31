import { NgModule } from "@angular/core";
import { AppComponent } from "../app.component";
import { SharedLibsModule } from "./shared-libs.module";

@NgModule({
    imports: [SharedLibsModule],
    exports: [SharedLibsModule]
})
export class SharedModule {}