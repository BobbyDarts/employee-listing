package dev.robertgarrison.api.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import dev.robertgarrison.api.models.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    String filterQuery = "SELECT * FROM employees e WHERE (:name IS NULL OR LOWER(CONCAT(e.firstname, ' ', e.lastname)) LIKE LOWER(CONCAT('%',:name, '%'))) AND ((:startDate IS NULL AND :endDate IS NULL) OR ((e.startdate BETWEEN COALESCE(:startDate, e.startdate) AND COALESCE(:endDate, :startDate, e.startdate)) OR (e.enddate IS NOT NULL AND e.enddate BETWEEN COALESCE(:startDate, e.enddate) AND COALESCE(:endDate, :startDate, e.enddate)) OR (:startDate IS NOT NULL AND e.enddate IS NULL AND e.startdate < :startDate)))";

    @Query(value = filterQuery, nativeQuery = true)
    List<Employee> filter(@Param("name") String name, @Param("startDate") String startDate,
            @Param("endDate") String endDate);
}
