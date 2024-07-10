import { Controller, Get, NotFoundException, Param } from "@nestjs/common";
import { Operation } from "src/common/types/Operation";
import { OperationsService } from './operations.service'

@Controller('Operations')
export class OperationsController {
    constructor(private operationService: OperationsService) {}
    @Get()
    findAll() : Array<Operation> {
        return this.operationService.findAll()
    }
    @Get(":id")
    findOne(@Param('id') id: number) : Operation {

        const res = this.operationService.findOne(id)
        if(!res) 
            throw new NotFoundException()
        return res;
    }
}