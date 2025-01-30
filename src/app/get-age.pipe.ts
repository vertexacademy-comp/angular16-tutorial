import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getAge'
})
export class GetAgePipe implements PipeTransform {

  transform(dob: Date|string, ...args: any[]): unknown {
    if (!dob) {
      return 0; // Return 0 if no DOB is provided
    }

    // Convert the input to a Date object
    const birthDate = new Date(dob);
    const today = new Date();

    // Calculate the age
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust age if the current month is before the birth month
    // or if it's the birth month but the day hasn't occurred yet
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

}
