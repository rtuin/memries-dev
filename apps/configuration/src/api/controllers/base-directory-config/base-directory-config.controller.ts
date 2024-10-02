import { Body, Controller, Get, Header, HttpCode, Put } from '@nestjs/common';
import { BaseDirectory } from '../../../config-store/dto/file-location-config.dto';
import { FileLocationConfigService } from '../../../config-store/services/file-location-config.service';
import BaseCollectionGetDto from './dto/base-collection.get.dto';
import PutBaseDirectoryConfigDto from './dto/put.dto';

@Controller('base-directory')
export class BaseDirectoryConfigController {
  constructor(private readonly configService: FileLocationConfigService) {}

  @Put()
  @HttpCode(200)
  @Header('Location', '/api/base-directory')
  async updateBaseDirectory(
    @Body() baseDirectoryDto: PutBaseDirectoryConfigDto
  ): Promise<void> {
    await this.configService.addBaseDir(baseDirectoryDto);
  }

  @Get()
  async getBaseDirectories(): Promise<BaseCollectionGetDto<BaseDirectory>> {
    return { items: await this.configService.getBaseDirs() };
  }
}
