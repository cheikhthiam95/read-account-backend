import { Injectable } from '@nestjs/common';
import { Operation } from 'src/common/types/Operation';


@Injectable()
export class OperationsService {
    
    private operations : Array<Operation> = [{
        id: 1,
        montant: 52,
        label: 'Boursorama fees',
        operationDate: Date()
      }, {
        id: 2,
        montant: 52,
        label: 'Boursorama Trace',
        operationDate: Date()
      }, {
          id:3,
        montant: 52,
        label: 'Boursorama Again',
        operationDate: Date()
      }];

    findAll() : Array<Operation> {
        return this.operations
    }

    findOne(id: number) : Operation | undefined {
        return this.operations.find(mock => mock.id === id)
    }
}

