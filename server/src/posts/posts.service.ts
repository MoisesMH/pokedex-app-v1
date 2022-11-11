import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
    constructor(private readonly _prismaService: PrismaService) {}

    async find(where: Prisma.PostWhereUniqueInput) {
        return await this._prismaService.post.findUniqueOrThrow({
            where
        })
    }

    async findMany() {

    }

    async create(user: Prisma.UserWhereUniqueInput, data: Prisma.PostCreateInput) {
        return await this._prismaService.post.create({
            data: {
                ...data,
                user: {
                    connect: user
                }
            },
            // Populate user
            include: {
                user: true
            }
        })
    }

    async update(where: Prisma.PostWhereUniqueInput, data: Prisma.PostUpdateInput) {
        return await this._prismaService.post.update({
            where,
            data
        })
    }

    async remove(where: Prisma.UserWhereUniqueInput, data: Prisma.PostWhereUniqueInput) {
        return await this._prismaService.user.update({
            where,
            data: {
                posts: {
                    delete: data
                }
            }
        })
    }
}
