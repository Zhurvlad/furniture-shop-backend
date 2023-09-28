import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { SofasService } from './sofas.service';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {
  BestsellersResponse,
  FindOneRequest,
  FindOneResponse, NameRequest, NameResponse,
  NewResponse,
  PaginationAndFilterResponse, SearchRequest, SearchResponse,
} from './types';

@Controller('sofas')
export class SofasController {
  constructor(private readonly sofasService: SofasService) {
  }

  @ApiTags('Sofas')
  @ApiOkResponse({ type: PaginationAndFilterResponse })
  @Get()
  paginateAndFilter(@Query() query) {
    return this.sofasService.paginateAndFilter(query);
  }

  @ApiTags('Sofas')
  @ApiOkResponse({ type: BestsellersResponse })
  @Get('/bestsellers')
  getBestsellers() {
    return this.sofasService.bestsellers();
  }

  @ApiTags('Sofas')
  @ApiOkResponse({ type: NewResponse })
  @Get('/new')
  getNew() {
    return this.sofasService.new();
  }

  @ApiTags('Sofas')
  @ApiOkResponse({ type: FindOneResponse })
  @ApiBody({ type: FindOneRequest })
  @Get('find/:id')
  getOne(@Param('id') id: string) {
    return this.sofasService.findOne(id);
  }

  @ApiTags('Sofas')
  @ApiOkResponse({ type: SearchResponse })
  @ApiBody({ type: SearchRequest })
  @Post('search')
  search(@Body() { search }: { search: string }) {
    return this.sofasService.findByString(search);
  }

  @ApiTags('Sofas')
  @ApiOkResponse({ type: NameResponse })
  @ApiBody({ type: NameRequest })
  @Post('name')
  findByName(@Body() { name }: { name: string }) {
    return this.sofasService.findByName(name);
  }

}
