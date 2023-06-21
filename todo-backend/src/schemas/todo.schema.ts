import { IsNotEmpty, IsString } from "class-validator";

export default class Todo {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  description: string;
}
