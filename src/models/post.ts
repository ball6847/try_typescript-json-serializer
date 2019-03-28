import { JsonProperty, Serializable } from 'typescript-json-serializer';

@Serializable()
export class Post {
  @JsonProperty() userId: number;
  @JsonProperty() id: number;
  @JsonProperty() title: string;
  @JsonProperty() body: string;
}
