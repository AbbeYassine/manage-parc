import {Component, OnInit} from '@angular/core';
import {Voiture} from '../../shared/models/voiture';
import {VoitureService} from '../../shared/services/voiture.service';
import Swal from 'sweetalert2';

declare var jQuery: any;

@Component({
  selector: 'app-list-voiture',
  templateUrl: './list-voiture.component.html',
  styleUrls: ['./list-voiture.component.css']
})
export class ListVoitureComponent implements OnInit {


  voitures: Voiture[] = [];

  constructor(private voitureService: VoitureService) {
  }

  ngOnInit() {


    this.voitureService.getAll()
      .subscribe(
        (data: Voiture[]) => {
          this.voitures = data;
        },
        (error) => {
        }
      );

    setTimeout(function () {
      jQuery('#dataTable').DataTable();
    }, 10);

  }

  delete(index: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.voitureService.deleteById(this.voitures[index].id)
          .subscribe(
            (data) => {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              );
              this.voitures.splice(index, 1);
            },
            (error) => {

            }
          );
      }
    });


  }

}
