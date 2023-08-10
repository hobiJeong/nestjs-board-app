import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';

@Controller('boards')
export class BoardsController {

    constructor(private boardsSerivce: BoardsService) { }

    @Get('/')
    getAllBoard(): Board[] {
        return this.boardsSerivce.getAllBoards();
    }
    
}
