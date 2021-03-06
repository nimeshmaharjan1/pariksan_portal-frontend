import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.scss'],
})
export class ViewCategoriesComponent implements OnInit {
  categories = [];
  addCategoryForm = {
    title: '',
    description: '',
  };
  categoriesDataFromApi = [];

  public flipped;

  constructor(
    private categoryService: CategoryService,
    private ngxSpinner: NgxSpinnerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ngxSpinner.show();
    this.categoryService.categories().subscribe({
      next: (data: any) => {
        this.ngxSpinner.hide();
        this.categories = data;
        Swal.fire(
          'Success',
          'The categories have been successfully fetched.',
          'success'
        );
      },
      error: (error) => {
        this.ngxSpinner.hide();
        console.log(error);
        //Error
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error in loading data.',
        });
      },
    });
  }

  formSubmit() {
    if (
      this.addCategoryForm.title.trim() === '' ||
      this.addCategoryForm.title === null
    ) {
      Swal.fire({
        icon: 'info',
        title: 'Title cannot be blank.',
      });
      return;
    }

    //ADD CATEGORY
    this.ngxSpinner.show();
    this.categoryService.addCategory(this.addCategoryForm).subscribe({
      next: (data: any) => {
        this.ngxSpinner.hide();
        Swal.fire(
          'Success',
          'The category has been successfully added.',
          'success'
        ).then((e) => {
          location.reload();
        });
      },
      error: (err) => {
        this.ngxSpinner.hide();
        console.log(err);
        Swal.fire('Error', 'Please try again.', 'error');
      },
    });
  }

  deleteCategory(categoryId) {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'info',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoryService.deleteCategory(categoryId).subscribe({
          next: (data: any) => {
            Swal.fire(
              'Success',
              'The category has been successfully deleted.',
              'success'
            ).then((e) => {
              location.reload();
            });
          },
          error: (err) => {
            console.log(err);
            Swal.fire('Error', 'Please try again.', 'error');
          },
        });
      }
    });
  }

  toggleFlip() {
    this.flipped = !this.flipped;
  }
}
