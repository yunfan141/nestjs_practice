import { Component , Inject} from '@nestjs/common';
import {Repository, getRepository, getConnection} from 'typeorm';
import {DemographicsEntity} from './demographics.entity';

@Component()
export class DemographicsService {
    constructor(
        @Inject('DemographicsRepository') private readonly demographicsRepository: Repository<DemographicsEntity>,
    ){}

    public async addDemographics(Demographic: any): Promise<DemographicsEntity>{
        return await this.demographicsRepository.save(Demographic);
    }
}