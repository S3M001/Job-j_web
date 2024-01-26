package com.example.demo.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Teachers;


@Repository
public interface TeachersRepository extends JpaRepository<Teachers, Long> {

}
