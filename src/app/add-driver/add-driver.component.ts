import { Component, OnInit } from '@angular/core';
import { Driver } from '../models/driver.model';
import { DriverService } from '../services/driver.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css'],
})
export class AddDriverComponent implements OnInit {
  driver: Driver = {
    driver_name: '',
    plate_number: '',
    bus_route: '',
    email: '',
    password: '',
  };
  submitted = false;

  constructor(private driverService: DriverService) {}

  ngOnInit(): void {}

  saveTutorial(): void {
    const data = {
      driver_name: this.driver.driver_name,
      plate_number: this.driver.plate_number,
      bus_route: this.driver.bus_route,
      email: this.driver.email,
      password: this.driver.password,
    };

    this.driverService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }

  newDriver(): void {
    this.submitted = false;
    this.driver = {
      driver_name: '',
      plate_number: '',
      bus_route: '',
      email: '',
      password: '',
    };
  }
}
