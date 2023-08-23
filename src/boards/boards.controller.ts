import { Body, Param, Controller, Get, Post, Delete, Patch, ValidationPipe, UsePipes } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
    constructor(private boardsSerivce: BoardsService) { }

    // @Get("/")
    // getAllBoard(): Board[] {
    //     // return this.boardsSerivce.getAllBoards();
    // }

    // @Post()
    // @UsePipes(ValidationPipe)
    // createBoard(
    //     @Body() createBoardDto: CreateBoardDto
    // ): Board {
    //     // return this.boardsSerivce.createBoard(createBoardDto);
    // }

    // @Get("/:id")
    // getBoardById(@Param('id') id: string): Board {
    //     // return this.boardsSerivce.getBoardById(id)
    // }

    // @Delete("/:id")
    // deleteBoard(@Param("id") id:string): void {
    //     // this.boardsSerivce.deleteBoard(id);
    // }
    
    // @Patch("/:id/status")
    // updateBoardStatus(
    //     @Param("id") id: string,
    //     @Body("status", BoardStatusValidationPipe) status: BoardStatus,
    // ) {
    //     // return this.boardsSerivce.updateBoardStatus(id, status);
    // }
}
