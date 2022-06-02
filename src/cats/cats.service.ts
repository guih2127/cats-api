import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { Cats, Prisma } from '@prisma/client';

@Injectable()
export class CatsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CatsCreateInput): Promise<Cats> {
    return this.prisma.cats.create({
      data,
    });
  }

  async findAll(): Promise<Cats[]> {
    return this.prisma.cats.findMany();
  }

  async findOne(
    catsWhereUniqueInput: Prisma.CatsWhereUniqueInput,
  ): Promise<Cats | null> {
    return this.prisma.cats.findUnique({
      where: catsWhereUniqueInput,
    });
  }
}
