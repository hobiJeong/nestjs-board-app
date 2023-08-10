import { Controller } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {

    constructor(private boardsSerivce: BoardsService) {}


    this.boardsSerivce.getAllBoards();
}
