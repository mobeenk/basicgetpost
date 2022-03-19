import { Component, OnInit } from '@angular/core';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'app-posts-viewer',
  templateUrl: './posts-viewer.component.html',
  styleUrls: ['./posts-viewer.component.css']
})
export class PostsViewerComponent implements OnInit {

    POSTS: any;
    page: number = 1;
    count: number = 0;
    tableSize: number = 12;
    tableSizes: any = [3, 6, 9, 12];
    constructor(private postService: PostService) {}
    ngOnInit(): void {
      this.fetchPosts();
    }
    fetchPosts(): void {
      this.postService.getAllPosts().subscribe(
        (response) => {
          this.POSTS = response;
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }
    onTableDataChange(event: any) {
      this.page = event;
      this.fetchPosts();
    }
    onTableSizeChange(event: any): void {
      this.tableSize = event.target.value;
      this.page = 1;
      this.fetchPosts();
    }
  }