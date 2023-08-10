import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';

@Controller('boards')
export class BoardsController {

    constructor(private boardsSerivce: BoardsService) { }

    @Get('/')
    getAllBoard(): Board[] {
        return this.boardsSerivce.getAllBoards();
    }

    @Post()
    createBoard(
        @Body("title") title: string,
        @Body("description") description: string,
    ): Board {
        return this.boardsSerivce.createBoard(title, description);
    }
    
}
