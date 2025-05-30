package com.example.demo.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.TeacherClass;


@Repository
public interface TeacherClassRepository extends JpaRepository<TeacherClass, Long> {

}
