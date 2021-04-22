import * as moment from 'moment-timezone';
import { BaseCommandHandler } from '../../../../common/commands';
import { UpdateEmployee } from '../update-employee.command';
import { CommandHandler } from '@nestjs/cqrs';
import { Injectable } from '@nestjs/common';
import { EmployeeRepository } from '../../repositories/employees.repository';
import { SalaryType } from '../../entities/employee.entity';

@CommandHandler(UpdateEmployee)
@Injectable()
export class EmployeeUpdater extends BaseCommandHandler<UpdateEmployee, void> {
  constructor(private readonly employeeRepository: EmployeeRepository) {
    super();
  }
  async handle(command: UpdateEmployee): Promise<void> {
    const {
      employeeId,
      firstName,
      middleName,
      lastName,
      secondLastName,
      displayName,
      companyEmail,
      personalEmail,
      birthdate,
      address,
      phoneNumber,
      tags,
      country,
      region,
      city,
      salary,
      salaryType,
      effectiveDate,
    } = command;

    const employee = await this.employeeRepository.findById(employeeId);

    const salaryTypeKey = Object.keys(SalaryType).find(
      key => SalaryType[key] === salaryType,
    );

    employee.firstName = firstName;
    employee.middleName = middleName;
    employee.lastName = lastName;
    employee.secondLastName = secondLastName;
    employee.displayName = displayName;
    employee.companyEmail = companyEmail;
    employee.personalEmail = personalEmail;
<<<<<<< HEAD
    employee.birthdate = moment(birthdate).toDate()
      .utc()
=======
    employee.birthdate = moment(birthdate)
     .utc()
>>>>>>> 6f5d3f7814d14a0263a2c4a779d5d3e49c0d4a43
      .format();
    employee.address = address;
    employee.phoneNumber = phoneNumber;
    employee.tags = tags;
    employee.country = country;
    employee.region = region;
    employee.city = city;
    employee.salary = +salary;
    employee.salaryType = SalaryType[salaryTypeKey];
<<<<<<< HEAD
    employee.effectiveDate = moment(effectiveDate).toDate()
=======
    employee.effectiveDate = moment(effectiveDate)
>>>>>>> 6f5d3f7814d14a0263a2c4a779d5d3e49c0d4a43
      .utc()
      .format();

    await this.employeeRepository.save(employee);
  }
}
