import {Component, OnInit} from '@angular/core';
import {Employe} from '../../shared/models/employe';
import {EmployeService} from '../../shared/services/employe.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {


  employe: Employe;

  isEdit: boolean;
  employeId: number;

  constructor(private employeService: EmployeService,
              private route: ActivatedRoute,
              private router: Router) {
    this.employe = new Employe();

    this.employeId = parseInt(this.route.snapshot.paramMap.get('employeId'), 0);
  }

  ngOnInit() {

    if (this.employeId) {
      this.employeService.getById(this.employeId)
        .subscribe(
          (data: Employe) => {
            this.employe = data;
          },
          (error) => {

          }
        );
    }
  }

  valider() {
    console.log(this.employe);
    if (this.employeId) {
      this.employeService.edit(this.employe)
        .subscribe(
          (data) => {
            Swal.fire({
              title: 'Succées!',
              text: 'Modification Employe avec succées',
              type: 'success',
              confirmButtonText: 'Cool'
            });

            this.router.navigate(['/manage-employe/list']);
          }
        );
    } else {
      this.employeService.add(this.employe)
        .subscribe(
          (data) => {
            console.log(data);
            Swal.fire({
              title: 'Succées!',
              text: 'Ajout Employe avec succées',
              type: 'success',
              confirmButtonText: 'Cool'
            });
            this.router.navigate(['/manage-employe/list']);
          },
          (error) => {

          }
        );
    }
    console.log('Hello');
    // TODO Appel WS
  }

}

