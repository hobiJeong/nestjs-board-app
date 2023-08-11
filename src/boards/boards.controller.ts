import { Body, Param, Controller, Get, Post, Delete } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {

    constructor(private boardsSerivce: BoardsService) { }

    @Get("/")
    getAllBoard(): Board[] {
        return this.boardsSerivce.getAllBoards();
    }

    @Post()
    createBoard(
        @Body() createBoardDto: CreateBoardDto
    ): Board {
        return this.boardsSerivce.createBoard(createBoardDto);
    }

    @Get("/:id")
    getBoardById(@Param('id') id: string): Board {
        return this.boardsSerivce.getBoardById(id)
    }

    @Delete("/:id")
    deleteBoard(@Param("id") id:string): void {
        this.boardsSerivce.deleteBoard(id);
    }
    
}
