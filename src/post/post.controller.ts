import { Body, Controller, Get, Post } from "@nestjs/common";
import { PostService } from "./post.service";
import { PostsDto } from "./post.dto";

@Controller("post")
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async findAll() {
    return this.postService.findAllPosts();
  }

  @Post()
  async create(@Body() input: PostsDto) {
    return this.postService.createPost(input);
  }
}
