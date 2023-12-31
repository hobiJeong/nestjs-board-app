import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { v1 as uuid } from "uuid";
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardRepository } from './board.repositary';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BoardsService {
    //Inject Repository to Service
    constructor(
        @InjectRepository(BoardRepository)
        private baordRepository: BoardRepository,
    )   {}

    // getAllBoards(): Board[] { 
    //     return this.boards;
    // }

    // createBoard(createBoardDto: CreateBoardDto) {
    //     const { title, description } = createBoardDto;

    //     const board: Board = {
    //         id: uuid(),
    //         title,
    //         description,
    //         status: BoardStatus.PUBLIC,
    //     };

    //     this.boards.push(board);
    //     return board;
    // }

    // getBoardById(id: string): Board {
    //     const found = this.boards.find((board) => board.id === id);
    //     if (!found) throw new NotFoundException(`Can't found Board with id ${id}`);

    //     return found;
    // }

    // deleteBoard(id: string): void {
    //     const found = this.getBoardById(id);
    //     this.boards = this.boards.filter((board)=> board.id !== found.id);
    // }

    // updateBoardStatus(id: string, status: BoardStatus): Board {
    //     const board = this.getBoardById(id);
    //     board.status = status;
    //     return board;
    // }
}
