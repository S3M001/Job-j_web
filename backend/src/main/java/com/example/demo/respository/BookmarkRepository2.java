package com.example.demo.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.mapper.Bookmark2;

@Repository
public interface BookmarkRepository2 extends JpaRepository<Bookmark2, Long> {

}