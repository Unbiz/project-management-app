import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardsComponent } from './components/boards/boards.component';
import { BoardComponent } from './components/board/board.component';
import { BoardsRouterModule } from './boards-routing.module';
import { PrimengModule } from '../primeng/primeng.module';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ColumnComponent } from './components/column/column.component';
import { TaskComponent } from './components/task/task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaxHeightDirective } from './directives/max-height.directive';

@NgModule({
  declarations: [
    BoardsComponent,
    BoardComponent,
    ColumnComponent,
    TaskComponent,
    MaxHeightDirective,
  ],
  imports: [
    CommonModule,
    BoardsRouterModule,
    PrimengModule,
    MessageModule,
    MessagesModule,
    ReactiveFormsModule,
  ],
})
export class BoardsModule {}
