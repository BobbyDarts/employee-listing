package dev.robertgarrison.api.models;

import java.time.LocalDate;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "firstname")
    String firstName;

    @Column(name = "lastname")
    String lastName;

    @Column(name = "jobtitle")
    String jobTitle;

    @Column(name = "birthdate")
    LocalDate birthDate;

    @Column(name = "startdate")
    LocalDate startDate;

    @Column(name = "enddate")
    LocalDate endDate;


    public Employee() {
    }

    public Employee(Long id, String firstName, String lastName, String jobTitle, LocalDate birthDate, LocalDate startDate, LocalDate endDate) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.birthDate = birthDate;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getJobTitle() {
        return this.jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public LocalDate getBirthDate() {
        return this.birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public LocalDate getStartDate() {
        return this.startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return this.endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public Employee id(Long id) {
        this.id = id;
        return this;
    }

    public Employee firstName(String firstName) {
        this.firstName = firstName;
        return this;
    }

    public Employee lastName(String lastName) {
        this.lastName = lastName;
        return this;
    }

    public Employee jobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
        return this;
    }

    public Employee birthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
        return this;
    }

    public Employee startDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }

    public Employee endDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Employee)) {
            return false;
        }
        Employee employee = (Employee) o;
        return Objects.equals(id, employee.id) && Objects.equals(firstName, employee.firstName) && Objects.equals(lastName, employee.lastName) && Objects.equals(jobTitle, employee.jobTitle) &&  Objects.equals(birthDate, employee.birthDate) && Objects.equals(startDate, employee.startDate) && Objects.equals(endDate, employee.endDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstName, lastName, jobTitle, birthDate, startDate, endDate);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", firstName='" + getFirstName() + "'" +
            ", lastName='" + getLastName() + "'" +
            ", jobTitle='" + getJobTitle() + "'" +
            ", birthDate='" + getBirthDate() + "'" +
            ", startDate='" + getStartDate() + "'" +
            ", endDate='" + getEndDate() + "'" +
            "}";
    }
    
}
