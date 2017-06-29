/**
 * Created by crims on 2017/6/23.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';

@NgModule({
    imports: [
        CommonModule,
        TestRoutingModule
    ],
    declarations: [TestComponent]
})
export class TestModule { }
