import { IsNumber, IsNotEmpty, IsDateString, IsString } from 'class-validator'

export class CreateOperationDto {

    @IsNumber()
    @IsNotEmpty()
    readonly montant;

    @IsDateString()
    @IsNotEmpty()

    readonly operationDate;

    @IsString()
    @IsNotEmpty()

    readonly label;
       
}