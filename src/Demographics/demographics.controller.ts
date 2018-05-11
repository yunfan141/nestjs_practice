import {Controller, Post, Param, Body, Get} from '@nestjs/common';
import {DemographicsService } from './demographics.service';

@Controller('Demographics')
export class DemographicsController{
    constructor(
        private demographicsService: DemographicsService,
    ){}

    @Get()
    public async getDemographics(){
        return 'getok';
    }

    @Post()
    public async addDemographics(@Body() demographics: any){
        const msg = await this.demographicsService.addDemographics(demographics);
        return msg;
    }
}