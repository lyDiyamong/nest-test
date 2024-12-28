import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Posts, PostSchema } from "./post.schema";

@Injectable()
export class PostService {
  constructor(@InjectModel(Posts.name) private postModel: Model<Posts>) {}
  // Get all
  async findAllPosts(): Promise<Posts[]> {
    return this.postModel.find();
  }
  // Create post
  async createPost(input: Partial<Posts>): Promise<Posts> {
    const createdPost = await this.postModel.create(input);
    if (createdPost !== undefined) {
      return createdPost;
    }
  }
}
