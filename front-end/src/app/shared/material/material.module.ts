import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    exports: [
      MatToolbarModule,
      MatCardModule,
      MatInputModule,
      MatIconModule
    ]
})
export class MaterialModule {}